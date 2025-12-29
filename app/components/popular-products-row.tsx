"use client";

import { allProducts } from "@/lib/products/list/product-list";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function PopularProductsRow() {
    return (
        <section className="w-full text-black bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
                        >
                            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={product.images[0] as StaticImageData}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4 flex-1">{product.description}</p>

                            <Link
                                href={`/products/${product.id}`}
                                className="inline-block text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                            >
                                View Product
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
