import { getProductBySlug } from "@/sanity/actions/products";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{
        slug: string;
    }>;
}

export async function GET(_: Request, { params }: Params) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}
