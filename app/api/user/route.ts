import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { updateSanityUser, deleteSanityUser } from "@/sanity/mutations/user";
import { getSanityUserByClerkId } from "@/sanity/queries/users";

export async function GET() {
    const auth = await currentUser();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await getSanityUserByClerkId(auth.id);
    return NextResponse.json(user);
}

export async function PATCH(req: Request) {
    const auth = await currentUser();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();

    const updated = await updateSanityUser(auth.id, data);
    return NextResponse.json(updated);
}

export async function DELETE() {
    const auth = await currentUser();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const deleted = await deleteSanityUser(auth.id);

    return NextResponse.json({ status: "deleted", id: auth.id });
}
