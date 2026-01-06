import { SanityClient } from "sanity";
import { EventFormValues } from "@/lib/forms/types";
import { eventPayload } from "@/lib/forms/payloads";

/* -------------------------------- */
/* CREATE */
/* -------------------------------- */

export async function createEvent(client: SanityClient, form: EventFormValues) {
    return client.create(eventPayload(form));
}

/* -------------------------------- */
/* UPDATE */
/* -------------------------------- */

export async function updateEvent(client: SanityClient, eventId: string, form: EventFormValues) {
    const { _type, ...payload } = eventPayload(form);

    return client.patch(eventId).set(payload).commit();
}

/* -------------------------------- */
/* DELETE */
/* -------------------------------- */

export async function deleteEvent(client: SanityClient, eventId: string) {
    return client.delete(eventId);
}

/* -------------------------------- */
/* BULK CREATE (CSV, imports) */
/* -------------------------------- */

export async function bulkCreateEvents(client: SanityClient, forms: EventFormValues[]) {
    return Promise.all(forms.map((form) => client.create(eventPayload(form))));
}
