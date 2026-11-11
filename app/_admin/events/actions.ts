"use server";

import { sanityWriteClient } from "@/sanity/lib/client.server";
import { EventFormValues } from "@/lib/forms/types";
import { eventPayload } from "@/lib/forms/payloads";

export async function createEventAction(form: EventFormValues) {
    return sanityWriteClient.create(eventPayload(form));
}

export async function updateEventAction(eventId: string, form: EventFormValues) {
    const { _type, ...payload } = eventPayload(form);

    return sanityWriteClient.patch(eventId).set(payload).commit();
}
