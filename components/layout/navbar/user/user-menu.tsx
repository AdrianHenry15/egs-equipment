"use client";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function UserMenu() {
    return (
        <div className="mr-2">
            {/* Signed in → avatar + dropdown */}
            <SignedIn>
                <UserButton
                    fallback="/"
                    appearance={{
                        layout: {
                            helpPageUrl: "",
                        },
                        elements: {
                            avatarBox: "w-9 h-9",
                            modalBackdrop: "fixed inset-0 bg-black/50",
                            modalContent:
                                "fixed inset-0 flex items-center justify-center p-4 sm:p-6",
                            card: "w-full max-w-md rounded-xl shadow-2xl",
                        },
                    }}
                />
            </SignedIn>

            {/* Signed out → avatar icon that opens sign-in modal */}
            <SignedOut>
                <SignInButton
                    appearance={{
                        elements: {
                            modalBackdrop: "cl-backdrop",
                            modalContent: "cl-modalContent",
                            card: "cl-card",
                        },
                    }}
                    mode="modal"
                >
                    <button
                        aria-label="Sign in"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                        {/* simple user glyph */}
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-gray-700"
                            fill="currentColor"
                        >
                            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                        </svg>
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    );
}
