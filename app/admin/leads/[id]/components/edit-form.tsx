"use client";

import { LeadFormValues } from "@/lib/forms/types";
import LeadForm from "../../create/components/leads-form";
import { updateLeadAction } from "../../actions";

export default function EditLeadForm({
    id,
    initialValues,
}: {
    id: string;
    initialValues: LeadFormValues;
}) {
    async function onSubmit(form: LeadFormValues) {
        await updateLeadAction(id, form);
    }

    return <LeadForm initialValues={initialValues} onSubmit={onSubmit} />;
}
