import { sanityReadClient } from "@/sanity/lib/client";
import { getLeadByIdQuery } from "@/sanity/queries/admin/leads";
import EditLeadForm from "./components/edit-form";

export default async function EditLeadPage({ params }: { params: { id: string } }) {
    const lead = await sanityReadClient.fetch(getLeadByIdQuery, {
        id: params.id,
    });

    const initialValues = {
        firstName: lead.firstName ?? "",
        lastName: lead.lastName ?? "",
        email: lead.email ?? "",
        phone: lead.phone ?? "",
        company: lead.company ?? "",
        equipmentNeeds: lead.equipmentNeeds ?? [],
        equipmentInterest: lead.equipmentInterest?.map((r: any) => r._ref) ?? [],
        message: lead.message ?? "",
        source: lead.source ?? "",
        status: lead.status ?? "new",
        priority: lead.priority ?? "",
    };

    return <EditLeadForm id={params.id} initialValues={initialValues} />;
}
