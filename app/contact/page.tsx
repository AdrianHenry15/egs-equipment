import type { Metadata } from "next";
import { PageHero } from "@/app/components/home-splash";
import ContactForm from "@/components/forms/contact-form";
import { allProducts } from "@/lib/products/list/product-list";

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

export default async function ContactPage({
    searchParams,
}: {
    searchParams: Promise<{ product?: string | string[] }>;
}) {
    const { product: productId } = await searchParams;
    const quoteProduct = allProducts.find(({ id }) => id === productId)?.name;

    return (
        <main className="w-full bg-background text-foreground">
            <PageHero
                title="Contact"
                accent="EGS Equipment"
                description="Talk with our team about equipment quotes, product questions, and sales support."
            />
            <ContactForm key={quoteProduct ?? "contact"} quoteProduct={quoteProduct} />
        </main>
    );
}
