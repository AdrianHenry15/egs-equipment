import { NextResponse } from "next/server";
import { sanityReadClient } from "@/sanity/lib/client";
import {
    updateLead,
    updateLeadStatus,
    updateLeadEquipment,
    deleteLead,
} from "@/sanity/mutations/admin/leads";
import { getLeadByIdQuery } from "@/sanity/queries/admin/leads";

interface Params {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        const lead = await sanityReadClient.fetch(getLeadByIdQuery, { id });

        if (!lead) {
            return NextResponse.json({ error: "Lead not found" }, { status: 404 });
        }

        return NextResponse.json(lead);
    } catch (error) {
        console.error("GET /admin/leads/[id] error:", error);
        return NextResponse.json({ error: "Failed to fetch lead" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const body = await req.json();

        if (body.status) {
            await updateLeadStatus(id, body.status);
        }

        if (body.equipmentNeeds || body.equipmentInterest) {
            await updateLeadEquipment(id, {
                equipmentNeeds: body.equipmentNeeds,
                equipmentInterest: body.equipmentInterest,
            });
        }

        if (
            body.firstName ||
            body.lastName ||
            body.email ||
            body.phone ||
            body.company ||
            body.message
        ) {
            await updateLead(id, body);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("PATCH /admin/leads/[id] error:", error);
        return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: Params) {
    const { id } = await params;

    try {
        await deleteLead(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("DELETE /admin/leads/[id] error:", error);
        return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
    }
}
