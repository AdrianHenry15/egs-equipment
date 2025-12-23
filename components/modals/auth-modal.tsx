"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { useModalStore } from "@/stores/modals/modal-store";

interface AuthModalProps {
    mode: "sign_in" | "sign_up";
}

export default function AuthModal({ mode }: AuthModalProps) {
    const { openModal } = useModalStore();

    return (
        <div className="space-y-4">
            {mode === "sign_in" ? (
                <SignIn routing="virtual" fallbackRedirectUrl="/" />
            ) : (
                <SignUp routing="virtual" fallbackRedirectUrl="/" />
            )}

            <button
                className="text-sm text-blue-600 underline"
                onClick={() => openModal(mode === "sign_in" ? "sign_up" : "sign_in")}
            >
                {mode === "sign_in" ? "Create an account" : "Already have an account?"}
            </button>
        </div>
    );
}
