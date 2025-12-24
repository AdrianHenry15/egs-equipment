import { NextResponse } from "next/server";
import { createLead } from "@/sanity/mutations/admin/leads";
import { getAllLeadsQuery } from "@/sanity/queries/admin/leads";
import { sanityReadClient } from "@/sanity/lib/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");

        const query = status
            ? `*[_type == "lead" && status == $status] | order(createdAt desc)`
            : getAllLeadsQuery;

        const leads = await sanityReadClient.fetch(query, status ? { status } : {});

        return NextResponse.json(leads);
    } catch (error) {
        console.error("GET /admin/leads error:", error);
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const lead = await createLead(body);

        return NextResponse.json(lead, { status: 201 });
    } catch (error) {
        console.error("POST /admin/leads error:", error);
        return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
    }
}
