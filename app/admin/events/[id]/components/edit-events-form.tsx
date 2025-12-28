"use client";

import { EventFormValues } from "@/lib/forms/types";
import { updateEventAction } from "../../actions";
import EventForm from "../../create/components/event-form";

export default function EditEventForm({
    id,
    initialValues,
}: {
    id: string;
    initialValues: EventFormValues;
}) {
    async function onSubmit(form: EventFormValues) {
        await updateEventAction(id, form);
    }

    return <EventForm initialValues={initialValues} onSubmit={onSubmit} />;
}
