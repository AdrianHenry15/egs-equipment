import type { Metadata } from "next";
import FinanceOptions from "@/components/layout/finance-options";

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
        <main className="relative flex w-full items-center justify-center bg-background">
            <FinanceOptions />
        </main>
    );
}
