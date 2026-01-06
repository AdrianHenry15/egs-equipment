import { sanityReadClient } from "@/sanity/lib/client";
import { getLeadByIdQuery } from "@/sanity/queries/admin/leads";
import Link from "next/link";
import ConvertLeadButton from "./components/convert-lead-button";

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const lead = await sanityReadClient.fetch(getLeadByIdQuery, { id });

    if (!lead) {
        return <div className="p-6 text-gray-500">Lead not found.</div>;
    }

    return (
        <div className="space-y-6 max-w-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">
                        {lead.firstName} {lead.lastName}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {lead.email} • {lead.status}
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link
                        href={`/admin/leads/${id}/edit`}
                        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                        Edit Lead
                    </Link>
                </div>
            </div>

            {/* Contact Info */}
            <section className="rounded-lg border p-4">
                <h2 className="font-bold mb-2">Contact Information</h2>

                <div className="grid gap-2 text-sm text-gray-400">
                    <p>
                        <strong>Email:</strong> {lead.email}
                    </p>
                    {lead.phone && (
                        <p>
                            <strong>Phone:</strong> {lead.phone}
                        </p>
                    )}
                    {lead.company && (
                        <p>
                            <strong>Company:</strong> {lead.company}
                        </p>
                    )}
                </div>
            </section>

            {/* Lead Meta */}
            <section className="rounded-lg border p-4">
                <h2 className="font-bold mb-2">Lead Details</h2>

                <div className="grid gap-2 text-sm text-gray-400">
                    <p>
                        <strong>Status:</strong> {lead.status}
                    </p>
                    {lead.priority && (
                        <p>
                            <strong>Priority:</strong> {lead.priority}
                        </p>
                    )}
                    {lead.source && (
                        <p>
                            <strong>Source:</strong> {lead.source}
                        </p>
                    )}
                </div>
            </section>

            {/* Equipment Needs */}
            {lead.equipmentNeeds?.length > 0 && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-bold mb-2">Equipment Needs</h2>

                    <ul className="list-disc pl-5 text-sm text-gray-400">
                        {lead.equipmentNeeds.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Message */}
            {lead.message && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-bold mb-2">Message</h2>
                    <p className="text-sm text-gray-400 whitespace-pre-wrap">{lead.message}</p>
                </section>
            )}

            {/* Actions */}
            <section className="flex gap-3">
                <ConvertLeadButton leadId={id} />

                <Link
                    href={`/admin/leads/${id}/edit`}
                    className="rounded-md border px-4 py-2 text-sm hover:bg-gray-500"
                >
                    Edit Lead
                </Link>
            </section>
        </div>
    );
}
