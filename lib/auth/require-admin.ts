import { currentUser } from "@clerk/nextjs/server";

const DEV_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL as string;
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_CLIENT_EMAIL as string;

export async function requireAdmin(): Promise<boolean> {
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) return false;

    return email === DEV_EMAIL || email === CLIENT_EMAIL;
}
