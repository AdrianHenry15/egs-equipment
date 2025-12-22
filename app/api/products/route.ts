import { getFilteredProducts, getProducts } from "@/sanity/actions/products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category") ?? undefined;
    const brand = searchParams.get("brand") ?? undefined;
    const tag = searchParams.get("tag") ?? undefined;

    // If no filters → return all products
    if (!category && !brand && !tag) {
        const products = await getProducts();
        return NextResponse.json(products);
    }

    // Filtered fetch (safe param construction inside action)
    const products = await getFilteredProducts({
        category,
        brand,
        tag,
    });

    return NextResponse.json(products);
}
