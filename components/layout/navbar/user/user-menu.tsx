"use client";

import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { UserMenuLoader } from "./user-menu-loader";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiReasonstudios } from "react-icons/si";
import { BiBookmark } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";

export default function UserMenu() {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();
    // 🔒 Fail-safe admin check
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    const adminEmails = [
        process.env.NEXT_PUBLIC_DEV_EMAIL,
        process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    ].filter(Boolean); // removes undefined values

    const isAdmin = isLoaded && isSignedIn && !!userEmail && adminEmails.includes(userEmail);

    useEffect(() => {
        if (!isLoaded) return;
    }, [isLoaded, isSignedIn, user]);

    // Scoped loader only for this UI element
    if (!isLoaded) {
        return <UserMenuLoader />;
    }

    return (
        <div className="mr-2">
            <SignedIn>
                <UserButton
                    userProfileMode="modal"
                    fallback="/"
                    appearance={{
                        elements: {
                            avatarBox: "w-9 h-9",
                            modalBackdrop: "fixed inset-0 bg-black/50",
                            modalContent:
                                "fixed inset-0 flex items-center justify-center p-4 sm:p-6",
                            card: "w-full max-w-md rounded-xl shadow-2xl",
                        },
                    }}
                >
                    <UserButton.MenuItems>
                        <UserButton.Action
                            label="Saved Products"
                            labelIcon={<BiBookmark />}
                            onClick={() => router.push("/user/saved-products")}
                        />
                        {/* Admin Check | No React Fragments because of Clerk Components */}
                        {isAdmin && (
                            <UserButton.Action
                                label="Admin Panel"
                                labelIcon={<FaLock />}
                                onClick={() => router.push("/admin")}
                            />
                        )}
                        {isAdmin && (
                            <UserButton.Action
                                label="Studio"
                                labelIcon={<SiReasonstudios />}
                                onClick={() => router.push("/studio")}
                            />
                        )}
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <button
                        aria-label="Sign in"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
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
