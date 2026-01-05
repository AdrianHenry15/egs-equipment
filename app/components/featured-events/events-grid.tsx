"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

export type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    href: string;
};

type EventsGridProps = {
    events: Event[];
    variant: "upcoming" | "past";
};

export default function EventsGrid({ events, variant }: EventsGridProps) {
    const isUpcoming = variant === "upcoming";

    return (
        <div
            className={
                isUpcoming
                    ? "grid grid-cols-1 gap-8 lg:grid-cols-2"
                    : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            }
        >
            {events.map((event) => (
                <article
                    key={event.id}
                    className={
                        isUpcoming
                            ? "group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-shadow hover:shadow-xl"
                            : "overflow-hidden rounded-lg border border-gray-200 bg-gray-100"
                    }
                >
                    {/* Image */}
                    <div className={isUpcoming ? "relative h-56 w-full overflow-hidden" : "h-40 w-full"}>
                        <Image
                            width={100}
                            height={100}
                            src={event.image}
                            alt={event.title}
                            fill={isUpcoming}
                            className={
                                isUpcoming
                                    ? "object-cover transition-transform duration-500 group-hover:scale-105"
                                    : "h-full w-full object-cover"
                            }
                        />
                    </div>

                    {/* Content */}
                    <div className={isUpcoming ? "p-6" : "p-4"}>
                        <h4 className={isUpcoming ? "text-xl font-semibold" : "font-semibold"}>{event.title}</h4>

                        <div
                            className={
                                isUpcoming
                                    ? "mt-2 flex flex-wrap gap-4 text-sm text-gray-500"
                                    : "mt-1 text-sm text-gray-500"
                            }
                        >
                            <span className="flex items-center gap-1">
                                <CalendarDaysIcon className="h-4 w-4" />
                                {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPinIcon className="h-4 w-4" />
                                {event.location}
                            </span>
                        </div>

                        <p className={isUpcoming ? "mt-4 text-gray-600" : "mt-2 text-sm text-gray-600"}>
                            {event.description}
                        </p>

                        <div className={isUpcoming ? "mt-6" : "mt-3"}>
                            <Link
                                href={event.href}
                                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700"
                            >
                                {isUpcoming ? "View Event →" : "View Recap →"}
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
