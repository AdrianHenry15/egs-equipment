import ContactForm from "@/components/forms/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | EGS Equipment",
    description: "Get in touch with EGS Equipment for sales, support, and product inquiries.",
};

export default function ContactPage() {
    return (
        <section className="relative w-full bg-white py-20 px-6">
            <div className="mx-auto max-w-3xl text-left mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Contact EGS Equipment</h1>

                <p className="mt-4 text-lg text-gray-600">
                    Have questions about our equipment, need a quote, or want expert guidance? Our team is here to help.
                </p>

                <div className="mt-6 text-sm text-gray-500">
                    Sales • Product Support • Estimates • General Inquiries
                </div>
            </div>

            <div className="flex justify-center">
                <ContactForm />
            </div>
        </section>
    );
}
