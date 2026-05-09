"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

import { formatEventDateRange } from "@/lib/utils";

export type EventDemo = {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    image: string;
    href: string;
};

type EventsGridProps = {
    events: EventDemo[];
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
                            ? "group overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-2xl"
                            : "overflow-hidden rounded-lg border border-border bg-muted"
                    }
                >
                    {/* Image */}
                    <div
                        className={
                            isUpcoming ? "relative h-56 w-full overflow-hidden" : "relative h-40 w-full overflow-hidden"
                        }
                    >
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes={isUpcoming ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                            className={
                                isUpcoming
                                    ? "object-cover transition-transform duration-500 group-hover:scale-105"
                                    : "object-cover"
                            }
                        />
                    </div>

                    {/* Content */}
                    <div className={isUpcoming ? "p-6" : "p-4"}>
                        <h4 className={`${isUpcoming ? "text-xl font-semibold" : "font-semibold"} text-foreground`}>
                            {event.title}
                        </h4>

                        <div
                            className={
                                isUpcoming
                                    ? "mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground"
                                    : "mt-1 text-sm text-muted-foreground"
                            }
                        >
                            <span className="flex items-center gap-1">
                                <CalendarDaysIcon className="h-4 w-4" />

                                {formatEventDateRange(event.startDate, event.endDate)}
                            </span>

                            <span className="flex items-center gap-1">
                                <MapPinIcon className="h-4 w-4" />
                                {event.location}
                            </span>
                        </div>

                        <p className={isUpcoming ? "mt-4 text-muted-foreground" : "mt-2 text-sm text-muted-foreground"}>
                            {event.description}
                        </p>

                        <div className={isUpcoming ? "mt-6" : "mt-3"}>
                            <Link
                                href={event.href}
                                className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80"
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
