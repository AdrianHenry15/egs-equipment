"use client";

import { SignedIn, SignedOut, UserButton, SignInButton, useUser, useAuth } from "@clerk/nextjs";
import { UserMenuLoader } from "./user-menu-loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SiReasonstudios } from "react-icons/si";
import { FaLock } from "react-icons/fa6";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function UserMenu() {
    const { isLoaded: userLoaded, isSignedIn } = useUser();
    const { orgRole, has, isLoaded: authLoaded } = useAuth();

    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!userLoaded || !authLoaded || !mounted) {
        return <UserMenuLoader />;
    }

    const isAdmin = isSignedIn && (orgRole === "org:admin" || has?.({ role: "org:admin" }));

    return (
        <div className="mr-2">
            <SignedIn>
                <UserButton userProfileMode="modal" fallback="/">
                    <UserButton.MenuItems>
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
                    {/* <UserButton.UserProfilePage
                        label="Theme"
                        labelIcon={<PaintBrushIcon className="h-5 w-5" />}
                        url="theme"
                    >
                        <div className="px-1 py-2">
                            <ThemeSwitcher />
                        </div>
                    </UserButton.UserProfilePage> */}
                </UserButton>
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <button
                        aria-label="Sign in"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-700" fill="currentColor">
                            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                        </svg>
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    );
}
