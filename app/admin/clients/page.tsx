import { sanityReadClient } from "@/sanity/lib/client";
import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import Link from "next/link";
import { Client } from "@/sanity/types";
import { getAllClientsQuery } from "@/sanity/queries/admin/client";

export default async function ClientsPage() {
    const clients: Client[] = await sanityReadClient.fetch(getAllClientsQuery);

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Clients</h1>
                    <p className="text-sm text-gray-500">Manage your client base</p>
                </div>

                <Link
                    href="/admin/clients/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create Client
                </Link>
            </div>

            {/* Empty State */}
            {(!clients || clients.length === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No clients yet</p>
                    <p className="text-sm">
                        Clients will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {clients && clients.length > 0 && (
                <List>
                    {clients.map((client) => (
                        <ListItem
                            key={client._id}
                            title={`${client.company}`}
                            description={client.email}
                            meta={`${client.equipmentInterest?.length ?? 0} interests`}
                            href={`/admin/clients/${client._id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
