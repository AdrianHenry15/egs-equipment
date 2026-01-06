"use client";

import { ClientFormValues } from "@/lib/forms/types";
import ClientForm from "../../create/components/client-form";
import { updateClientAction } from "../../actions";

export default function EditClientForm({
    id,
    initialValues,
}: {
    id: string;
    initialValues: ClientFormValues;
}) {
    async function onSubmit(form: ClientFormValues) {
        await updateClientAction(id, form);
    }

    return <ClientForm initialValues={initialValues} onSubmit={onSubmit} />;
}
