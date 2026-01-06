import { NextResponse } from "next/server";
import { getEquipmentEventByIdQuery } from "@/sanity/queries/admin/equipment-event";
import {
    deleteEquipmentEvent,
    updateEquipmentEvent,
} from "@/sanity/mutations/admin/equipment-event";
import { sanityReadClient } from "@/sanity/lib/client";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_: Request, { params }: RouteContext) {
    const { id } = await params;

    try {
        const event = await sanityReadClient.fetch(getEquipmentEventByIdQuery, { id });

        if (!event) {
            return NextResponse.json({ error: "Equipment event not found" }, { status: 404 });
        }

        return NextResponse.json(event);
    } catch (error) {
        console.error("GET /admin/equipment-events/[id] error:", error);
        return NextResponse.json({ error: "Failed to fetch equipment event" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: RouteContext) {
    const { id } = await params;
    const body = await req.json();

    try {
        await updateEquipmentEvent(id, {
            eventType: body.eventType,
            reason: body.reason,
            notes: body.notes,
            eventDate: body.eventDate,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("PATCH /admin/equipment-events/[id] error:", error);
        return NextResponse.json({ error: "Failed to update equipment event" }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: RouteContext) {
    const { id } = await params;

    try {
        await deleteEquipmentEvent(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("DELETE /admin/equipment-events/[id] error:", error);
        return NextResponse.json({ error: "Failed to delete equipment event" }, { status: 500 });
    }
}
