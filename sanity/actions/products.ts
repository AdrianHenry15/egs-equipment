import { sanityClient } from "../lib/client";
import {
    filteredProductsQuery,
    productByIdQuery,
    productBySlugQuery,
    productsQuery,
} from "../queries/products";

export async function getProductById(id: string) {
    return sanityClient.fetch(productByIdQuery, { id });
}

export async function getProductBySlug(slug: string) {
    return sanityClient.fetch(productBySlugQuery, { slug });
}

export async function getProducts() {
    return sanityClient.fetch(productsQuery);
}

export async function getFilteredProducts(filters: {
    category?: string;
    brand?: string;
    tag?: string;
}) {
    const params: Record<string, string> = {};

    if (filters.category) params.category = filters.category;
    if (filters.brand) params.brand = filters.brand;
    if (filters.tag) params.tag = filters.tag;

    return sanityClient.fetch(filteredProductsQuery, params);
}
