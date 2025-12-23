import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/client";
import { createLead } from "@/sanity/mutations/admin/leads";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAllLeadsQuery } from "@/sanity/queries/admin/leads";

export async function GET(req: Request) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");

        const query = status
            ? `*[_type == "lead" && status == $status] | order(createdAt desc)`
            : getAllLeadsQuery;

        const leads = await sanityClient.fetch(query, status ? { status } : {});

        return NextResponse.json(leads);
    } catch (error) {
        console.error("GET /admin/leads error:", error);
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const admin = await requireAdmin();
    if (!admin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const lead = await createLead(body);

        return NextResponse.json(lead, { status: 201 });
    } catch (error) {
        console.error("POST /admin/leads error:", error);
        return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
    }
}
