import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/client";
import { allUsersQuery } from "@/sanity/queries/admin/admin";
import { requireAdmin } from "@/lib/auth/require-admin";

export async function GET() {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const users = await sanityClient.fetch(allUsersQuery);
    return NextResponse.json(users);
}
