"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCookieConsentStore } from "@/stores/cookie-consent-store";

export default function CookieConsentCard() {
    const { isOpen, acceptAll, acceptEssential, close } = useCookieConsentStore();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4"
            role="dialog"
            aria-live="polite"
        >
            <div className="relative w-full max-w-3xl rounded-2xl border border-amber-500/40 bg-white p-5 shadow-2xl dark:border-amber-400/30 dark:bg-black">
                {/* Close button */}
                <button
                    onClick={close}
                    aria-label="Close cookie preferences"
                    className="absolute right-3 top-3 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="pr-4">
                        <h2 className="text-sm font-semibold text-green-700 dark:text-green-400">
                            Cookie preferences
                        </h2>

                        <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                            We use essential cookies to ensure the website functions properly. With
                            your permission, we also use analytics cookies to improve performance
                            and user experience.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <button
                            onClick={acceptEssential}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs font-medium text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
                        >
                            Essential only
                        </button>

                        <button
                            onClick={acceptAll}
                            className="w-full rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-green-500 dark:hover:bg-green-600"
                        >
                            Accept all
                        </button>
                    </div>
                </div>

                <p className="mt-3 text-[10px] text-gray-500 dark:text-gray-400">
                    By continuing to use this site, you agree to our use of cookies.
                </p>
            </div>
        </div>
    );
}
