"use server";

import { leadPayload } from "@/lib/forms/payloads";
import { LeadFormValues } from "@/lib/forms/types";
import { sanityWriteClient } from "@/sanity/lib/client.server";

export async function createLeadAction(form: LeadFormValues) {
    await sanityWriteClient.create(leadPayload(form));
}

export async function bulkCreateLeadsAction(forms: LeadFormValues[]) {
    await Promise.all(forms.map((f) => sanityWriteClient.create(leadPayload(f))));
}
