import type { Metadata } from "next";
import About from "@/components/layout/about";

export const metadata: Metadata = {
    title: "About EGS Equipment | Our Story & Mission",
    description:
        "Learn about EGS Equipment, our history, mission, and commitment to providing high-quality equipment solutions and customer support.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About EGS Equipment | Our Story & Mission",
        description:
            "Learn about EGS Equipment, our history, mission, and commitment to providing high-quality equipment solutions.",
        type: "website",
        url: "/about",
    },
    twitter: {
        card: "summary",
        title: "About EGS Equipment | Our Story & Mission",
        description:
            "Learn about EGS Equipment, our history, mission, and commitment to providing high-quality equipment solutions.",
    },
};

export default function AboutPage() {
    return (
        <main className="relative flex w-full items-center justify-center bg-background">
            <About />
        </main>
    );
}
