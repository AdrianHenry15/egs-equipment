import { ensureSanityUser } from "@/sanity/queries/user";
import { NextResponse } from "next/server";

export async function POST() {
    const user = await ensureSanityUser();
    return NextResponse.json(user);
}
