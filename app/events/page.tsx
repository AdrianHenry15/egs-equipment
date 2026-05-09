import type { Metadata } from "next";
import { UpcomingEvents } from "@/lib/events/events-list";
import EventsGrid from "../components/featured-events/events-grid";

export const metadata: Metadata = {
    title: "Events | EGS Equipment",
    description: "View upcoming EGS Equipment events, trade shows, demos, and company appearances.",
    alternates: {
        canonical: "/events",
    },
    openGraph: {
        title: "Events | EGS Equipment",
        description: "View upcoming EGS Equipment events, trade shows, demos, and company appearances.",
        type: "website",
        url: "/events",
    },
    twitter: {
        card: "summary",
        title: "Events | EGS Equipment",
        description: "View upcoming EGS Equipment events, trade shows, demos, and company appearances.",
    },
};

export default async function EventsPage() {
    // const events = await sanityReadClient.fetch(getEventsQuery);
    const events = UpcomingEvents.flat();

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-primary">Events</h1>

                <p className="mt-2 text-sm text-muted-foreground">Events, trade shows, and company appearances.</p>
            </header>

            {(!events || events.length === 0) && (
                <div className="rounded-xl border border-dashed border-border bg-card py-20 text-center">
                    <p className="text-lg font-medium text-foreground">No events available</p>

                    <p className="mt-1 text-sm text-muted-foreground">Upcoming events will appear here when added.</p>
                </div>
            )}

            {events && events.length > 0 && <EventsGrid events={events} variant="upcoming" />}
        </div>
    );
}
