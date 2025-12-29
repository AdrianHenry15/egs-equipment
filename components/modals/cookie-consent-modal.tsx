"use client";

import { useCookieConsentStore } from "@/stores/cookie-consent-store";

export default function CookieConsentModal() {
    const { hasConsented, isOpen, acceptAll, acceptEssential } = useCookieConsentStore();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-2xl border border-amber-500/40 bg-white p-6 shadow-xl dark:border-amber-400/30 dark:bg-black sm:p-8">
                <h2 className="text-lg font-semibold text-green-700 dark:text-green-400">
                    Cookie Preferences
                </h2>

                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    We use essential cookies to ensure the website functions properly. With your
                    permission, we also use analytics cookies to improve performance and user
                    experience.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                        onClick={acceptEssential}
                        className="
                            w-full sm:w-auto
                            rounded-md border border-gray-300
                            px-4 py-2 text-sm font-medium
                            text-gray-800 hover:bg-gray-100
                            dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900
                        "
                    >
                        Essential only
                    </button>

                    <button
                        onClick={acceptAll}
                        className="
                            w-full sm:w-auto
                            rounded-md
                            bg-green-600 px-4 py-2
                            text-sm font-semibold text-white
                            hover:bg-green-700
                            focus:outline-none focus:ring-2 focus:ring-amber-500
                            dark:bg-green-500 dark:hover:bg-green-600
                        "
                    >
                        Accept all
                    </button>
                </div>

                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    By continuing, you agree to our use of cookies.
                </p>
            </div>
        </div>
    );
}
