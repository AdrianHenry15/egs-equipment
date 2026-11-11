import type { Metadata } from "next";
import { EventSections } from "../components/featured-events/featured-events";

export const metadata: Metadata = {
    title: "Events | EGS Equipment",
    description: "View upcoming and past EGS Equipment events, trade shows, demos, and company appearances.",
    alternates: {
        canonical: "/events",
    },
    openGraph: {
        title: "Events | EGS Equipment",
        description: "View upcoming and past EGS Equipment events, trade shows, demos, and company appearances.",
        type: "website",
        url: "/events",
    },
    twitter: {
        card: "summary",
        title: "Events | EGS Equipment",
        description: "View upcoming and past EGS Equipment events, trade shows, demos, and company appearances.",
    },
};

export default function EventsPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-primary">Events</h1>
                <p className="mt-2 text-sm text-muted-foreground">Events, trade shows, and company appearances.</p>
            </header>

            <EventSections />
        </main>
    );
}
