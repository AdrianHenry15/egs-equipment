"use client";

import Link from "next/link";
import { useCookieConsentStore } from "@/stores/cookie-consent-store";

const itemClass =
    "block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring";

export default function OptionsPanel({ close }: { close: () => void }) {
    const { open: openCookieModal } = useCookieConsentStore();

    return (
        <nav
            aria-label="Website settings links"
            className="w-64 max-w-[calc(100vw-2rem)] space-y-1 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-xl"
        >
            <Link href="/accessibility" onClick={close} className={itemClass}>
                Accessibility &amp; help
            </Link>
            <Link href="/privacy" onClick={close} className={itemClass}>
                Privacy Policy
            </Link>
            <Link href="/site-map" onClick={close} className={itemClass}>
                Sitemap
            </Link>
            <button
                type="button"
                onClick={() => {
                    close();
                    openCookieModal();
                }}
                className={itemClass}
            >
                Cookie preferences
            </button>
        </nav>
    );
}
