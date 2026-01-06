import { UpcomingEvents } from "@/lib/events/events-list";
import Link from "next/link";
import EventsGrid from "../components/featured-events/events-grid";

export default async function EventsPage() {
    // const events = await sanityReadClient.fetch(getEventsQuery);
    const events = UpcomingEvents.flat();

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">Events</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Events, trade shows, and company appearances.
                </p>
            </header>

            {/* Empty State */}
            {(!events || events.length === 0) && (
                <div className="rounded-xl border border-dashed border-emerald-200 dark:border-emerald-900 bg-white dark:bg-gray-950 py-20 text-center">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">No events available</p>
                    <p className="mt-1 text-sm text-gray-500">Upcoming events will appear here when added.</p>
                </div>
            )}

            {/* Grid */}
            {events && events.length > 0 && <EventsGrid events={events} variant="upcoming" />}
        </div>
    );
}
