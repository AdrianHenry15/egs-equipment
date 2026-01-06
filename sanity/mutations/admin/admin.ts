import { sanityReadClient } from "@/sanity/lib/client";
import { userByClerkIdQuery } from "../../queries/users";
import { sanityWriteClient } from "@/sanity/lib/client.server";

// UPDATE ANY USER
export async function adminUpdateUser(clerkId: string, data: Partial<any>) {
    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityWriteClient.patch(existing._id).set(data).commit();
}

// DELETE ANY USER
export async function adminDeleteUser(clerkId: string) {
    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityWriteClient.delete(existing._id);
}
