import { NextResponse } from "next/server";

import { adminUpdateUser, adminDeleteUser } from "@/sanity/mutations/admin/admin";
import { getSanityUserByClerkId } from "@/sanity/queries/users";

interface Params {
    params: {
        clerkId: string;
    };
}

export async function GET(_: Request, { params }: Params) {
    const user = await getSanityUserByClerkId(params.clerkId);
    if (!user) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PATCH(req: Request, { params }: Params) {
    const data = await req.json();
    const updated = await adminUpdateUser(params.clerkId, data);

    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
    await adminDeleteUser(params.clerkId);
    return NextResponse.json({ status: "deleted", clerkId: params.clerkId });
}
