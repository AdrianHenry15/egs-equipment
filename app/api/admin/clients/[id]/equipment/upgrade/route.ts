import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import {
    createClientEquipmentEvent,
    replaceClientEquipment,
} from "@/sanity/mutations/admin/client";
import { sanityReadClient } from "@/sanity/lib/client";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function POST(req: Request, { params }: RouteContext) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: clientId } = await params;
    const body = await req.json();

    const { lastEquipmentId, currentEquipmentId, reason, notes } = body;

    if (!lastEquipmentId || !currentEquipmentId) {
        return NextResponse.json({ error: "Missing required equipment IDs" }, { status: 400 });
    }

    try {
        // 1. Ensure client exists
        const clientExists = await sanityReadClient.fetch(
            `*[_type == "client" && _id == $id][0]{ _id }`,
            { id: clientId },
        );

        if (!clientExists) {
            return NextResponse.json({ error: "Client not found" }, { status: 404 });
        }

        // 2. Log equipment event
        await createClientEquipmentEvent({
            clientId,
            eventType: "upgrade",
            lastEquipment: lastEquipmentId,
            currentEquipment: currentEquipmentId,
            reason,
            notes,
        });

        // 3. Update client current equipment
        await replaceClientEquipment({
            clientId,
            lastEquipmentId,
            currentEquipmentId,
            reason,
            notes,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("POST /admin/clients/[id]/equipment/upgrade error:", error);
        return NextResponse.json({ error: "Failed to upgrade equipment" }, { status: 500 });
    }
}
