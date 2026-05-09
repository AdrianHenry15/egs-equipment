"use client";

import { useCookieConsentStore } from "@/stores/cookie-consent-store";
import {
    OrganizationSwitcher,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs";
import { useEffect } from "react";

const OptionsPanel = () => {
    const { isLoaded } = useOrganizationList();

    const { memberships } = useOrganization({
        memberships: {
            infinite: true,
            keepPreviousData: true,
        },
    });

    const { open: openCookieModal } = useCookieConsentStore();

    const hasOrgs = isLoaded && (memberships?.count ?? 0) > 0;

    useEffect(() => {
        console.log("User memberships:", memberships);
    }, [memberships]);

    return (
        <div className="w-64 space-y-3 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-xl">
            {/* SIGNED OUT STATE */}
            <SignedOut>
                <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase text-muted-foreground">Account</div>

                    <SignInButton mode="modal">
                        <button
                            className="
                                w-full rounded-md border border-border
                                px-3 py-2 text-sm
                                text-foreground
                                transition-colors duration-150
                                hover:bg-muted
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-ring
                                focus-visible:ring-offset-2
                                focus-visible:ring-offset-background
                            "
                        >
                            Sign in
                        </button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                        <button
                            className="
                                w-full rounded-md border border-border
                                px-3 py-2 text-sm
                                text-foreground
                                transition-colors duration-150
                                hover:bg-muted
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-ring
                                focus-visible:ring-offset-2
                                focus-visible:ring-offset-background
                            "
                        >
                            Sign up
                        </button>
                    </SignUpButton>
                </div>
            </SignedOut>

            {/* SIGNED IN STATE */}
            <SignedIn>
                <div className="text-xs font-semibold uppercase text-muted-foreground">Organizations</div>

                {/* Loading guard */}
                {!isLoaded && <div className="text-sm text-muted-foreground">Loading…</div>}

                {/* Has organizations */}
                {isLoaded && hasOrgs && (
                    <OrganizationSwitcher
                        hidePersonal
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                organizationSwitcherTrigger:
                                    "w-full justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground",
                                organizationSwitcherPopoverCard: "rounded-xl border border-border bg-card shadow-2xl",
                            },
                        }}
                    />
                )}

                {/* No organizations */}
                {isLoaded && !hasOrgs && (
                    <div className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground">
                        No organizations yet
                        <div className="mt-2 text-xs text-muted-foreground">Create one when you need team access.</div>
                    </div>
                )}
            </SignedIn>

            {/* COOKIE SETTINGS */}
            <div className="border-border pt-2 border-t">
                <div className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Privacy</div>

                <button
                    onClick={openCookieModal}
                    className="
                        w-full rounded-md border border-border
                        px-3 py-2 text-left text-sm
                        text-foreground
                        transition-colors duration-150 ease-in-out
                        hover:bg-muted
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-ring
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-background
                    "
                >
                    Cookie preferences
                </button>
            </div>
        </div>
    );
};

export default OptionsPanel;
