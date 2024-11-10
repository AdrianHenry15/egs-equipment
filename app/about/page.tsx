import About from "@/components/layout/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | EGS Equipment",
    description: "Learn about how we started",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AboutPage() {
    return (
        <div className="flex w-full relative bg-white justify-center items-center">
            <About />
        </div>
    );
}
