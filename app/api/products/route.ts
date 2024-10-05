import { NextResponse } from "next/server";
import { Products } from "@/lib/products";

export async function GET() {
    return NextResponse.json(Products);
}
