import { getSanityUserByClerkId } from "@/sanity/queries/users";
import { NextResponse } from "next/server";

interface Params {
    params: {
        clerkId: string;
    };
}

export async function GET(_: Request, { params }: Params) {
    const { clerkId } = params;

    const user = await getSanityUserByClerkId(clerkId);

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}
