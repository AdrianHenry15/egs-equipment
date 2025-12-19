"use client";

import { ProductType } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProductBrandImage } from "@/lib/products/helpers/get-product-brand-image";

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    const MAX_NAME_LENGTH = 15;
    const MAX_DESCRIPTION_LENGTH = 50;

    const truncatedName =
        product.name.length > MAX_NAME_LENGTH
            ? `${product.name.substring(0, MAX_NAME_LENGTH)}...`
            : product.name;

    const truncatedDescription =
        product.description.length > MAX_DESCRIPTION_LENGTH
            ? `${product.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
            : product.description;

    return (
        <motion.div
            className="
                flex flex-col
                h-full
                bg-white
                border border-gray-200
                rounded-lg
                shadow
                hover:shadow-lg
                transition-shadow
                overflow-hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main content */}
            <Link href={`/products/${product.id}`} className="flex flex-col">
                <Image
                    width={1000}
                    height={1000}
                    src={typeof product.image === "string" ? product.image : product.image.src}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                <div className="flex flex-col p-4 flex-grow">
                    <h3 className="text-lg text-black font-semibold mb-2">{truncatedName}</h3>

                    <p className="text-sm text-gray-600 mb-4">{truncatedDescription}</p>

                    <div className="mt-auto">
                        <Image
                            width={
                                product.brand === "Dennis" || product.brand === "Eastman" ? 100 : 60
                            }
                            className={product.brand === "Dennis" ? "h-8" : "h-6"}
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
                    mt-auto
                    flex items-center justify-center
                    bg-green-700
                    py-2
                    text-white
                    font-medium
                    transition-transform
                    hover:scale-[1.02]
                "
            >
                Request A Quote
            </Link>
        </motion.div>
    );
}
