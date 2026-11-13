import type { Metadata } from "next";
import Link from "next/link";

import { MAIN_CATEGORIES } from "@/lib/domain/categories";

export const metadata: Metadata = {
    title: "Sitemap",
    description: "Find EGS Equipment catalog categories, customer resources, and company pages.",
    alternates: { canonical: "/site-map" },
};

const groups = [
    {
        title: "Equipment",
        links: [
            { href: "/products", label: "All equipment" },
            ...MAIN_CATEGORIES.map(({ value, label }) => ({ href: `/products?category=${value}`, label })),
        ],
    },
    {
        title: "Parts and financing",
        links: [
            { href: "/parts-form", label: "Request parts" },
            { href: "/finance-options", label: "Financing options" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About EGS" },
            { href: "/events", label: "Events" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/accessibility", label: "Accessibility" },
        ],
    },
];

export default function SitemapPage() {
    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-14 text-foreground sm:py-20">
            <h1 className="mb-8 text-4xl font-bold tracking-tight">Sitemap</h1>
            <div className="grid gap-5 md:grid-cols-3">
                {groups.map(({ title, links }) => (
                    <section key={title} className="rounded-xl border border-border bg-card p-6 text-card-foreground">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <ul className="mt-4 space-y-3">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href} className="text-primary underline underline-offset-4">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
