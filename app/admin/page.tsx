"use client";

import { useRouter } from "next/navigation";
import Grid from "./components/grid/grid";
import GridItem from "./components/grid/grid-item";

export default function AdminPage() {
    const router = useRouter();
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Overview and quick access
                </p>
            </div>

            {/* Quick access grid */}
            <Grid>
                <GridItem
                    title="Leads"
                    subtitle="New & active leads"
                    meta="Manage incoming prospects"
                    onClick={() => {
                        router.push("/admin/leads");
                    }}
                />

                <GridItem
                    title="Clients"
                    subtitle="Active customers"
                    meta="Equipment & lifecycle"
                    onClick={() => {
                        router.push("/admin/clients");
                    }}
                />

                <GridItem
                    title="Equipment"
                    subtitle="Product catalog"
                    meta="Machines & inventory"
                    onClick={() => {
                        router.push("/admin/equipment");
                    }}
                />

                <GridItem
                    title="Events"
                    subtitle="Equipment history"
                    meta="Upgrades, repairs, retirements"
                    onClick={() => {
                        router.push("/admin/events");
                    }}
                />
            </Grid>
        </div>
    );
}
