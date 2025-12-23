"use client";

import { ReactNode } from "react";
import Sidebar from "./sidebar";
import TopBar from "./top-bar";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6">{children}</main>
            </div>
        </div>
    );
}
