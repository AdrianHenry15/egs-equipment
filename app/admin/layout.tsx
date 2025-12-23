import { requireAdmin } from "@/lib/auth/require-admin";
import { redirect } from "next/navigation";
import AdminLayout from "./components/admin-layout";

export default async function AdminRootLayout({ children }: { children: React.ReactNode }) {
    const admin = await requireAdmin();

    if (!admin) {
        redirect("/");
    }

    return <AdminLayout>{children}</AdminLayout>;
}
