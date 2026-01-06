/*
This enables:
    Online status
    Activity tracking
    Admin dashboards
    Rewards logic later
*/

import { sanityWriteClient } from "@/sanity/lib/client.server";
import { auth } from "@clerk/nextjs/server";

export async function POST() {
    const { userId } = await auth();
    if (!userId) return new Response(null, { status: 401 });

    await sanityWriteClient
        .patch(`user-${userId}`)
        .set({ lastSeenAt: new Date().toISOString() })
        .commit();

    return new Response(null, { status: 204 });
}
