import { sanityReadClient } from "@/sanity/lib/client";
import { getClientByIdQuery } from "@/sanity/queries/admin/client";
import EditClientForm from "../components/edit-client-form";

export default async function EditClientPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const client = await sanityReadClient.fetch(getClientByIdQuery, {
        id,
    });
    const initialValues = {
        name: client.name ?? "",
        email: client.email ?? "",
        phone: client.phone ?? "",
        company: client.company ?? "",
        website: client.website ?? "",
        status: client.status ?? "active",
        equipmentOwned: client.equipmentOwned?.map((r: any) => r._ref) ?? [],
        equipmentNeeds: client.equipmentNeeds ?? [],
        equipmentInterest: client.equipmentInterest?.map((r: any) => r._ref) ?? [],
        notes: client.notes ?? "",
        lead: client.lead?._ref ?? "",
    };

    return <EditClientForm id={id} initialValues={initialValues} />;
}
