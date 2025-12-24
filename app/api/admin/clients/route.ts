import { NextResponse } from "next/server";
import { getAllClientsQuery } from "@/sanity/queries/admin/client";
import { createClient } from "@/sanity/mutations/admin/client";
import { sanityReadClient } from "@/sanity/lib/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");

        const query = status
            ? `*[_type == "client" && status == $status] | order(createdAt desc)`
            : getAllClientsQuery;

        const clients = await sanityReadClient.fetch(query, status ? { status } : {});

        return NextResponse.json(clients);
    } catch (error) {
        console.error("GET /admin/clients error:", error);
        return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const client = await createClient(body);

        return NextResponse.json(client, { status: 201 });
    } catch (error) {
        console.error("POST /admin/clients error:", error);
        return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
    }
}
