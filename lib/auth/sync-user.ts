"server only";

import { currentUser } from "@clerk/nextjs/server";
import { sanityWriteClient } from "@/sanity/lib/client";

export async function syncSanityUser() {
    const user = await currentUser();

    console.log("[Clerk] currentUser()", user);

    if (!user) {
        // console.log("[Sanity Sync] No Clerk user found");
        return null;
    }

    const sanityUser = await sanityWriteClient.createOrReplace({
        _id: `user-${user.id}`,
        _type: "user",
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        image: user.imageUrl,
        lastSeenAt: new Date().toISOString(),
    });

    // console.log("[Sanity] synced user", sanityUser);

    return sanityUser;
}
