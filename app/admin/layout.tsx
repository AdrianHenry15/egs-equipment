"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import TopBar from "./components/top-bar";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6">{children}</main>
            </div>
        </div>
    );
}
