import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CookieConsentType = "all" | "essential" | "rejected" | null;

const CURRENT_POLICY_VERSION = 1;

type CookieConsentState = {
    isOpen: boolean;
    consent: CookieConsentType;
    consentAt: number | null;
    policyVersion: number;
    hasHydrated: boolean;

    open: () => void;
    close: () => void;

    acceptAll: () => void;
    acceptEssential: () => void;
    rejectAll: () => void;
    reset: () => void;

    hasConsented: () => boolean;
    allowAnalytics: () => boolean;
    setHasHydrated: (value: boolean) => void;
};

export const useCookieConsentStore = create<CookieConsentState>()(
    persist(
        (set, get) => ({
            isOpen: false,
            consent: null,
            consentAt: null,
            policyVersion: CURRENT_POLICY_VERSION,
            hasHydrated: false,

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
                    policyVersion: CURRENT_POLICY_VERSION,
                    isOpen: true,
                }),

            hasConsented: () => get().consent !== null,
            allowAnalytics: () => get().consent === "all",

            setHasHydrated: (value) => set({ hasHydrated: value }),
        }),
        {
            name: "cookie-consent",
            version: CURRENT_POLICY_VERSION,

            partialize: (state) => ({
                isOpen: state.isOpen,
                consent: state.consent,
                consentAt: state.consentAt,
                policyVersion: state.policyVersion,
            }),

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);

                if (!state?.consent) {
                    state?.open();
                }
            },

            migrate: () => ({
                isOpen: true,
                consent: null,
                consentAt: null,
                policyVersion: CURRENT_POLICY_VERSION,
                hasHydrated: true,
            }),
        },
    ),
);
