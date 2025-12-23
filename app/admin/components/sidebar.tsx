"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
    { label: "Dashboard", href: "/admin" },
    { label: "Leads", href: "/admin/leads" },
    { label: "Clients", href: "/admin/clients" },
    { label: "Equipment", href: "/admin/equipment" },
    { label: "Events", href: "/admin/events" },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 transition-all",
                collapsed ? "w-16" : "w-64",
            )}
        >
            <div className="h-16 flex items-center px-4 font-semibold">{!collapsed && "Admin"}</div>

            <nav className="flex-1 space-y-1 px-2">
                {nav.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <button
                onClick={() => setCollapsed(!collapsed)}
                className="h-12 border-t border-gray-200 dark:border-gray-800 text-xs"
            >
                {collapsed ? "→" : "←"}
            </button>
        </aside>
    );
}
