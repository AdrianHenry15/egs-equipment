import { create } from "zustand";
import { persist } from "zustand/middleware";

type CookieConsentState = {
    isOpen: boolean;
    consent: "all" | "essential" | null;
    open: () => void;
    close: () => void;
    acceptAll: () => void;
    acceptEssential: () => void;
};

export const useCookieConsentStore = create(
    persist<CookieConsentState>(
        (set) => ({
            isOpen: false,
            consent: null,

            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),

            acceptAll: () =>
                set({
                    consent: "all",
                    isOpen: false,
                }),

            acceptEssential: () =>
                set({
                    consent: "essential",
                    isOpen: false,
                }),
        }),
        {
            name: "cookie-consent",
        },
    ),
);
