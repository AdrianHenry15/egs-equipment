import { NextResponse } from "next/server";
import { sanityReadClient } from "@/sanity/lib/client";
import { sanityWriteClient } from "@/sanity/lib/client.server";
import { getEventsQuery } from "@/sanity/queries/admin/events";
import { createEvent } from "@/sanity/mutations/admin/events";

/* -------------------------------- */
/* GET /api/events */
/* -------------------------------- */
export async function GET() {
    try {
        const events = await sanityReadClient.fetch(getEventsQuery);
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}

/* -------------------------------- */
/* POST /api/events */
/* -------------------------------- */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const event = await createEvent(sanityWriteClient, body);

        return NextResponse.json(event, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
    }
}
