import { NextResponse } from "next/server";

import { adminUpdateUser, adminDeleteUser } from "@/sanity/mutations/admin/admin";
import { getSanityUserByClerkId } from "@/sanity/queries/users";

interface Params {
    params: Promise<{
        clerkId: string;
    }>;
}

export async function GET(_: Request, { params }: Params) {
    const { clerkId } = await params;
    const user = await getSanityUserByClerkId(clerkId);
    if (!user) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PATCH(req: Request, { params }: Params) {
    const { clerkId } = await params;

    const data = await req.json();
    const updated = await adminUpdateUser(clerkId, data);

    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
    const { clerkId } = await params;

    await adminDeleteUser(clerkId);
    return NextResponse.json({ status: "deleted", clerkId });
}
