import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Parts & Services | Eckert Equipment",
    description: "All of our parts and services on one page",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function PartsServicesPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            <ContactForm />
        </div>
    );
}
