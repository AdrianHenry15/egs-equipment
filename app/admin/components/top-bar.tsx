"use client";

import { BiMenu } from "react-icons/bi";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center gap-4 px-4">
            {/* Mobile menu button */}
            <button
                onClick={onMenuClick}
                className="md:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-900"
                aria-label="Open sidebar"
            >
                <BiMenu size={20} />
            </button>

            <span className="font-medium">Admin Panel</span>
        </header>
    );
}
