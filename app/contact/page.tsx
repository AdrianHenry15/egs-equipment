import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | EGS Equipment",
    description: "For everything you need for freshness",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col justify-center items-center relative w-full">
            <ContactForm />
        </div>
    );
}
