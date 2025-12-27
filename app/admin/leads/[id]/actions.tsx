"use server";

import { sanityWriteClient } from "@/sanity/lib/client.server";
import { LeadFormValues } from "@/lib/forms/types";
import { leadPayload } from "@/lib/forms/payloads";

export async function updateLeadAction(id: string, form: LeadFormValues) {
    await sanityWriteClient.patch(id).set(leadPayload(form)).commit();
}
