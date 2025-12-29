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
        // For debugging purposes
        console.log("User memberships:", memberships);
    }, [memberships]);
    return (
        <div className="w-64 rounded-xl border bg-white shadow-xl p-3 space-y-3">
            {/* SIGNED OUT STATE */}
            <SignedOut>
                <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase">Account</div>

                    <SignInButton mode="modal">
                        <button className="w-full text-black rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                            Sign in
                        </button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                        <button className="w-full text-black rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                            Sign up
                        </button>
                    </SignUpButton>
                </div>
            </SignedOut>

            {/* SIGNED IN STATE */}
            <SignedIn>
                <div className="text-xs font-semibold text-gray-500 uppercase">Organizations</div>

                {/* Loading guard */}
                {!isLoaded && <div className="text-sm text-gray-400">Loading…</div>}

                {/* Has organizations */}
                {isLoaded && hasOrgs && (
                    <OrganizationSwitcher
                        hidePersonal
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                organizationSwitcherTrigger:
                                    "w-full justify-between rounded-md border px-3 py-2 text-sm",
                                organizationSwitcherPopoverCard: "rounded-xl shadow-2xl",
                            },
                        }}
                    />
                )}

                {/* No organizations */}
                {isLoaded && !hasOrgs && (
                    <div className="rounded-md border px-3 py-2 text-sm text-gray-500">
                        No organizations yet
                        <div className="mt-2 text-xs text-gray-400">
                            Create one when you need team access.
                        </div>
                    </div>
                )}
            </SignedIn>

            {/* COOKIE SETTINGS */}
            <div className="pt-2 border-t dark:border-gray-800">
                <div className="text-xs font-semibold uppercase text-gray-500 mb-2">Privacy</div>

                <button
                    onClick={openCookieModal}
                    className="
                        w-full text-black rounded-md border px-3 py-2 text-sm
                        text-left hover:bg-gray-50 ease-in-out duration-150
                        dark:hover:bg-gray-300
                    "
                >
                    Cookie preferences
                </button>
            </div>
        </div>
    );
};

export default OptionsPanel;
