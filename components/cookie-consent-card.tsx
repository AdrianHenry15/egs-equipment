"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCookieConsentStore } from "@/stores/cookie-consent-store";

export default function CookieConsentCard() {
    const { isOpen, acceptAll, acceptEssential, rejectAll, close } = useCookieConsentStore();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
        >
            <div
                className="
                    mx-auto max-w-3xl rounded-2xl border
                    border-amber-500/30 bg-white shadow-xl
                    dark:border-amber-400/20 dark:bg-neutral-950
                    transition-all duration-300
                    motion-reduce:transition-none
                "
            >
                {/* Header */}
                <div className="relative flex items-start justify-between gap-4 p-5 sm:p-6">
                    <div>
                        <h2
                            id="cookie-consent-title"
                            className="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                            Cookie preferences
                        </h2>
                        <p className="mt-1 max-w-xl text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                            We use essential cookies for core site functionality. With your permission, analytics
                            cookies help us understand usage and improve performance.
                        </p>
                    </div>

                    {/* Treat dismiss as reject */}
                    <button
                        onClick={() => {
                            rejectAll();
                            close();
                        }}
                        aria-label="Reject non-essential cookies"
                        className="
                            rounded-lg p-1.5 text-gray-400
                            hover:bg-gray-100 hover:text-gray-900
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                            dark:hover:bg-neutral-900 dark:hover:text-gray-100
                        "
                    >
                        <XMarkIcon className="h-4 w-4" />
                    </button>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-2 border-t border-gray-100 p-4 sm:flex-row sm:justify-end sm:gap-3 sm:p-6 dark:border-neutral-800">
                    <button
                        onClick={rejectAll}
                        className="
                            inline-flex items-center justify-center
                            rounded-lg border border-gray-300
                            px-4 py-2 text-xs font-medium text-gray-700
                            hover:bg-gray-100
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                            dark:border-neutral-700 dark:text-gray-300 dark:hover:bg-neutral-900
                        "
                    >
                        Reject all
                    </button>

                    <button
                        onClick={acceptEssential}
                        className="
                            inline-flex items-center justify-center
                            rounded-lg border border-gray-300
                            px-4 py-2 text-xs font-medium text-gray-800
                            hover:bg-gray-100
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                            dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-900
                        "
                    >
                        Essential only
                    </button>

                    <button
                        onClick={acceptAll}
                        className="
                            inline-flex items-center justify-center
                            rounded-lg bg-green-600
                            px-4 py-2 text-xs font-semibold text-white
                            hover:bg-green-700
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                            dark:bg-green-500 dark:hover:bg-green-600
                        "
                    >
                        Accept all cookies
                    </button>
                </div>

                {/* Footer */}
                <div className="px-5 pb-4 text-[10px] text-gray-500 sm:px-6 dark:text-gray-500">
                    You can update your cookie preferences at any time in settings.
                </div>
            </div>
        </div>
    );
}
