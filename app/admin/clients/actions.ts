"use server";

import { ClientFormValues } from "@/lib/forms/types";
import { clientPayload } from "@/lib/forms/payloads";
import { sanityWriteClient } from "@/sanity/lib/client.server";

export async function createClientAction(form: ClientFormValues) {
    return sanityWriteClient.create(clientPayload(form));
}

export async function updateClientAction(clientId: string, form: ClientFormValues) {
    return sanityWriteClient.patch(clientId).set(clientPayload(form)).commit();
}
