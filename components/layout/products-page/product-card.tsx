"use client";

import { ProductType } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    const MAX_NAME_LENGTH = 15;
    const MAX_DESCRIPTION_LENGTH = 30; // Adjust this value as needed

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
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow max-h-[350px] p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Adjust animation duration as needed
        >
            <Link href={`/products/${product.id}`}>
                <Image
                    width={1000}
                    height={1000}
                    src={typeof product.image === "string" ? product.image : product.image.src}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="text-lg text-black font-semibold mb-2">{truncatedName}</h3>
                    <p className="text-sm text-gray-600 mb-4">{truncatedDescription}</p>
                    <p className="text-xs text-black">Brand: {product.brand}</p>
                </div>
            </Link>
        </motion.div>
    );
}
