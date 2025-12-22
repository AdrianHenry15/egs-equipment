import { saveProduct, unsaveProduct } from "@/lib/sanity/saves";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { clerkId, productId } = await req.json();
    await saveProduct(clerkId, productId);
    return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
    const { clerkId, productId } = await req.json();
    await unsaveProduct(clerkId, productId);
    return NextResponse.json({ success: true });
}
