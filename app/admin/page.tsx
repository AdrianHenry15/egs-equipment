"use client";

import { useRouter } from "next/navigation";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/grid-item";

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
                {/* Leads */}
                <GridItem
                    title="Leads"
                    subtitle="New & active leads"
                    meta="Manage incoming prospects"
                    onClick={() => {
                        router.push("/admin/leads");
                    }}
                />
                {/* Clients */}
                <GridItem
                    title="Clients"
                    subtitle="Active customers"
                    meta="Equipment & lifecycle"
                    onClick={() => {
                        router.push("/admin/clients");
                    }}
                />
                {/* Users */}
                <GridItem
                    title="Users"
                    subtitle="Platform Account"
                    meta="Admins, Staff, Registered Users"
                    onClick={() => {
                        router.push("/admin/users");
                    }}
                />

                {/* Products */}
                <GridItem
                    title="Products"
                    subtitle="Product catalog"
                    meta="Machines & inventory"
                    onClick={() => {
                        router.push("/admin/products");
                    }}
                />

                {/* Equipment Events */}
                <GridItem
                    title="Equipment Events"
                    subtitle="Equipment history"
                    meta="Upgrades, repairs, retirements"
                    onClick={() => {
                        router.push("/admin/equipment-events");
                    }}
                />
                {/* Events */}
                <GridItem
                    title="Events"
                    subtitle="Company Calendar"
                    meta="Meetings, site visits, trade shows"
                    onClick={() => {
                        router.push("/admin/events");
                    }}
                />
            </Grid>
        </div>
    );
}
