"use client";

import { useCookieConsentStore } from "@/stores/cookie-consent-store";

export default function OptionsPanel() {
    const { open: openCookieModal } = useCookieConsentStore();

    return (
        <div className="w-64 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-xl">
            <button
                type="button"
                onClick={openCookieModal}
                className="w-full rounded-md border border-border px-3 py-2 text-left text-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
            >
                Cookie preferences
            </button>
        </div>
    );
}
