import type { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
    title: "Contact EGS Equipment | Sales, Support & Quotes",
    description:
        "Contact EGS Equipment for product questions, equipment quotes, sales support, parts assistance, and general inquiries.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact EGS Equipment | Sales, Support & Quotes",
        description:
            "Get in touch with EGS Equipment for product questions, equipment quotes, sales support, and general inquiries.",
        type: "website",
        url: "/contact",
    },
    twitter: {
        card: "summary",
        title: "Contact EGS Equipment | Sales, Support & Quotes",
        description:
            "Get in touch with EGS Equipment for product questions, equipment quotes, sales support, and general inquiries.",
    },
};

export default function ContactPage() {
    return (
        <section className="relative w-full bg-background px-6 py-20">
            <div className="mx-auto mb-12 max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact EGS Equipment</h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Have questions about our equipment, need a quote, or want expert guidance? Our team is here to help.
                </p>

                <div className="mt-6 text-sm text-muted-foreground">
                    Sales • Product Support • Estimates • General Inquiries
                </div>
            </div>

            <div className="flex justify-center">
                <ContactForm />
            </div>
        </section>
    );
}
