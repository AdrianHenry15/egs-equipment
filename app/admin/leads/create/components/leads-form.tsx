"use client";

import { DEFAULT_LEAD_FORM } from "@/lib/forms/constants";
import { LeadFormValues } from "@/lib/forms/types";
import { useState } from "react";

const EQUIPMENT_CATEGORIES = [
    "Line Markers",
    "Goals",
    "Aerators",
    "Brushes",
    "Sweepers",
    "Top Dressers",
    "Seeders",
    "Mowers",
    "Debris Blowers",
    "Synthetic Turf Equipment",
    "Natural Turf Equipment",
];

export default function LeadForm({
    initialValues,
    onSubmit,
}: {
    initialValues?: LeadFormValues;
    onSubmit: (values: LeadFormValues) => Promise<void>;
}) {
    const [form, setForm] = useState<LeadFormValues>(initialValues ?? DEFAULT_LEAD_FORM);
    const [submitting, setSubmitting] = useState(false);

    function update<K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        await onSubmit(form);
        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* CONTACT INFO */}
            <section className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First name" required>
                        <input
                            value={form.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            required
                        />
                    </Field>

                    <Field label="Last name">
                        <input
                            value={form.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                        />
                    </Field>

                    <Field label="Email" required>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            required
                        />
                    </Field>

                    <Field label="Phone">
                        <input
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                        />
                    </Field>
                </div>
            </section>

            {/* COMPANY */}
            <section className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Company</h2>

                <Field label="Company name">
                    <input
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                    />
                </Field>
            </section>

            {/* EQUIPMENT */}
            <section className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Equipment Needs</h2>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {EQUIPMENT_CATEGORIES.map((item) => {
                        const checked = form.equipmentNeeds.includes(item);

                        return (
                            <label
                                key={item}
                                className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) => {
                                        const next = new Set(form.equipmentNeeds);
                                        e.target.checked ? next.add(item) : next.delete(item);
                                        update("equipmentNeeds", Array.from(next));
                                    }}
                                />
                                {item}
                            </label>
                        );
                    })}
                </div>
            </section>

            {/* NOTES */}
            <section className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Notes</h2>

                <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full"
                />
            </section>

            {/* META */}
            <section className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Lead Details</h2>

                <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Source">
                        <select
                            value={form.source}
                            onChange={(e) => update("source", e.target.value as any)}
                        >
                            <option value="">Select</option>
                            <option>Website Form</option>
                            <option>Email</option>
                            <option>Referral</option>
                            <option>Cold Outreach</option>
                            <option>Google</option>
                            <option>Other</option>
                        </select>
                    </Field>

                    <Field label="Priority">
                        <select
                            value={form.priority}
                            onChange={(e) => update("priority", e.target.value as any)}
                        >
                            <option value="">Select</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </Field>

                    <Field label="Status">
                        <select
                            value={form.status}
                            onChange={(e) => update("status", e.target.value as any)}
                        >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="lost">Lost</option>
                            <option value="converted">Converted</option>
                        </select>
                    </Field>
                </div>
            </section>

            {/* ACTION BAR */}
            <div className="sticky bottom-0 flex justify-end gap-3 border-t bg-white p-4">
                <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-md bg-black px-6 py-2 text-white disabled:opacity-50"
                >
                    {submitting ? "Saving..." : "Save Lead"}
                </button>
            </div>
        </form>
    );
}

/* ----------------------------- */
/* Reusable Field Wrapper */
/* ----------------------------- */

function Field({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </span>
            {children}
        </label>
    );
}
