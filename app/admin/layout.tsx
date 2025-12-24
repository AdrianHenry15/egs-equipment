import Sidebar from "./components/sidebar";
import TopBar from "./components/top-bar";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
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
