"use client";

import { featuredProducts } from "@/lib/products/list/product-list";

import ProductCard from "@/app/products/components/product-card";
import { ProductCardSkeleton } from "./product-card-skeleton";

export default function PopularProductsRow() {
    const isLoading = featuredProducts.length === 0;

    return (
        <section className="w-full text-black bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading &&
                        Array.from({ length: 6 }).map((_, i) => (
                            <ProductCardSkeleton key={`skeleton-${i}`} />
                        ))}

                    {!isLoading &&
                        featuredProducts.map((product, index) => {
                            if (!product) {
                                return <ProductCardSkeleton key={`empty-${index}`} />;
                            }

                            return <ProductCard key={product.id + index} product={product} />;
                        })}
                </div>
            </div>
        </section>
    );
}
