import { sanityReadClient } from "@/sanity/lib/client";
import { sanityWriteClient } from "@/sanity/lib/client.server";
import { productByIdQuery } from "@/sanity/queries/products";

// CREATE
export async function createProduct(data: any) {
    return sanityWriteClient.create({
        _type: "product",
        ...data,
    });
}

// UPDATE
export async function updateProduct(id: string, data: Partial<any>) {
    const existing = await sanityReadClient.fetch(productByIdQuery, { id });
    if (!existing) return null;

    return sanityWriteClient.patch(existing._id).set(data).commit();
}

// TODO: ARCHIVE PRODUCT

// DELETE
export async function deleteProduct(id: string) {
    const existing = await sanityReadClient.fetch(productByIdQuery, { id });
    if (!existing) return null;

    return sanityWriteClient.delete(existing._id);
}
