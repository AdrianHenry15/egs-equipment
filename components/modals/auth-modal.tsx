"use client";

import { SignIn, SignUp } from "@clerk/nextjs";

import { useModalStore } from "@/stores/modal-store/modal-store";

interface AuthModalProps {
    mode: "sign_in" | "sign_up";
}

export default function AuthModal({ mode }: AuthModalProps) {
    const { openModal } = useModalStore();

    return (
        <div className="w-full max-w-md space-y-4 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl">
            {mode === "sign_in" ? (
                <SignIn routing="virtual" fallbackRedirectUrl="/" />
            ) : (
                <SignUp routing="virtual" fallbackRedirectUrl="/" />
            )}

            <button
                type="button"
                className="text-sm font-medium text-primary underline underline-offset-4 transition hover:text-accent-foreground"
                onClick={() => openModal(mode === "sign_in" ? "sign_up" : "sign_in")}
            >
                {mode === "sign_in" ? "Create an account" : "Already have an account?"}
            </button>
        </div>
    );
}
