import { sanityReadClient } from "@/sanity/lib/client";
import { getClientByIdQuery } from "@/sanity/queries/admin/client";
import Link from "next/link";

export default async function ClientPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const client = await sanityReadClient.fetch(getClientByIdQuery, {
        id,
    });

    if (!client) {
        return <div className="p-6 text-gray-500">Client not found.</div>;
    }

    return (
        <div className="space-y-6 max-w-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">{client.name}</h1>
                    <p className="text-sm text-gray-500">
                        {client.email} • {client.status}
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link
                        href={`/admin/clients/${id}/edit`}
                        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                        Edit Client
                    </Link>
                </div>
            </div>

            {/* Contact Information */}
            <section className="rounded-lg border p-4">
                <h2 className="font-medium mb-2">Contact Information</h2>

                <div className="grid gap-2 text-sm text-gray-700">
                    <p>
                        <strong>Email:</strong> {client.email}
                    </p>
                    {client.phone && (
                        <p>
                            <strong>Phone:</strong> {client.phone}
                        </p>
                    )}
                    {client.company && (
                        <p>
                            <strong>Company:</strong> {client.company}
                        </p>
                    )}
                    {client.website && (
                        <p>
                            <strong>Website:</strong>{" "}
                            <a
                                href={client.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                {client.website}
                            </a>
                        </p>
                    )}
                </div>
            </section>

            {/* Client Status */}
            <section className="rounded-lg border p-4">
                <h2 className="font-medium mb-2">Client Details</h2>

                <div className="grid gap-2 text-sm text-gray-700">
                    <p>
                        <strong>Status:</strong> {client.status}
                    </p>
                </div>
            </section>

            {/* Equipment Owned */}
            {client.equipmentOwned?.length > 0 && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-medium mb-2">Equipment Owned</h2>

                    <ul className="list-disc pl-5 text-sm text-gray-700">
                        {client.equipmentOwned.map((eq: any) => (
                            <li key={eq._ref}>{eq._ref}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Equipment Needs */}
            {client.equipmentNeeds?.length > 0 && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-medium mb-2">Equipment Needs</h2>

                    <ul className="list-disc pl-5 text-sm text-gray-700">
                        {client.equipmentNeeds.map((item: string, index: number) => (
                            <li key={`${item ?? "unknown"}-${index}`}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Notes */}
            {client.notes && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-medium mb-2">Internal Notes</h2>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{client.notes}</p>
                </section>
            )}

            {/* Related Lead */}
            {client.lead && (
                <section className="rounded-lg border p-4">
                    <h2 className="font-medium mb-2">Original Lead</h2>

                    <Link href={`/admin/leads/${client.lead._ref}`} className="text-sm underline">
                        View Lead
                    </Link>
                </section>
            )}
        </div>
    );
}
