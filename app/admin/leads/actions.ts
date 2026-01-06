"use server";

import { clientPayload, leadPayload } from "@/lib/forms/payloads";
import { LeadFormValues } from "@/lib/forms/types";
import { sanityReadClient } from "@/sanity/lib/client";
import { sanityWriteClient } from "@/sanity/lib/client.server";
import { getLeadByIdQuery } from "@/sanity/queries/admin/leads";

export async function createLeadAction(form: LeadFormValues) {
    await sanityWriteClient.create(leadPayload(form));
}

export async function bulkCreateLeadsAction(forms: LeadFormValues[]) {
    await Promise.all(forms.map((f) => sanityWriteClient.create(leadPayload(f))));
}

export async function updateLeadAction(id: string, form: LeadFormValues) {
    await sanityWriteClient.patch(id).set(leadPayload(form)).commit();
}

/**
 * Converts a Lead → Client
 * - Creates a new client
 * - Links client.lead → lead
 * - Marks lead.status = "converted"
 */
export async function convertLeadToClientAction(leadId: string) {
    // 1️⃣ Fetch lead
    const lead = await sanityReadClient.fetch(getLeadByIdQuery, {
        id: leadId,
    });

    if (!lead) {
        throw new Error("Lead not found");
    }

    // 2️⃣ Guard: prevent double conversion
    if (lead.status === "converted") {
        throw new Error("Lead has already been converted");
    }

    // 3️⃣ Build client payload from lead
    const clientDoc = clientPayload({
        name: [lead.firstName, lead.lastName].filter(Boolean).join(" "),
        email: lead.email,
        phone: lead.phone ?? "",
        company: lead.company ?? "",
        website: "",
        status: "active",
        equipmentOwned: [],
        equipmentNeeds: lead.equipmentNeeds ?? [],
        equipmentInterest: lead.equipmentInterest?.map((r: any) => r._ref) ?? [],
        notes: lead.message ?? "",
        lead: leadId,
    });

    // 4️⃣ Transaction: create client + update lead
    const transaction = sanityWriteClient.transaction();

    const clientRef = sanityWriteClient.create(clientDoc).then((client) => client._id);

    transaction.patch(leadId, (patch) =>
        patch.set({
            status: "converted",
        }),
    );

    // 5️⃣ Commit transaction
    await transaction.commit();

    // 6️⃣ Resolve client ID and return
    return {
        clientId: await clientRef,
    };
}
