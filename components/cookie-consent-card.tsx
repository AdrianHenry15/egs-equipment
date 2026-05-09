"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCookieConsentStore } from "@/stores/cookie-consent-store";

export default function CookieConsentCard() {
    const { isOpen, acceptAll, acceptEssential, rejectAll } = useCookieConsentStore();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
        >
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-xl transition-all duration-300 motion-reduce:transition-none">
                <div className="relative flex items-start justify-between gap-4 p-5 sm:p-6">
                    <div>
                        <h2 id="cookie-consent-title" className="text-sm font-semibold text-foreground">
                            Cookie preferences
                        </h2>

                        <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
                            We use essential cookies for core site functionality. With your permission, analytics
                            cookies help us understand usage and improve performance.
                        </p>
                    </div>

                    <button
                        onClick={rejectAll}
                        aria-label="Reject non-essential cookies"
                        className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <XMarkIcon className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-col-reverse gap-2 border-t border-border p-4 sm:flex-row sm:justify-end sm:gap-3 sm:p-6">
                    <button
                        onClick={rejectAll}
                        className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Reject all
                    </button>

                    <button
                        onClick={acceptEssential}
                        className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Essential only
                    </button>

                    <button
                        onClick={acceptAll}
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Accept all cookies
                    </button>
                </div>

                <div className="px-5 pb-4 text-[10px] text-muted-foreground sm:px-6">
                    You can update your cookie preferences at any time in settings.
                </div>
            </div>
        </div>
    );
}
