import { connection } from "next/server";
import { getEventSections } from "@/lib/events/events-list";
import EventsGrid from "./events-grid";

export async function EventSections() {
    await connection();
    const { upcomingEvents, pastEvents } = getEventSections();

    return (
        <div className="space-y-12">
            <section aria-label="Upcoming events">
                <h2 className="mb-6 text-2xl font-semibold text-foreground">Upcoming Events</h2>

                {upcomingEvents.length > 0 ? (
                    <EventsGrid events={upcomingEvents} variant="upcoming" />
                ) : (
                    <div className="rounded-xl border border-dashed border-border bg-muted p-10 text-center">
                        <p className="text-lg font-medium text-foreground">No upcoming events scheduled</p>
                        <p className="mt-2 text-sm text-muted-foreground">Check back soon or follow us for updates.</p>
                    </div>
                )}
            </section>

            {pastEvents.length > 0 && (
                <section aria-label="Past events">
                    <h2 className="mb-6 text-2xl font-semibold text-foreground">Past Events</h2>
                    <EventsGrid events={pastEvents} variant="past" />
                </section>
            )}
        </div>
    );
}

export default function FeaturedEvents() {
    return (
        <section className="w-full bg-background px-6 py-20 text-foreground" aria-label="Events">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground">Events</h2>
                    <p className="mt-3 text-muted-foreground">Demos, trade shows, and industry events</p>
                </div>

                <EventSections />
            </div>
        </section>
    );
}
