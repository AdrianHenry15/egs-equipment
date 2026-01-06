"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const activeTheme = theme === "system" ? systemTheme : theme;

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Theme</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Choose how the application appears for you.</p>

            <div className="grid grid-cols-3 gap-3">
                {["light", "dark", "system"].map((value) => (
                    <button
                        key={value}
                        onClick={() => setTheme(value)}
                        className={`
                            rounded-lg border px-4 py-3 text-sm font-medium transition
                            ${
                                theme === value
                                    ? "border-green-600 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                        `}
                    >
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </button>
                ))}
            </div>

            <p className="text-xs text-gray-400">
                Active theme: <strong>{activeTheme}</strong>
            </p>
        </div>
    );
}
