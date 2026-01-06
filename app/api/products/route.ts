import { getFilteredProducts, getProducts } from "@/sanity/actions/products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category") || undefined;
    const brand = searchParams.get("brand") || undefined;
    const tag = searchParams.get("tag") || undefined;

    // No filters → return all products
    if (!category && !brand && !tag) {
        const products = await getProducts();
        return NextResponse.json(products);
    }

    // Build params WITHOUT undefined values
    const filters: { category?: string; brand?: string; tag?: string } = {};

    if (category) filters.category = category;
    if (brand) filters.brand = brand;
    if (tag) filters.tag = tag;

    const products = await getFilteredProducts(filters);

    return NextResponse.json(products);
}
