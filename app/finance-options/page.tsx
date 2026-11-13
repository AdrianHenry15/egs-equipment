import type { Metadata } from "next";
import { PageHero } from "@/app/components/home-splash";
import FinanceOptions from "@/components/layout/finance-options";
import CanonFinanceImage from "@/public/logos/canon-logo.png";

export const metadata: Metadata = {
    title: "Financing Options | EGS Equipment",
    description:
        "Explore equipment financing options from EGS Equipment, including flexible payment solutions for commercial turf, grounds, and maintenance equipment.",
    alternates: {
        canonical: "/finance-options",
    },
    openGraph: {
        title: "Financing Options | EGS Equipment",
        description:
            "Explore flexible equipment financing options for commercial turf, grounds, and maintenance equipment.",
        type: "website",
        url: "/finance-options",
    },
    twitter: {
        card: "summary",
        title: "Financing Options | EGS Equipment",
        description:
            "Explore flexible equipment financing options for commercial turf, grounds, and maintenance equipment.",
    },
};

export default function FinanceOptionsPage() {
    return (
        <main className="w-full bg-background text-foreground">
            <PageHero
                title="Equipment"
                accent="financing"
                description="Explore commercial equipment financing and leasing through Canon Financial Services."
                img={CanonFinanceImage}
            />
            <FinanceOptions />
        </main>
    );
}
