import { sanityClient } from "../lib/client";
import { productByIdQuery } from "../queries/products";

// CREATE
export async function createProduct(data: any) {
    return sanityClient.create({
        _type: "product",
        ...data,
    });
}

// UPDATE
export async function updateProduct(id: string, data: Partial<any>) {
    const existing = await sanityClient.fetch(productByIdQuery, { id });
    if (!existing) return null;

    return sanityClient.patch(existing._id).set(data).commit();
}

// DELETE
export async function deleteProduct(id: string) {
    const existing = await sanityClient.fetch(productByIdQuery, { id });
    if (!existing) return null;

    return sanityClient.delete(existing._id);
}
