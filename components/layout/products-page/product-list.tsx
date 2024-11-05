"use client";

import { useProductStore } from "@/stores/product-store";
import SkeletonLoader from "./skeleton-loader";
import ProductCard from "./product-card";

export default function ProductList() {
    const { filteredProducts, isLoading, error } = useProductStore();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
        </div>
    );
}
