import { getAllLeadsQuery } from "@/sanity/queries/admin/leads";
import { sanityReadClient } from "@/sanity/lib/client";
import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import { EquipmentEvents, Leads } from "@/sanity.types";
import Link from "next/link";
import { getAllEquipmentEventsQuery } from "@/sanity/queries/admin/equipment-event";

export default async function EquipmentEventsPage() {
    const equipment_events: EquipmentEvents[] = await sanityReadClient.fetch(
        getAllEquipmentEventsQuery,
    );

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Equipment Events</h1>
                    <p className="text-sm text-gray-500">
                        Manage equipment bookings and event operations
                    </p>
                </div>

                <Link
                    href="/admin/equipment-events/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create Equipment Event
                </Link>
            </div>

            {/* Empty State */}
            {(!equipment_events || equipment_events.length === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No equipment events yet</p>
                    <p className="text-sm">
                        Equipment events will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {equipment_events && equipment_events.length > 0 && (
                <List>
                    {equipment_events.map((event) => (
                        <ListItem
                            key={event._id}
                            title={`${event.client || "Unknown Client"}`}
                            description={event.eventType}
                            meta={`${event.eventDate}`}
                            href={`/admin/equipment-events/${event._id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
