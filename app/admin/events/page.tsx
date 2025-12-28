import { sanityReadClient } from "@/sanity/lib/client";
import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import Link from "next/link";
import { getEventsQuery } from "@/sanity/queries/admin/events";
import { Event } from "@/sanity/types";

export default async function EventsPage() {
    const events: Event[] = await sanityReadClient.fetch(getEventsQuery);

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Events</h1>
                    <p className="text-sm text-gray-500">Manage events</p>
                </div>

                <Link
                    href="/admin/events/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create Event
                </Link>
            </div>

            {/* Empty State */}
            {(!events || events.length === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No events yet</p>
                    <p className="text-sm">
                        Events will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {events && events.length > 0 && (
                <List>
                    {events.map((event) => (
                        <ListItem
                            key={event._id}
                            title={`${event.name || "Unknown Event"}`}
                            description={event.description}
                            meta={`${event.startDate}`}
                            href={`/admin/events/${event._id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
