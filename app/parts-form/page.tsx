import type { Metadata } from "next";
import { PageHero } from "@/app/components/home-splash";
import PartsForm from "@/components/forms/parts-form";

export const metadata: Metadata = {
    title: "Parts & Service Support | EGS Equipment",
    description:
        "Request genuine replacement parts, maintenance, repairs, and technical service support from EGS Equipment.",
    alternates: {
        canonical: "/parts-form",
    },
    openGraph: {
        title: "Parts & Service Support | EGS Equipment",
        description:
            "Request genuine replacement parts, maintenance, repairs, and technical service support from EGS Equipment.",
        type: "website",
        url: "/parts-form",
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
        <main className="w-full bg-background text-foreground">
            <PageHero
                title="Parts &"
                accent="service support"
                description="Request replacement parts or get help with equipment maintenance and repairs."
            />
            <PartsForm />
        </main>
    );
}
