import { currentUser } from "@clerk/nextjs/server";

export async function requireAdmin() {
    const user = await currentUser();
    if (!user) return null;

    const role = user.publicMetadata?.role;

    if (role !== "admin") return null;

    return user;
}
