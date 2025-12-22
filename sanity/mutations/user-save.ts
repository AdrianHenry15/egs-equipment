import { sanityClient } from "../lib/client";

export async function saveProduct(clerkId: string, productId: string) {
    return sanityClient.create({
        _type: "userSave",
        clerkId,
        product: {
            _type: "reference",
            _ref: productId,
        },
        createdAt: new Date().toISOString(),
    });
}

export async function unsaveProduct(clerkId: string, productId: string) {
    const query = `
    *[_type == "userSave" && clerkId == $clerkId && product._ref == $productId][0]
  `;

    const save = await sanityClient.fetch(query, { clerkId, productId });

    if (!save) return null;

    return sanityClient.delete(save._id);
}
