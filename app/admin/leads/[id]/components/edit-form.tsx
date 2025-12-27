"use client";

import { LeadFormValues } from "@/lib/forms/types";
import { updateLeadAction } from "../actions";
import LeadForm from "../../create/components/leads-form";

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
