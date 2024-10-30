import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | EGS Equipment",
    description: "For everything you need for freshness",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function ContactPage() {
    return <div className="flex flex-col justify-between relative w-full">Contact Page</div>;
}
