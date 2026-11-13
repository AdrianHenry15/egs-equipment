import Image, { StaticImageData } from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import HeroImage from "@/public/splash/turf-equipment-hero.webp";

const displayFont = localFont({
    src: "../fonts/barlow-condensed-bold.woff2",
    weight: "700",
    display: "swap",
});

interface PageHeroProps {
    title: string;
    accent: string;
    description: string;
    action?: { href: string; label: string };
    img?: StaticImageData;
}

export function PageHero({ title, accent, description, action, img }: PageHeroProps) {
    return (
        <section className="relative isolate w-full overflow-hidden bg-brand-black text-white">
            <Image
                src={img ?? HeroImage}
                alt="A groundskeeper operating turf maintenance equipment on a sports field"
                fill
                preload
                sizes="100vw"
                className="-z-20 object-cover object-[68%_center] md:object-center"
            />
            <div className="absolute inset-0 -z-10 bg-brand-black/65 md:bg-transparent md:bg-linear-to-r md:from-brand-black md:via-brand-black/80 md:to-brand-black/15" />
            <div
                className={`mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-16 sm:px-10 lg:px-12 ${
                    action ? "min-h-124 lg:min-h-152" : "min-h-72 lg:min-h-96"
                }`}
            >
                <h1
                    className={`${displayFont.className} leading-[0.88] font-bold uppercase ${
                        action
                            ? "max-w-[15ch] text-[clamp(3.5rem,8.5vw,7rem)]"
                            : "max-w-[18ch] text-[clamp(3rem,7vw,5.5rem)]"
                    }`}
                >
                    {title} <span className="text-brand-gold">{accent}</span>
                </h1>
                <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-white/90 sm:text-lg">{description}</p>
                {action && (
                    <Link
                        href={action.href}
                        className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-brand-gold px-5 py-3 font-semibold text-brand-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
                    >
                        {action.label}
                        <ArrowRightIcon className="size-5" aria-hidden="true" />
                    </Link>
                )}
            </div>
        </section>
    );
}

export default function HomeSplash() {
    return (
        <PageHero
            title="Professional"
            accent="turf equipment"
            description="Mowers, turf maintenance machines, and line marking equipment for golf courses and sports fields."
            action={{ href: "/products", label: "Shop equipment" }}
        />
    );
}
