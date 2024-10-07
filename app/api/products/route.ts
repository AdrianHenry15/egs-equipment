import { NextResponse } from "next/server";
import {
    AeratorProducts,
    DebrisBlowerProducts,
    NaturalProducts,
    SyntheticProducts,
} from "@/lib/products";

const Products = [
    ...SyntheticProducts,
    ...NaturalProducts,
    ...AeratorProducts,
    ...DebrisBlowerProducts,
];

export async function GET() {
    return NextResponse.json(Products);
}
