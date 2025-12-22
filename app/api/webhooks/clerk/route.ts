import { headers } from "next/headers";
import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { ensureSanityUserFromWebhook } from "@/sanity/queries/user";
import { deleteSanityUserFromWebhook, updateSanityUserFromWebhook } from "@/sanity/mutations/user";

export async function POST(req: Request) {
    const payload = await req.text();
    const headerPayload = await headers();

    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new NextResponse("Missing Svix headers", { status: 400 });
    }

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

    let evt: any;
    try {
        evt = wh.verify(payload, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        return new NextResponse("Invalid signature", { status: 400 });
    }

    const { type, data } = evt;

    switch (type) {
        case "user.created":
            await ensureSanityUserFromWebhook(data);
            break;

        case "user.updated":
            await updateSanityUserFromWebhook(data);
            break;

        case "user.deleted":
            await deleteSanityUserFromWebhook(data.id);
            break;
    }

    return NextResponse.json({ success: true });
}
