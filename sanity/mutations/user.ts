import { sanityReadClient, sanityWriteClient } from "../lib/client.server";
import { userByClerkIdQuery } from "../queries/users";

// UPDATE
export async function updateSanityUser(clerkId: string, data: Partial<any>) {
    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityWriteClient.patch(existing._id).set(data).commit();
}

// TODO: ARCHIVE USER FROM WEBHOOK

// DELETE
export async function deleteSanityUser(clerkId: string) {
    const user = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!user) return null;

    return sanityWriteClient.delete(user._id);
}

// UPDATE
export async function updateSanityUserFromWebhook(data: any) {
    const clerkId = data.id;
    const email = data.email_addresses?.[0]?.email_address;
    const name = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();

    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityWriteClient.patch(existing._id).set({ email, name }).commit();
}

// TODO: ARCHIVE USER FROM WEBHOOK

// DELETE
export async function deleteSanityUserFromWebhook(clerkId: string) {
    const existing = await sanityReadClient.fetch(userByClerkIdQuery, { clerkId });
    if (!existing) return null;

    return sanityWriteClient.delete(existing._id);
}
