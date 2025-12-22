import { getProductBySlug } from "@/sanity/actions/products";
import { NextResponse } from "next/server";

interface Params {
    params: {
        slug: string;
    };
}

export async function GET(_: Request, { params }: Params) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}
