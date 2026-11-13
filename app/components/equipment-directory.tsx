import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MagnifyingGlassIcon, PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

import Mower from "@/public/products/natural/es-860-dennis.webp";
import LineMarker from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB.webp";
import TurfBrush from "@/public/products/synthetic/brush-pro-synthetic.webp";

const quickLinks = [
    { href: "/products", label: "Browse catalog", icon: MagnifyingGlassIcon },
    { href: "/parts-form", label: "Request parts", icon: WrenchScrewdriverIcon },
    { href: "tel:+14076297968", label: "Call sales", icon: PhoneIcon },
];

const categories = [
    {
        href: "/products?category=natural_turf",
        title: "Natural turf",
        description: "Mowers, aerators, and scarifiers.",
        image: Mower,
    },
    {
        href: "/products?category=line_marker",
        title: "Line marking",
        description: "Marking machines, paint, and accessories.",
        image: LineMarker,
    },
    {
        href: "/products?category=synthetic_turf",
        title: "Synthetic turf",
        description: "Brushes, sweepers, and deep cleaners.",
        image: TurfBrush,
    },
];

export default function EquipmentDirectory() {
    return (
        <>
            <nav aria-label="Equipment and sales" className="bg-brand-gold text-brand-black">
                <ul className="mx-auto grid max-w-7xl divide-y divide-brand-black/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {quickLinks.map(({ href, label, icon: Icon }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="flex min-h-14 items-center justify-between gap-3 px-6 py-3 font-semibold transition-colors hover:bg-brand-black/10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-black sm:justify-center"
                            >
                                <span className="flex items-center gap-3">
                                    <Icon className="size-5" aria-hidden="true" />
                                    {label}
                                </span>
                                <ArrowRightIcon className="size-4 sm:hidden" aria-hidden="true" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <section
                aria-labelledby="equipment-directory-heading"
                className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-16 lg:px-12"
            >
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                    <h2 id="equipment-directory-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Shop by category
                    </h2>
                    <Link href="/products" className="font-semibold text-primary underline underline-offset-4">
                        View all equipment
                    </Link>
                </div>
                <ul className="grid gap-4 sm:grid-cols-3">
                    {categories.map(({ href, title, description, image }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-colors hover:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                                <div className="relative aspect-[16/9] bg-white">
                                    <Image
                                        src={image}
                                        alt=""
                                        fill
                                        sizes="(max-width: 639px) 100vw, (max-width: 1279px) 33vw, 400px"
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="flex flex-1 items-center justify-between gap-3 border-t border-border p-4 sm:p-5">
                                    <div>
                                        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                                    </div>
                                    <ArrowRightIcon
                                        className="size-5 shrink-0 text-primary transition-transform motion-safe:group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
