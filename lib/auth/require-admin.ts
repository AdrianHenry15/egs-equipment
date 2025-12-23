import { currentUser, auth } from "@clerk/nextjs/server";
import { sanityReadClient } from "@/sanity/lib/client";

const userByClerkIdQuery = `
  *[_type == "user" && clerkId == $clerkId][0]{
    _id,
    role
  }
`;

export async function requireAdmin() {
    /**
     * 1️⃣ Clerk auth context (org role lives here)
     */
    const { userId, orgRole, orgId } = await auth();
    if (!userId) return null;

    /**
     * 2️⃣ Clerk user (profile data only)
     */
    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    /**
     * 3️⃣ Sanity role
     */
    const sanityUser = await sanityReadClient.fetch(userByClerkIdQuery, {
        clerkId: userId,
    });

    const isSanityAdmin = sanityUser?.role === "admin";
    const isClerkOrgAdmin = orgRole === "org:admin";

    /**
     * 4️⃣ Final authorization (OR logic)
     */
    // if (!isSanityAdmin || !isClerkOrgAdmin) {
    //     return null;
    // }

    return {
        clerkUser,
        sanityUser,
        orgId,
        isSanityAdmin,
        isClerkOrgAdmin,
    };
}
