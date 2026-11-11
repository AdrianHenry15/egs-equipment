import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isTenantRoute = createRouteMatcher(["/organization-selector(.*)", "/orgId/(.*)"]);

const isTenantAdminRoute = createRouteMatcher([
    "/orgId/(.*)/memberships",
    "/orgId/(.*)/domain",
    "/admin(.*)", // add your admin routes here
]);

const authenticate = clerkMiddleware(async (auth, req) => {
    // 🔒 Restrict admin routes to org admins
    if (isTenantAdminRoute(req)) {
        await auth.protect((has) => {
            return has({ role: "org:admin" });
        });
    }

    // 🔐 Restrict org routes to signed-in users
    if (isTenantRoute(req)) {
        await auth.protect();
    }
});

// Skip Clerk’s browser handshake on public pages and catalog endpoints.
const publicRoute = /^(?:\/(?:about|contact|events|finance-options|parts-form|robots\.txt|sitemap\.xml)?|\/(?:api\/)?products(?:\/[^/]+)?)\/?$/;

export default function proxy(...args: Parameters<typeof authenticate>) {
    const [request] = args;
    if (publicRoute.test(request.nextUrl.pathname)) return;

    return authenticate(...args);
}

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
