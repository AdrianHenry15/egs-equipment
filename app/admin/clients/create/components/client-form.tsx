"use client";

import { useState } from "react";
import { DEFAULT_CLIENT_FORM } from "@/lib/forms/constants";
import { ClientFormValues } from "@/lib/forms/types";
import { Field, Input, Select, Textarea } from "@/components/forms/form-module";

/* -------------------------------- */
/* Validation */
/* -------------------------------- */

type ClientErrors = Partial<Record<keyof ClientFormValues, string>>;

function validate(form: ClientFormValues): ClientErrors {
    const errors: ClientErrors = {};

    if (!form.name.trim()) {
        errors.name = "Client name is required";
    }

    if (!form.email.trim()) {
        errors.email = "Email is required";
    }

    return errors;
}

/* -------------------------------- */
/* Client Form */
/* -------------------------------- */

export default function ClientForm({
    initialValues,
    onSubmit,
}: {
    initialValues?: ClientFormValues;
    onSubmit: (values: ClientFormValues) => Promise<unknown>;
}) {
    const [form, setForm] = useState<ClientFormValues>(initialValues ?? DEFAULT_CLIENT_FORM);
    const [errors, setErrors] = useState<ClientErrors>({});
    const [submitting, setSubmitting] = useState(false);

    function update<K extends keyof ClientFormValues>(key: K, value: ClientFormValues[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: undefined }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setSubmitting(true);
        await onSubmit(form);
        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-semibold">
                    {initialValues ? "Edit Client" : "Create Client"}
                </h1>
                <aside className="text-gray-400">
                    {initialValues ? "Edit an existing client." : "Add a client to the system."}
                </aside>
            </div>

            {/* BASIC INFO */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Client Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Client name" required error={errors.name}>
                        <Input value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </Field>

                    <Field label="Email" required error={errors.email}>
                        <Input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                        />
                    </Field>

                    <Field label="Phone">
                        <Input
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                        />
                    </Field>

                    <Field label="Company">
                        <Input
                            value={form.company}
                            onChange={(e) => update("company", e.target.value)}
                        />
                    </Field>

                    <Field label="Website">
                        <Input
                            value={form.website}
                            onChange={(e) => update("website", e.target.value)}
                        />
                    </Field>

                    <Field label="Status">
                        <Select
                            value={form.status}
                            onChange={(e) => update("status", e.target.value as any)}
                        >
                            <option value="active">Active</option>
                            <option value="paused">Paused</option>
                            <option value="completed">Completed</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                    </Field>
                </div>
            </section>

            {/* NOTES */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Internal Notes</h2>

                <Textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                />
            </section>

            {/* ACTION BAR */}
            <div className="sticky bottom-0 flex justify-end border-t p-4 bg-white dark:bg-gray-950">
                <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-md bg-black px-6 py-2 text-white disabled:opacity-50"
                >
                    {submitting ? "Saving..." : "Save Client"}
                </button>
            </div>
        </form>
    );
}
