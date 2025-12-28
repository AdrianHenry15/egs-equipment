"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
    { label: "Dashboard", href: "/admin" },
    { label: "Leads", href: "/admin/leads" },
    { label: "Clients", href: "/admin/clients" },
    { label: "Users", href: "/admin/users" },
    { label: "Products", href: "/admin/products" },
    { label: "Equipment Events", href: "/admin/equipment-events" },
    { label: "Events", href: "/admin/events" },
];

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            {/* Mobile backdrop */}
            {open && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/50 md:hidden" />}

            <aside
                className={cn(
                    "fixed z-40 inset-y-0 top-20 left-0 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-transform md:static md:translate-x-0",
                    open ? "translate-x-0" : "-translate-x-full",
                    collapsed ? "md:w-16" : "md:w-64",
                    "w-64",
                )}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-4 font-semibold border-b border-gray-200 dark:border-gray-800">
                    {!collapsed && <span>Admin</span>}

                    {/* Mobile close button */}
                    <button
                        onClick={onClose}
                        className="md:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-900"
                        aria-label="Close sidebar"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex-1 space-y-1 px-2">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
}
