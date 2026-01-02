"use client";

import Link from "next/link";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    href: string;
    isPast?: boolean;
};

const upcomingEvents: Event[] = [];

const pastEvents: Event[] = [
    {
        id: "fall-demo-day-2025",
        title: "Fall Equipment Demo Day",
        date: "October 12, 2025",
        location: "Tampa, FL",
        description: "A hands-on showcase of EGS turf and marking equipment with grounds managers.",
        image: "/events/fall-demo.jpg",
        href: "/events/fall-demo-day-2025",
        isPast: true,
    },
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

                {/* -------------------- */}
                {/* UPCOMING EVENTS */}
                {/* -------------------- */}
                <div className="mb-20">
                    <h3 className="mb-6 text-2xl font-semibold">Upcoming Events</h3>

                    {!hasUpcoming && (
                        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                            <p className="text-lg font-medium text-gray-700">
                                No upcoming events scheduled
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                Check back soon or follow us for updates.
                            </p>
                        </div>
                    )}

                    {hasUpcoming && (
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {upcomingEvents.map((event) => (
                                <article
                                    key={event.id}
                                    className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-shadow hover:shadow-xl"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h4 className="text-xl font-semibold">{event.title}</h4>

                                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <CalendarDaysIcon className="h-4 w-4" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPinIcon className="h-4 w-4" />
                                                {event.location}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-gray-600">{event.description}</p>

                                        <div className="mt-6">
                                            <Link
                                                href={event.href}
                                                className="inline-flex items-center font-semibold text-green-600 hover:text-green-700"
                                            >
                                                View Event →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                {/* -------------------- */}
                {/* PAST EVENTS */}
                {/* -------------------- */}
                {hasPast && (
                    <div>
                        <h3 className="mb-6 text-2xl font-semibold">Past Events</h3>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {pastEvents.map((event) => (
                                <article
                                    key={event.id}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100"
                                >
                                    <div className="h-40 w-full">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h4 className="font-semibold">{event.title}</h4>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {event.date} · {event.location}
                                        </p>

                                        <p className="mt-2 text-sm text-gray-600">
                                            {event.description}
                                        </p>

                                        <div className="mt-3">
                                            <Link
                                                href={event.href}
                                                className="text-sm font-semibold text-green-600 hover:text-green-700"
                                            >
                                                View Recap →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
