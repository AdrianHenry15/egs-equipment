import { create } from "zustand";
import { persist } from "zustand/middleware";

type CookieConsentState = {
    version: 1;
    essential: true;
    analytics: boolean;
    hasConsented: boolean;
    isOpen: boolean;

    acceptAll: () => void;
    acceptEssential: () => void;
    open: () => void;
    close: () => void;
};

export const useCookieConsentStore = create<CookieConsentState>()(
    persist(
        (set) => ({
            version: 1,
            essential: true,
            analytics: false,
            hasConsented: false,
            isOpen: true,

            acceptAll: () =>
                set({
                    analytics: true,
                    hasConsented: true,
                    isOpen: false,
                }),

            acceptEssential: () =>
                set({
                    analytics: false,
                    hasConsented: true,
                    isOpen: false,
                }),

            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
        }),
        {
            name: "cookie_consent_v1",
        },
    ),
);
