import type { Metadata } from "next";
import { PageHero } from "@/app/components/home-splash";
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
        <main className="w-full bg-background text-foreground">
            <PageHero
                title="Equipment"
                accent="events"
                description="Explore EGS equipment demos, trade shows, and industry appearances."
            />
            <div className="mx-auto max-w-7xl px-6 py-12">
                <EventSections />
            </div>
        </main>
    );
}
