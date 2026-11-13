import Image, { StaticImageData } from "next/image";

import ProductCard from "@/app/products/components/product-card";
import Link from "next/link";

import { allProducts } from "@/lib/products/list/product-list";
import { ProductType } from "@/lib/types/product";

import SynProLogo from "@/public/logos/synpro.webp";
import SisisLogo from "@/public/logos/sisis.webp";
import HarrodLogo from "@/public/logos/harrod-sport-logo.png";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.webp";
import DennisLogo from "@/public/logos/dennis.webp";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";

const BRAND_LOGO_MAP: Record<string, { src: StaticImageData; alt: string }> = {
    "Syn-Pro": { src: SynProLogo, alt: "Syn-Pro logo" },
    SISIS: { src: SisisLogo, alt: "SISIS logo" },
    Pitchmark: { src: PitchmarkLogo, alt: "Pitchmark logo" },
    "Buffalo Turbine": { src: BuffaloTurbineLogo, alt: "Buffalo Turbine logo" },
    Dennis: { src: DennisLogo, alt: "Dennis logo" },
    "Harrod Sport": { src: HarrodLogo, alt: "Harrod Sport logo" },
};

const BRAND_DISPLAY_NAME: Record<string, string> = {
    syn_pro: "Syn-Pro",
    sisis: "SISIS",
    pitchmark: "Pitchmark",
    buffalo_turbine: "Buffalo Turbine",
    dennis: "Dennis",
    harrod_sport: "Harrod Sport",
};

function getPitchmarkCategory(product: ProductType) {
    if (product.tags?.includes("spray_machine")) return "spray_machine";
    if (product.tags?.includes("machine")) return "machine";
    if (product.tags?.includes("paint")) return "paint";
    if (product.tags?.includes("accessory")) return "accessory";

    return null;
}

export default function FeaturedProducts() {
    const productsByBrand = allProducts.reduce<Record<string, typeof allProducts>>((acc, product) => {
        if (!product) return acc;

        const displayBrand = BRAND_DISPLAY_NAME[product.brand];

        if (!displayBrand) return acc;

        if (!acc[displayBrand]) acc[displayBrand] = [];

        if (displayBrand === "Pitchmark") {
            const pitchmarkCategory = getPitchmarkCategory(product);

            if (!pitchmarkCategory) return acc;

            const hasCategory = acc[displayBrand].some((item) => getPitchmarkCategory(item) === pitchmarkCategory);

            if (!hasCategory && acc[displayBrand].length < 4) {
                acc[displayBrand].push(product);
            }

            return acc;
        }

        if (acc[displayBrand].length < 4) {
            acc[displayBrand].push(product);
        }

        return acc;
    }, {});

    return (
        <section className="w-full bg-muted px-6 py-16 text-foreground">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="text-3xl font-semibold tracking-tight">Featured equipment</h2>
                    <Link href="/products" className="text-sm font-semibold text-primary underline underline-offset-4">
                        View all equipment
                    </Link>
                </div>

                {Object.entries(productsByBrand).map(([brand, products]) => (
                    <div key={brand} className="mb-12 last:mb-0">
                        <div className="mb-6 flex items-center">
                            {BRAND_LOGO_MAP[brand] ? (
                                <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                                    <Image
                                        src={BRAND_LOGO_MAP[brand].src}
                                        alt={BRAND_LOGO_MAP[brand].alt}
                                        height={48}
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                            ) : (
                                <h3 className="text-2xl font-semibold text-foreground">{brand}</h3>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) =>
                                product ? (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        imageSizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 310px"
                                    />
                                ) : null,
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
