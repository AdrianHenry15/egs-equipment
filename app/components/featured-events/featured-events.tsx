"use client";

import EventsGrid, { Event } from "./events-grid";

const upcomingEvents: Event[] = [];

const pastEvents: Event[] = [
    // {
    //     id: "fall-demo-day-2025",
    //     title: "Fall Equipment Demo Day",
    //     date: "October 12, 2025",
    //     location: "Tampa, FL",
    //     description: "A hands-on showcase of EGS turf and marking equipment with grounds managers.",
    //     image: "/events/fall-demo.jpg",
    //     href: "/events/fall-demo-day-2025",
    // },
];

export default function FeaturedEvents() {
    const hasUpcoming = upcomingEvents.length > 0;
    const hasPast = pastEvents.length > 0;

    return (
        <section className="w-full bg-white py-20 px-6 text-black">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold">Events</h2>
                    <p className="mt-3 text-gray-600">Demos, trade shows, and industry events</p>
                </div>

                {/* Upcoming Events */}
                <div className="mb-20">
                    <h3 className="mb-6 text-2xl font-semibold">Upcoming Events</h3>

                    {!hasUpcoming && (
                        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                            <p className="text-lg font-medium text-gray-700">No upcoming events scheduled</p>
                            <p className="mt-2 text-sm text-gray-500">Check back soon or follow us for updates.</p>
                        </div>
                    )}

                    {hasUpcoming && <EventsGrid events={upcomingEvents} variant="upcoming" />}
                </div>

                {/* Past Events */}
                {hasPast && (
                    <div>
                        <h3 className="mb-6 text-2xl font-semibold">Past Events</h3>
                        <EventsGrid events={pastEvents} variant="past" />
                    </div>
                )}
            </div>
        </section>
    );
}
