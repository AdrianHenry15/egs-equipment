"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProductBrandImage } from "@/lib/products/helpers/get-product-brand-image";
import { ProductType } from "@/lib/types/product";

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    const MAX_NAME_LENGTH = 15;
    const MAX_DESCRIPTION_LENGTH = 50;

    const truncatedName =
        product.name.length > MAX_NAME_LENGTH ? `${product.name.slice(0, MAX_NAME_LENGTH)}…` : product.name;

    const truncatedDescription =
        product.description.length > MAX_DESCRIPTION_LENGTH
            ? `${product.description.slice(0, MAX_DESCRIPTION_LENGTH)}…`
            : product.description;

    /**
     * Safely resolve primary product image
     */
    const primaryImage = product.images?.[0];

    return (
        <motion.div
            className="
                flex flex-col h-full
                rounded-lg border border-gray-200
                bg-white shadow
                transition-shadow hover:shadow-lg
                overflow-hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Main content */}
            <Link href={`/products/${product.id}`} className="flex flex-col grow">
                {primaryImage && (
                    <Image
                        width={1000}
                        height={1000}
                        src={primaryImage}
                        alt={product.name}
                        className="h-48 w-full object-cover"
                        priority={false}
                    />
                )}

                <div className="flex flex-col grow p-4">
                    <h3 className="mb-2 text-lg font-semibold text-black">{truncatedName}</h3>

                    <p className="mb-4 text-sm text-gray-600">{truncatedDescription}</p>

                    <div className="mt-auto">
                        <Image
                            width={product.brand === "dennis" || product.brand === "eastman" ? 100 : 60}
                            height={32}
                            className={product.brand === "dennis" ? "h-8" : "h-6"}
                            alt={product.brand}
                            src={getProductBrandImage(product.brand)}
                        />
                    </div>
                </div>
            </Link>

            {/* CTA pinned to bottom */}
            <Link
                href="/contact"
                className="
                    flex items-center justify-center
                    bg-green-700 py-2
                    text-sm font-medium text-white
                    transition hover:bg-green-800
                "
            >
                Request a Quote
            </Link>
        </motion.div>
    );
}
