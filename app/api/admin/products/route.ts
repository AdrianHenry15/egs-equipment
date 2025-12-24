import { NextResponse } from "next/server";
import { adminProductsQuery } from "@/sanity/queries/products";
import { sanityReadClient } from "@/sanity/lib/client";
import { createProduct } from "@/sanity/mutations/admin/products";

// LIST (admin)
export async function GET() {
    const products = await sanityReadClient.fetch(adminProductsQuery);
    return NextResponse.json(products);
}

// CREATE
export async function POST(req: Request) {
    const data = await req.json();
    const product = await createProduct(data);

    return NextResponse.json(product);
}
