"use client";

import { featuredProducts } from "@/lib/products/list/product-list";
import ProductCard from "@/app/products/components/product-card";
import { FeaturedProductSkeleton } from "./featured-products-skeleton";

export default function FeaturedProducts() {
    const isLoading = featuredProducts.length === 0;

    const productsByBrand = featuredProducts.reduce<Record<string, typeof featuredProducts>>(
        (acc, product) => {
            if (!product) return acc;

            const brand = product.brand;
            if (!acc[brand]) acc[brand] = [];
            acc[brand].push(product);

            return acc;
        },
        {},
    );

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
                        <div key={brand} className="mb-14">
                            {/* Brand Heading */}
                            <h3 className="mb-6 text-2xl font-semibold text-black">{brand}</h3>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {products.map((product) =>
                                    product ? (
                                        <ProductCard key={product.id} product={product} />
                                    ) : null,
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
