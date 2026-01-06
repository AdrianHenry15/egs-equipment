"use client";

import { useState } from "react";
import { DEFAULT_EVENT_FORM } from "@/lib/forms/constants";
import { EventFormValues } from "@/lib/forms/types";
import { Field, Input, Select, Textarea } from "@/components/forms/form-module";

/* -------------------------------- */
/* Validation */
/* -------------------------------- */

type EventErrors = Partial<Record<keyof EventFormValues, string>>;

function validate(form: EventFormValues): EventErrors {
    const errors: EventErrors = {};

    if (!form.name.trim()) {
        errors.name = "Event name is required";
    }

    if (!form.slug.current.trim()) {
        errors.slug = "Slug is required";
    }

    if (!form.startDate) {
        errors.startDate = "Start date is required";
    }

    if (!form.type) {
        errors.type = "Event type is required";
    }

    return errors;
}

/* -------------------------------- */
/* Event Form */
/* -------------------------------- */

export default function EventForm({
    initialValues,
    onSubmit,
}: {
    initialValues?: EventFormValues;
    onSubmit: (values: EventFormValues) => Promise<unknown>;
}) {
    const [form, setForm] = useState<EventFormValues>(initialValues ?? DEFAULT_EVENT_FORM);
    const [errors, setErrors] = useState<EventErrors>({});
    const [submitting, setSubmitting] = useState(false);

    function update<K extends keyof EventFormValues>(key: K, value: EventFormValues[K]) {
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
                <h1 className="text-3xl font-semibold">Create Event</h1>
                <aside className="text-gray-400">Add an event your company is attending.</aside>
            </div>

            {/* BASIC INFO */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Event Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Event name" required error={errors.name}>
                        <Input value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </Field>

                    <Field label="Slug" required error={errors.slug}>
                        <Input
                            value={form.slug.current}
                            onChange={(e) => update("slug", { current: e.target.value })}
                        />
                    </Field>

                    <Field label="Event type" required error={errors.type}>
                        <Select
                            value={form.type}
                            onChange={(e) => update("type", e.target.value as any)}
                        >
                            <option value="trade_show">Trade Show</option>
                            <option value="demo_day">Demo Day</option>
                            <option value="tournament">Tournament</option>
                            <option value="conference">Conference</option>
                            <option value="client_visit">Client Visit</option>
                            <option value="other">Other</option>
                        </Select>
                    </Field>

                    <Field label="Status">
                        <Select
                            value={form.status}
                            onChange={(e) => update("status", e.target.value as any)}
                        >
                            <option value="upcoming">Upcoming</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </Select>
                    </Field>
                </div>
            </section>

            {/* DATES */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Dates</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Start date" required error={errors.startDate}>
                        <Input
                            type="datetime-local"
                            value={form.startDate}
                            onChange={(e) => update("startDate", e.target.value)}
                        />
                    </Field>

                    <Field label="End date">
                        <Input
                            type="datetime-local"
                            value={form.endDate}
                            onChange={(e) => update("endDate", e.target.value)}
                        />
                    </Field>
                </div>
            </section>

            {/* LOCATION */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Location</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Venue">
                        <Input
                            value={form.location.venue}
                            onChange={(e) =>
                                update("location", {
                                    ...form.location,
                                    venue: e.target.value,
                                })
                            }
                        />
                    </Field>

                    <Field label="City">
                        <Input
                            value={form.location.city}
                            onChange={(e) =>
                                update("location", {
                                    ...form.location,
                                    city: e.target.value,
                                })
                            }
                        />
                    </Field>

                    <Field label="State / Province">
                        <Input
                            value={form.location.state}
                            onChange={(e) =>
                                update("location", {
                                    ...form.location,
                                    state: e.target.value,
                                })
                            }
                        />
                    </Field>

                    <Field label="Country">
                        <Input
                            value={form.location.country}
                            onChange={(e) =>
                                update("location", {
                                    ...form.location,
                                    country: e.target.value,
                                })
                            }
                        />
                    </Field>
                </div>
            </section>

            {/* DESCRIPTION */}
            <section className="rounded-lg border p-6 bg-white dark:bg-gray-950">
                <h2 className="mb-4 text-lg font-semibold">Description</h2>

                <Textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                />
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
                    {submitting ? "Saving..." : "Save Event"}
                </button>
            </div>
        </form>
    );
}
