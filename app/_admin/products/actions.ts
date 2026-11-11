"use server";

import { productPayload } from "@/lib/forms/payloads";
import { ProductFormValues } from "@/lib/forms/types";
import { sanityWriteClient } from "@/sanity/lib/client.server";

export async function createProductAction(form: ProductFormValues) {
    return sanityWriteClient.create(productPayload(form));
}

export async function updateProductAction(productId: string, form: ProductFormValues) {
    return sanityWriteClient.patch(productId).set(productPayload(form)).commit();
}
