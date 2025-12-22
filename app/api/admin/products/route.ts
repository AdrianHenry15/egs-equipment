import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/client";
import { requireAdmin } from "@/lib/auth/require-admin";
import { adminProductsQuery } from "@/sanity/queries/products";
import { createProduct } from "@/sanity/mutations/products";

// LIST (admin)
export async function GET() {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const products = await sanityClient.fetch(adminProductsQuery);
    return NextResponse.json(products);
}

// CREATE
export async function POST(req: Request) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const data = await req.json();
    const product = await createProduct(data);

    return NextResponse.json(product);
}
