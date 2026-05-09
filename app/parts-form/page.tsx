import type { Metadata } from "next";
import PartsForm from "@/components/forms/parts-form";

export const metadata: Metadata = {
    title: "Parts & Service Support | EGS Equipment",
    description:
        "Request genuine replacement parts, maintenance, repairs, and technical service support from EGS Equipment.",
    alternates: {
        canonical: "/parts-services",
    },
    openGraph: {
        title: "Parts & Service Support | EGS Equipment",
        description:
            "Request genuine replacement parts, maintenance, repairs, and technical service support from EGS Equipment.",
        type: "website",
        url: "/parts-services",
    },
    twitter: {
        card: "summary",
        title: "Parts & Service Support | EGS Equipment",
        description:
            "Request genuine replacement parts, maintenance, repairs, and technical service support from EGS Equipment.",
    },
};

export default function PartsServicesPage() {
    return (
        <section className="relative w-full bg-muted px-6 py-20">
            <div className="mx-auto mb-12 max-w-4xl text-left">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Parts & Service Support
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Keep your equipment running at peak performance with genuine parts, professional service, and
                    knowledgeable support from the EGS team.
                </p>

                <div className="mt-6 text-sm text-muted-foreground">
                    Replacement Parts • Maintenance • Repairs • Technical Assistance
                </div>
            </div>

            <div className="flex justify-center">
                <PartsForm />
            </div>
        </section>
    );
}
