"use client";

import { ProductFormValues } from "@/lib/forms/types";
import { updateProductAction } from "../../actions";
import ProductForm from "../../create/components/product-form";

export default function EditProductForm({
    id,
    initialValues,
}: {
    id: string;
    initialValues: ProductFormValues;
}) {
    async function onSubmit(form: ProductFormValues) {
        await updateProductAction(id, form);
    }

    return <ProductForm initialValues={initialValues} onSubmit={onSubmit} />;
}
