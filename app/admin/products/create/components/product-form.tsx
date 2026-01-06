"use client";

import { useState } from "react";
import { ProductFormValues } from "@/lib/forms/types";
import { Field, Input, Select, Textarea } from "@/components/forms/form-module";
import { DEFAULT_PRODUCT_FORM } from "@/lib/forms/constants";

/* -------------------------------- */
/* Validation */
/* -------------------------------- */

type ProductErrors = Partial<Record<keyof ProductFormValues, string>>;

function validate(form: ProductFormValues): ProductErrors {
    const errors: ProductErrors = {};

    if (!form.name.trim()) {
        errors.name = "Product name is required";
    }

    if (!form.slug?.current?.trim()) {
        errors.slug = "Slug is required";
    }

    if (!form.mainCategory) {
        errors.mainCategory = "Main category is required";
    }

    if (!form.brand) {
        errors.brand = "Brand is required";
    }

    return errors;
}

/* -------------------------------- */
/* Product Form */
/* -------------------------------- */

export default function ProductForm({
    initialValues,
    onSubmit,
}: {
    initialValues?: ProductFormValues;
    onSubmit: (values: ProductFormValues) => Promise<any>;
}) {
    const [form, setForm] = useState<ProductFormValues>(initialValues ?? DEFAULT_PRODUCT_FORM);
    const [errors, setErrors] = useState<ProductErrors>({});
    const [submitting, setSubmitting] = useState(false);

    function update<K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) {
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
                <h1 className="text-3xl font-semibold">Create Product</h1>
                <aside className="text-gray-400">Add or manage a product in the catalog.</aside>
            </div>

            {/* BASIC INFO */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold">Basic Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Product name" required error={errors.name}>
                        <Input value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </Field>

                    <Field label="Slug" required error={errors.slug}>
                        <Input
                            value={form.slug.current}
                            onChange={(e) => update("slug", { current: e.target.value })}
                        />
                    </Field>
                </div>
            </section>

            {/* DESCRIPTION */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold">Description</h2>

                <Textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                />
            </section>

            {/* CATEGORIZATION */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold">Categorization</h2>

                <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Main category" required error={errors.mainCategory}>
                        <Select
                            value={form.mainCategory}
                            onChange={(e) => update("mainCategory", e.target.value as any)}
                        >
                            <option value="">Select</option>
                            <option>Sport</option>
                            <option>Synthetic Turf</option>
                            <option>Natural Turf</option>
                            <option>Line Marker</option>
                            <option>Hand Tool</option>
                            <option>Goal</option>
                            <option>Debris Blower</option>
                        </Select>
                    </Field>

                    <Field label="Brand" required error={errors.brand}>
                        <Select
                            value={form.brand}
                            onChange={(e) => update("brand", e.target.value as any)}
                        >
                            <option value="">Select</option>
                            <option>Howardsons</option>
                            <option>Harrod Sports</option>
                            <option>Pitchmark</option>
                            <option>Buffalo Turbine</option>
                            <option>Eastman</option>
                            <option>Dennis</option>
                            <option>SISIS</option>
                            <option>Syn-Pro</option>
                        </Select>
                    </Field>

                    <Field label="Used by">
                        <Select
                            value={form.usedBy}
                            onChange={(e) => update("usedBy", e.target.value as any)}
                        >
                            <option value="">Select</option>
                            <option>Golf</option>
                            <option>Soccer</option>
                            <option>American Football</option>
                            <option>Baseball</option>
                            <option>Lacrosse</option>
                            <option>Sports Turf</option>
                            <option>Synthetic Turf</option>
                        </Select>
                    </Field>
                </div>
            </section>

            {/* TAGS */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <h2 className="mb-4 text-lg font-semibold">Tags</h2>

                <Input
                    placeholder="Comma separated tags"
                    value={form.tags.join(", ")}
                    onChange={(e) =>
                        update(
                            "tags",
                            e.target.value
                                .split(",")
                                .map((t) => t.trim())
                                .filter(Boolean),
                        )
                    }
                />
            </section>

            {/* FLAGS */}
            <section className="rounded-lg border p-6 bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={!!form.popular}
                        onChange={(e) => update("popular", e.target.checked)}
                    />
                    Popular product
                </label>
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
                    {submitting ? "Saving..." : "Save Product"}
                </button>
            </div>
        </form>
    );
}
