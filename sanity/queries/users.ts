import { auth, currentUser } from "@clerk/nextjs/server";
import { sanityReadClient } from "../lib/client";
import { sanityWriteClient } from "../lib/client.server";

// Fetch user by Clerk ID
export const userByClerkIdQuery = `
  *[_type == "user" && clerkId == $clerkId][0]{
    _id,
    role
  }
`;

type SanityRole = "admin" | "customer";

/**
 * Server-side ensure (request-based)
 */
export async function ensureSanityUser() {
    const clerk = await currentUser();
    if (!clerk) return null;

    const { userId, orgRole } = await auth();
    if (!userId) return null;

    const clerkId = clerk.id;
    const email = clerk.emailAddresses?.[0]?.emailAddress ?? "";
    const name = clerk.fullName ?? "";

    const isClerkAdmin = orgRole === "org:admin";

    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });

    const finalRole: SanityRole = existing?.role === "admin" || isClerkAdmin ? "admin" : "customer";

    return sanityWriteClient.createOrReplace({
        _id: `user-${clerkId}`, // 🔒 deterministic
        _type: "user",
        clerkId,
        email,
        name,
        role: finalRole,
    });
}

export async function ensureSanityUserFromWebhook(data: any) {
    const clerkId = data.id;
    const email = data.email_addresses?.[0]?.email_address;
    const name = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();

    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });

    if (existing) return existing;

    return sanityWriteClient.create({
        _type: "user",
        clerkId,
        email,
        name,
        role: "customer",
    });
}

export async function getSanityUserByClerkId(clerkId: string) {
    const user = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    return user ?? null;
}
