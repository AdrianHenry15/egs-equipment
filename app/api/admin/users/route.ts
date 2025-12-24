import { NextResponse } from "next/server";
import { sanityReadClient } from "@/sanity/lib/client";
import { allUsersQuery } from "@/sanity/queries/admin/admin";

export async function GET() {
    const users = await sanityReadClient.fetch(allUsersQuery);
    return NextResponse.json(users);
}
