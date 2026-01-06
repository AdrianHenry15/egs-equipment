import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CookieConsentType = "all" | "essential" | "rejected" | null;

const CURRENT_POLICY_VERSION = 1;

type CookieConsentState = {
    isOpen: boolean;
    consent: CookieConsentType;
    consentAt: number | null;
    policyVersion: number;

    open: () => void;
    close: () => void;

    acceptAll: () => void;
    acceptEssential: () => void;
    rejectAll: () => void;

    reset: () => void;

    /** Derived helpers */
    hasConsented: () => boolean;
    allowAnalytics: () => boolean;
};

export const useCookieConsentStore = create(
    persist<CookieConsentState>(
        (set, get) => ({
            isOpen: false,
            consent: null,
            consentAt: null,
            policyVersion: CURRENT_POLICY_VERSION,

            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),

            acceptAll: () =>
                set({
                    consent: "all",
                    consentAt: Date.now(),
                    policyVersion: CURRENT_POLICY_VERSION,
                    isOpen: false,
                }),

            acceptEssential: () =>
                set({
                    consent: "essential",
                    consentAt: Date.now(),
                    policyVersion: CURRENT_POLICY_VERSION,
                    isOpen: false,
                }),

            rejectAll: () =>
                set({
                    consent: "rejected",
                    consentAt: Date.now(),
                    policyVersion: CURRENT_POLICY_VERSION,
                    isOpen: false,
                }),

            reset: () =>
                set({
                    consent: null,
                    consentAt: null,
                    isOpen: true,
                }),

            hasConsented: () => get().consent !== null,
            allowAnalytics: () => get().consent === "all",
        }),
        {
            name: "cookie-consent",
            version: CURRENT_POLICY_VERSION,
            migrate: (state) => ({
                ...(state as CookieConsentState),
                policyVersion: CURRENT_POLICY_VERSION,
            }),
        },
    ),
);
