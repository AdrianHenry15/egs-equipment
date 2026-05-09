"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProductBrandImage } from "@/lib/products/helpers/get-product-brand-image";
import { ProductType } from "@/lib/types/product";

interface ProductCardProps {
    product: ProductType;
}

const MAX_DESCRIPTION_LENGTH = 100;

export default function ProductCard({ product }: ProductCardProps) {
    const truncatedDescription =
        product.description.length > MAX_DESCRIPTION_LENGTH
            ? `${product.description.slice(0, MAX_DESCRIPTION_LENGTH)}…`
            : product.description;

    const primaryImage = product.images?.[0];

    return (
        <motion.article
            className="
        flex h-full flex-col overflow-hidden
        rounded-card border border-border
        bg-card text-card-foreground
        shadow-card
        transition-shadow duration-200
        hover:shadow-card-hover
      "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Link
                href={`/products/${product.id}`}
                className="
          group flex grow flex-col
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
        "
                aria-label={`View ${product.name}`}
            >
                {primaryImage && (
                    <div className="overflow-hidden bg-muted">
                        <Image
                            width={1000}
                            height={1000}
                            src={primaryImage}
                            alt={product.name}
                            className="
                h-48 w-full object-cover
                transition-transform duration-300
                group-hover:scale-[1.03]
              "
                            priority={false}
                        />
                    </div>
                )}

                <div className="flex grow flex-col p-4">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{product.name}</h3>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{truncatedDescription}</p>

                    <div className="mt-auto">
                        <Image
                            width={product.brand === "dennis" || product.brand === "eastman" ? 100 : 60}
                            height={32}
                            className={product.brand === "dennis" ? "h-8 w-auto" : "h-6 w-auto"}
                            alt={product.brand}
                            src={getProductBrandImage(product.brand)}
                        />
                    </div>
                </div>
            </Link>

            <Link
                href="/contact"
                className="
          flex items-center justify-center
          bg-primary px-4 py-2
          text-sm font-medium text-primary-foreground
          transition-colors duration-200
          hover:bg-primary/90
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
        "
            >
                Request a Quote
            </Link>
        </motion.article>
    );
}
