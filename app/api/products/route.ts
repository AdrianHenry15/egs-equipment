import { NextResponse } from "next/server";
import {
    AeratorProducts,
    DebrisBlowerProducts,
    GolfSportsTurfProducts,
    SyntheticTurfProducts,
} from "@/lib/products";

const Products = [
    ...SyntheticTurfProducts,
    ...GolfSportsTurfProducts,
    ...AeratorProducts,
    ...DebrisBlowerProducts,
];

export async function GET() {
    return NextResponse.json(Products);
}
