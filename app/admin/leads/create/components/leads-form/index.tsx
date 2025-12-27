"use client";

import { useState } from "react";
import { DEFAULT_LEAD_FORM } from "@/lib/forms/constants";
import { LeadFormValues } from "@/lib/forms/types";
import { Field, Input, Select, Textarea } from "@/components/forms/form-module";

/* -------------------------------- */
/* Constants */
/* -------------------------------- */

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

/* -------------------------------- */
/* Validation */
/* -------------------------------- */

type LeadErrors = Partial<Record<keyof LeadFormValues, string>>;

function validate(form: LeadFormValues): LeadErrors {
    const errors: LeadErrors = {};

    if (!form.firstName.trim()) {
        errors.firstName = "First name is required";
    }

    if (!form.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        errors.email = "Invalid email address";
    }

    if (form.phone && form.phone.length < 7) {
        errors.phone = "Phone number looks too short";
    }

    if (form.equipmentNeeds.length === 0) {
        errors.equipmentNeeds = "Select at least one equipment type";
    }

    return errors;
}

/* -------------------------------- */
/* Lead Form */
/* -------------------------------- */

export default function LeadForm({
    initialValues,
    onSubmit,
}: {
    initialValues?: LeadFormValues;
    onSubmit: (values: LeadFormValues) => Promise<void>;
}) {
    const [form, setForm] = useState<LeadFormValues>(initialValues ?? DEFAULT_LEAD_FORM);
    const [errors, setErrors] = useState<LeadErrors>({});
    const [submitting, setSubmitting] = useState(false);

    function update<K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) {
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
            {/* CONTACT INFO */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Contact Information
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First name" required error={errors.firstName}>
                        <Input
                            value={form.firstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                update("firstName", e.target.value)
                            }
                        />
                    </Field>

                    <Field label="Last name">
                        <Input
                            value={form.lastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                update("lastName", e.target.value)
                            }
                        />
                    </Field>

                    <Field label="Email" required error={errors.email}>
                        <Input
                            type="email"
                            value={form.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                update("email", e.target.value)
                            }
                        />
                    </Field>

                    <Field label="Phone" error={errors.phone}>
                        <Input
                            value={form.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                update("phone", e.target.value)
                            }
                        />
                    </Field>
                </div>
            </section>

            {/* COMPANY */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Company
                </h2>

                <Field label="Company name">
                    <Input
                        value={form.company}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            update("company", e.target.value)
                        }
                    />
                </Field>
            </section>

            {/* EQUIPMENT */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Equipment Needs
                </h2>

                {errors.equipmentNeeds && (
                    <p className="mb-2 text-sm text-red-600">{errors.equipmentNeeds}</p>
                )}

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {EQUIPMENT_CATEGORIES.map((item) => {
                        const checked = form.equipmentNeeds.includes(item);

                        return (
                            <label
                                key={item}
                                className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm
                                    bg-white border-gray-200 text-gray-800 hover:bg-gray-50
                                    dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
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
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Notes
                </h2>

                <Textarea
                    rows={4}
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        update("message", e.target.value)
                    }
                />
            </section>

            {/* META */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Lead Details
                </h2>

                <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Source">
                        <Select
                            value={form.source}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                update("source", e.target.value as any)
                            }
                        >
                            <option value="">Select</option>
                            <option>Website Form</option>
                            <option>Email</option>
                            <option>Referral</option>
                            <option>Cold Outreach</option>
                            <option>Google</option>
                            <option>Other</option>
                        </Select>
                    </Field>

                    <Field label="Priority">
                        <Select
                            value={form.priority}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                update("priority", e.target.value as any)
                            }
                        >
                            <option value="">Select</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Select>
                    </Field>

                    <Field label="Status">
                        <Select
                            value={form.status}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                update("status", e.target.value as any)
                            }
                        >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="lost">Lost</option>
                            <option value="converted">Converted</option>
                        </Select>
                    </Field>
                </div>
            </section>

            {/* ACTION BAR */}
            <div
                className="sticky bottom-0 flex justify-end gap-3 border-t p-4
                bg-white border-gray-200
                dark:bg-gray-950 dark:border-gray-800"
            >
                <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-md bg-black px-6 py-2 text-white
                        hover:bg-gray-800 disabled:opacity-50"
                >
                    {submitting ? "Saving..." : "Save Lead"}
                </button>
            </div>
        </form>
    );
}
