import { sanityClient } from "../lib/client";
import { userByClerkIdQuery } from "../queries/user";

export async function updateSanityUser(clerkId: string, data: Partial<any>) {
    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityClient.patch(existing._id).set(data).commit();
}

export async function deleteSanityUser(clerkId: string) {
    const user = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!user) return null;

    return sanityClient.delete(user._id);
}

// UPDATE
export async function updateSanityUserFromWebhook(data: any) {
    const clerkId = data.id;
    const email = data.email_addresses?.[0]?.email_address;
    const name = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();

    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityClient.patch(existing._id).set({ email, name }).commit();
}

// DELETE
export async function deleteSanityUserFromWebhook(clerkId: string) {
    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityClient.delete(existing._id);
}
