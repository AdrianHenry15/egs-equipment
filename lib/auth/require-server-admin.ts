import { sanityReadClient } from "@/sanity/lib/client";
import { userByClerkIdQuery } from "@/sanity/queries/users";
import { auth } from "@clerk/nextjs/server";

export async function requireAdmin() {
    const { userId, orgId } = await auth();

    // console.log("[requireAdmin] auth()", { userId, orgRole, orgId });

    if (!userId) return null;

    const sanityUser = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId: userId });

    // console.log("[requireAdmin] sanityUser", sanityUser);

    const isSanityAdmin = sanityUser?.role === "Admin";

    // console.log("[requireAdmin] checks", {
    //     isSanityAdmin,
    //     isClerkOrgAdmin,
    // });

    if (!isSanityAdmin) {
        return null;
    }

    return {
        sanityUser,
        orgId,
        isSanityAdmin,
    };
}
