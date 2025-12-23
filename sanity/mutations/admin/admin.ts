import { sanityClient } from "../../lib/client";
import { userByClerkIdQuery } from "../../queries/users";

// UPDATE ANY USER
export async function adminUpdateUser(clerkId: string, data: Partial<any>) {
    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityClient.patch(existing._id).set(data).commit();
}

// DELETE ANY USER
export async function adminDeleteUser(clerkId: string) {
    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityClient.delete(existing._id);
}
