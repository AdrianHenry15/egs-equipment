/*
This enables:
    Online status
    Activity tracking
    Admin dashboards
    Rewards logic later
*/

import { auth } from "@clerk/nextjs/server";
import { sanityWriteClient } from "@/sanity/lib/client";

export async function POST() {
    const { userId } = await auth();
    if (!userId) return new Response(null, { status: 401 });

    await sanityWriteClient
        .patch(`user-${userId}`)
        .set({ lastSeenAt: new Date().toISOString() })
        .commit();

    return new Response(null, { status: 204 });
}
