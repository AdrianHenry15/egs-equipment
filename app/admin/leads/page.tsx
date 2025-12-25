import { getAllLeadsQuery } from "@/sanity/queries/admin/leads";
import { sanityReadClient } from "@/sanity/lib/client";
import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import { Leads } from "@/sanity.types";
import Link from "next/link";

export default async function LeadsPage() {
    const leads: Leads[] = await sanityReadClient.fetch(getAllLeadsQuery);

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Leads</h1>
                    <p className="text-sm text-gray-500">Manage incoming inquiries and prospects</p>
                </div>

                <Link
                    href="/admin/leads/new"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create Lead
                </Link>
            </div>

            {/* Empty State */}
            {(!leads || leads.length === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No leads yet</p>
                    <p className="text-sm">
                        Leads will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {leads && leads.length > 0 && (
                <List>
                    {leads.map((lead) => (
                        <ListItem
                            key={lead._id}
                            title={`${lead.firstName} ${lead.lastName}`}
                            description={lead.email}
                            meta={`${lead.equipmentInterest?.length ?? 0} interests`}
                            href={`/admin/leads/${lead._id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
