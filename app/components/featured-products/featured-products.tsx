"use client";

import { allProducts } from "@/lib/products/list/product-list";
import ProductCard from "@/app/products/components/product-card";
import { FeaturedProductSkeleton } from "./featured-products-skeleton";
import { ProductType } from "@/lib/types/product";
// Logos
import SynProLogo from "@/public/logos/synpro.webp";
import SisisLogo from "@/public/logos/sisis.webp";
import HarrodLogo from "@/public/logos/harrod-sport-logo.png";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.webp";
import DennisLogo from "@/public/logos/dennis.webp";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";
import Image from "next/image";

const BRAND_LOGO_MAP: Record<string, { src: any; alt: string }> = {
    "Syn-Pro": { src: SynProLogo, alt: "Syn-Pro logo" },
    SISIS: { src: SisisLogo, alt: "SISIS logo" },
    Pitchmark: { src: PitchmarkLogo, alt: "Pitchmark logo" },
    "Buffalo Turbine": { src: BuffaloTurbineLogo, alt: "Buffalo Turbine logo" },
    Dennis: { src: DennisLogo, alt: "Dennis logo" },
    Harrod: { src: HarrodLogo, alt: "Harrod logo" },
};

export default function FeaturedProducts() {
    const isLoading = allProducts.length === 0;

    const BRAND_DISPLAY_NAME: Record<string, string> = {
        syn_pro: "Syn-Pro",
        sisis: "SISIS",
        pitchmark: "Pitchmark",
        buffalo_turbine: "Buffalo Turbine",
        dennis: "Dennis",
        harrod: "Harrod",
    };

    function getPitchmarkCategory(product: ProductType) {
        if (product.tags?.includes("spray_machine")) return "spray_machine";
        if (product.tags?.includes("machine")) return "machine";
        if (product.tags?.includes("paint")) return "paint";
        if (product.tags?.includes("accessory")) return "accessory";
        return null;
    }

    const productsByBrand = allProducts.reduce<Record<string, typeof allProducts>>((acc, product) => {
        if (!product) return acc;

        const displayBrand = BRAND_DISPLAY_NAME[product.brand];

        // Safety check in case a new brand is added
        if (!displayBrand) return acc;

        if (!acc[displayBrand]) acc[displayBrand] = [];

        // Pitchmark
        if (displayBrand === "Pitchmark") {
            const pitchmarkCategory = getPitchmarkCategory(product);
            if (!pitchmarkCategory) return acc;

            const hasCategory = acc[displayBrand].some((p) => getPitchmarkCategory(p) === pitchmarkCategory);

            if (!hasCategory && acc[displayBrand].length < 4) {
                acc[displayBrand].push(product);
            }

            return acc;
        }

        // Enforce max of 4 products per brand
        if (acc[displayBrand].length < 4) {
            acc[displayBrand].push(product);
        }

        return acc;
    }, {});

    return (
        <section className="w-full bg-gray-50 py-16 px-6 text-black">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 text-center text-3xl font-bold">Featured Products</h2>

                {isLoading && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <FeaturedProductSkeleton key={`skeleton-${i}`} />
                        ))}
                    </div>
                )}

                {!isLoading &&
                    Object.entries(productsByBrand).map(([brand, products]) => (
                        <div key={brand} className="mb-24">
                            {/* Brand Heading */}
                            <div className="mb-6 flex items-center">
                                {BRAND_LOGO_MAP[brand] ? (
                                    <Image
                                        src={BRAND_LOGO_MAP[brand].src}
                                        alt={BRAND_LOGO_MAP[brand].alt}
                                        height={48}
                                        className="h-12 w-auto"
                                        priority
                                    />
                                ) : (
                                    <h3 className="text-2xl font-semibold text-black">{brand}</h3>
                                )}
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {products.map((product) =>
                                    product ? <ProductCard key={product.id} product={product} /> : null,
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
