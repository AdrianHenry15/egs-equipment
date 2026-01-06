import { sanityReadClient } from "@/sanity/lib/client";
import { getEventByIdQuery } from "@/sanity/queries/admin/events";
import EditEventForm from "./components/edit-events-form";

export default async function EditEventsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = await sanityReadClient.fetch(getEventByIdQuery, {
        id,
    });
    const initialValues = {
        name: event.name ?? "",
        slug: {
            current: event.slug?.current ?? "",
        },
        type: event.type ?? "trade_show",
        description: event.description ?? "",
        startDate: event.startDate ?? "",
        endDate: event.endDate ?? "",
        location: {
            venue: event.location?.venue ?? "",
            city: event.location?.city ?? "",
            state: event.location?.state ?? "",
            country: event.location?.country ?? "",
        },
        clients: event.clients?.map((c: any) => c._id) ?? [],
        productsFeatured: event.productsFeatured?.map((p: any) => p._id) ?? [],
        leadsGenerated: event.leadsGenerated?.map((l: any) => l._id) ?? [],
        coverImage: event.coverImage ?? null,
        gallery: event.gallery ?? [],
        status: event.status ?? "upcoming",
        notes: event.notes ?? "",
    };

    return <EditEventForm id={id} initialValues={initialValues} />;
}
