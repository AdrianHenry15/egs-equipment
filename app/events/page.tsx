import { sanityReadClient } from "@/sanity/lib/client";
import { getEventsQuery } from "@/sanity/queries/admin/events";
import Link from "next/link";

export default async function EventsPage() {
    const events = await sanityReadClient.fetch(getEventsQuery);

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                    Events
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Events, trade shows, and company appearances.
                </p>
            </header>

            {/* Empty State */}
            {(!events || events.length === 0) && (
                <div className="rounded-xl border border-dashed border-emerald-200 dark:border-emerald-900 bg-white dark:bg-gray-950 py-20 text-center">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        No events available
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        Upcoming events will appear here when added.
                    </p>
                </div>
            )}

            {/* Grid */}
            {events && events.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event: any, index: number) => {
                        const location = [
                            event.location?.city,
                            event.location?.state,
                            event.location?.country,
                        ]
                            .filter(Boolean)
                            .join(", ");

                        return (
                            <Link
                                key={`${event._id}-${index}`}
                                href={`/events/${event.slug?.current ?? event._id}`}
                                className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm transition hover:shadow-md"
                            >
                                {/* Accent bar */}
                                <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-linear-to-r from-emerald-500 to-yellow-400" />

                                <div className="flex h-full flex-col justify-between gap-4">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            {event.name}
                                        </h2>

                                        <p className="mt-1 text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                                            {event.type.replace("_", " ")}
                                        </p>

                                        {location && (
                                            <p className="mt-2 text-sm text-gray-500">{location}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <span>
                                            {new Date(event.startDate).toLocaleDateString()}
                                        </span>

                                        <span
                                            className={
                                                event.status === "completed"
                                                    ? "text-gray-500"
                                                    : event.status === "cancelled"
                                                      ? "text-red-500"
                                                      : "text-emerald-600"
                                            }
                                        >
                                            {event.status}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
