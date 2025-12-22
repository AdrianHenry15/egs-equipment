import { currentUser } from "@clerk/nextjs/server";
import { sanityClient } from "../lib/client";

// Fetch user by Clerk ID
export const userByClerkIdQuery = `
  *[_type == "user" && clerkId == $clerkId][0]
`;

export async function ensureSanityUser() {
    const clerk = await currentUser();
    if (!clerk) return null;

    const { id: clerkId, fullName, emailAddresses } = clerk;
    const email = emailAddresses?.[0]?.emailAddress;

    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });

    if (existing) return existing;

    return sanityClient.create({
        _type: "user",
        clerkId,
        email,
        name: fullName ?? "",
        role: "customer",
    });
}

export async function ensureSanityUserFromWebhook(data: any) {
    const clerkId = data.id;
    const email = data.email_addresses?.[0]?.email_address;
    const name = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();

    const existing = await sanityClient.fetch(userByClerkIdQuery, { clerkId });

    if (existing) return existing;

    return sanityClient.create({
        _type: "user",
        clerkId,
        email,
        name,
        role: "customer",
    });
}
