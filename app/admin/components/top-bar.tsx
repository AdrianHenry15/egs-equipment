"use client";

import { useTheme } from "next-themes";

export default function TopBar() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
            <span className="font-medium">Admin Panel</span>

            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-sm border rounded px-3 py-1"
            >
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </header>
    );
}
