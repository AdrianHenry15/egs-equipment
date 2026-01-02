"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./product-card";
import { allProducts } from "@/lib/products/list/product-list";
import { MainCategory, Tag } from "@/lib/types/categories";
import { EquipmentBrand } from "@/lib/types/brands";

export default function ProductList() {
    const params = useSearchParams();

    const category = params.get("category") as MainCategory | null;
    const brand = params.get("brand") as EquipmentBrand | null;
    const tag = params.get("tag") as Tag | null;
    const client = params.get("client");

    console.log("RAW PARAMS", Object.fromEntries(params.entries()));

    const filtered = allProducts.filter((product) => {
        if (category && product.mainCategory !== category) return false;
        if (brand && product.brand !== brand) return false;
        if (client && product.usedBy !== client) return false;
        if (tag && !product.tags.includes(tag)) return false;
        return true;
    });

    /* ---------------------------- */
    /* EMPTY STATE */
    /* ---------------------------- */

    if (filtered.length === 0) {
        return (
            <div className="flex w-full flex-col items-center justify-center px-6 py-16 text-center">
                <h3 className="text-xl font-semibold text-black">No products match your filters</h3>

                <p className="mt-2 max-w-md text-sm text-gray-600">
                    This combination of category, brand, and type doesn’t return any products. Try
                    removing a filter or selecting a different option.
                </p>

                <div className="mt-6 flex gap-3">
                    <button
                        onClick={() => (window.location.href = "/products")}
                        className="rounded bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                        View all products
                    </button>

                    {(tag || brand || category) && (
                        <button
                            onClick={() => {
                                const url = new URL(window.location.href);
                                url.searchParams.delete("tag");
                                window.location.href = url.toString();
                            }}
                            className="rounded border border-black px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100"
                        >
                            Remove last filter
                        </button>
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="grid w-full grid-cols-1 gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
