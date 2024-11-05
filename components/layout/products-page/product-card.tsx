"use client";

import { ProductType } from "@/lib/types";
import Image from "next/image";

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow max-h-[350px] p-4">
            <Image
                width={1000}
                height={1000}
                src={typeof product.image === "string" ? product.image : product.image.src}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h3 className="text-lg text-black font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                {/* {product.price && (
                    <div className="text-lg font-bold text-blue-500 mb-2">${product.price.toFixed(2)}</div>
                )} */}
                <p className="text-xs text-black">Brand: {product.brand}</p>
            </div>
        </div>
    );
}
