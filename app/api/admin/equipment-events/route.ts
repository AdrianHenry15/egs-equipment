import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-server-admin";
import { getAllEquipmentEventsQuery } from "@/sanity/queries/admin/equipment-event";
import { createEquipmentEvent } from "@/sanity/mutations/admin/equipment-event";
import { validateEquipmentEvent } from "@/lib/validation/validate-equipment-event";
import { sanityReadClient } from "@/sanity/lib/client";

export async function GET(req: Request) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(req.url);

        const clientId = searchParams.get("clientId");
        const eventType = searchParams.get("eventType");
        const productId = searchParams.get("productId");

        let query = getAllEquipmentEventsQuery;
        let params: Record<string, any> = {};

        if (clientId) {
            query = `
        *[_type == "equipmentEvent" && client._ref == $clientId]
        | order(eventDate desc)
      `;
            params.clientId = clientId;
        }

        if (eventType) {
            query = `
        *[_type == "equipmentEvent" && eventType == $eventType]
        | order(eventDate desc)
      `;
            params.eventType = eventType;
        }

        if (productId) {
            query = `
        *[_type == "equipmentEvent" &&
          (
            lastEquipment._ref == $productId ||
            currentEquipment._ref == $productId
          )
        ]
        | order(eventDate desc)
      `;
            params.productId = productId;
        }

        const events = await sanityReadClient.fetch(query, params);

        return NextResponse.json(events);
    } catch (error) {
        console.error("GET /admin/equipment-events error:", error);
        return NextResponse.json({ error: "Failed to fetch equipment events" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();

        // VALIDATION
        validateEquipmentEvent({
            eventType: body.eventType,
            lastEquipmentId: body.lastEquipmentId,
            currentEquipmentId: body.currentEquipmentId,
        });

        // CREATE EQUIPMENT
        const event = await createEquipmentEvent({
            clientId: body.clientId,
            eventType: body.eventType,
            lastEquipmentId: body.lastEquipmentId,
            currentEquipmentId: body.currentEquipmentId,
            reason: body.reason,
            notes: body.notes,
            eventDate: body.eventDate,
        });

        return NextResponse.json(event, { status: 201 });
    } catch (error) {
        console.error("POST /admin/equipment-events error:", error);
        return NextResponse.json({ error: "Failed to create equipment event" }, { status: 500 });
    }
}
