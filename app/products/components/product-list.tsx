"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./product-card";
import { allProducts } from "@/lib/products/list/product-list";
import { MainCategory, Tag } from "@/lib/types/categories";
import { EquipmentBrand } from "@/lib/types/brands";

export default function ProductList() {
    const params = useSearchParams();

    const main = params.get("main") as MainCategory | null;
    const brand = params.get("brand") as EquipmentBrand | null;
    const client = params.get("client");

    /**
     * Tags: ?tags=folding,freestanding
     */
    const tagsParam = params.get("tags");
    const tags = tagsParam ? (tagsParam.split(",") as Tag[]) : null;

    const filtered = allProducts.filter((product) => {
        // Main category
        if (main && product.mainCategory !== main) return false;

        // Brand
        if (brand && product.brand !== brand) return false;

        // Client usage
        if (client && product.usedBy !== client) return false;

        // Tags (AND logic)
        if (tags && !tags.every((tag) => product.tags.includes(tag))) {
            return false;
        }

        return true;
    });

    return (
        <div className="grid w-full grid-cols-1 gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
