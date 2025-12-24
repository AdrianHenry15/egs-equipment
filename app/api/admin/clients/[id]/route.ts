import { NextResponse } from "next/server";
import { getClientByIdQuery } from "@/sanity/queries/admin/client";
import {
    deleteClient,
    updateClient,
    updateClientEquipment,
    updateClientStatus,
} from "@/sanity/mutations/admin/client";
import { sanityReadClient } from "@/sanity/lib/client";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_: Request, { params }: RouteContext) {
    const { id } = await params;

    try {
        const client = await sanityReadClient.fetch(getClientByIdQuery, { id });

        if (!client) {
            return NextResponse.json({ error: "Client not found" }, { status: 404 });
        }

        return NextResponse.json(client);
    } catch (error) {
        console.error("GET /admin/clients/[id] error:", error);
        return NextResponse.json({ error: "Failed to fetch client" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: RouteContext) {
    const { id } = await params;
    const body = await req.json();

    try {
        if (body.status) {
            await updateClientStatus(id, body.status);
        }

        if (body.equipmentOwned || body.equipmentNeeds) {
            await updateClientEquipment(id, {
                equipmentOwned: body.equipmentOwned,
                equipmentNeeds: body.equipmentNeeds,
            });
        }

        if (body.name || body.email || body.phone || body.company) {
            await updateClient(id, body);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("PATCH /admin/clients/[id] error:", error);
        return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: RouteContext) {
    const { id } = await params;

    try {
        await deleteClient(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("DELETE /admin/clients/[id] error:", error);
        return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
    }
}
