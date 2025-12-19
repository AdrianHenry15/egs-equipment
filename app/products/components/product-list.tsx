"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./product-card";
import { allProducts } from "@/lib/products/list/product-list";

export default function ProductList() {
    const params = useSearchParams();

    const main = params.get("main");
    const sub = params.get("sub");
    const brand = params.get("brand");
    const client = params.get("client");

    const filtered = allProducts.filter((p) => {
        if (main && p.mainCategory !== main) return false;
        if (sub && p.subCategory !== sub) return false;
        if (brand && p.brand !== brand) return false;
        if (client && p.usedBy !== client) return false;
        return true;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6 w-full">
            {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
