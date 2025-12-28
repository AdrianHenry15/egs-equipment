import { NextResponse } from "next/server";
import { sanityReadClient } from "@/sanity/lib/client";
import { sanityWriteClient } from "@/sanity/lib/client.server";
import { getEventByIdQuery } from "@/sanity/queries/admin/events";
import { deleteEvent, updateEvent } from "@/sanity/mutations/admin/events";

/* -------------------------------- */
/* GET /api/events/[id] */
/* -------------------------------- */
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const event = await sanityReadClient.fetch(getEventByIdQuery, { id });

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 });
    }
}

/* -------------------------------- */
/* PATCH /api/events/[id] */
/* -------------------------------- */
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await req.json();

        const updated = await updateEvent(sanityWriteClient, id, body);

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
    }
}

/* -------------------------------- */
/* DELETE /api/events/[id] */
/* -------------------------------- */
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        await deleteEvent(sanityWriteClient, id);

        return NextResponse.json({ success: true }, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
    }
}
