import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const pathname = req.nextUrl.pathname;

    console.log("[MW] Request:", pathname);

    // Public routes — no auth needed
    if (!isAdminRoute(req)) {
        console.log("[MW] Public route → allow");
        return NextResponse.next();
    }

    console.log("[MW] Admin route detected");

    const { userId } = await auth();
    console.log("[MW] userId:", userId);

    // If not signed in, redirect to sign-in
    if (!userId) {
        console.warn("[MW] No user → redirect to /sign-in");
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Get the backend SDK client instance
    const client = await clerkClient();
    console.log("[MW] Clerk client initialized");

    // Fetch the full user
    const user = await client.users.getUser(userId);
    console.log("[MW] Clerk user fetched:", user.id);

    // Primary email
    const primaryEmail = user.emailAddresses.find(
        (e) => e.id === user.primaryEmailAddressId,
    )?.emailAddress;

    console.log("[MW] Primary email:", primaryEmail);

    const allowedEmails = new Set(
        [process.env.NEXT_PUBLIC_DEV_EMAIL, process.env.NEXT_PUBLIC_CLIENT_EMAIL].filter(Boolean),
    );

    console.log("[MW] Allowed emails:", Array.from(allowedEmails));

    // Unauthorized admin → redirect home
    if (!primaryEmail || !allowedEmails.has(primaryEmail)) {
        console.warn("[MW] Unauthorized admin access blocked");
        return NextResponse.redirect(new URL("/", req.url));
    }

    console.log("[MW] Admin access granted");
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
