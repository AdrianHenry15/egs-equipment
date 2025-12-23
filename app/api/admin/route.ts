import "server-only";

import { auth } from "@clerk/nextjs/server";
import { sanityReadClient } from "@/sanity/lib/client";
import { userByClerkIdQuery } from "@/sanity/queries/users";

export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return Response.json({
            isSignedIn: false,
            isAdmin: false,
        });
    }

    const sanityUser = await sanityReadClient.fetch(userByClerkIdQuery, {
        clerkId: userId,
    });

    const isAdmin = sanityUser?.role === "admin";

    return Response.json({
        isSignedIn: true,
        isAdmin,
    });
}
