import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Eckert Equipment",
    description: "Learn about how we started",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AboutPage() {
    return <div className="flex flex-col justify-between relative w-full">About Page</div>;
}
