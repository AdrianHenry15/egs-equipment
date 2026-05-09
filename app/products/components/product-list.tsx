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

    const formatFilterLabel = (value: string) => {
        return value
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };
    const activeFilterLabel = formatFilterLabel(tag ?? brand ?? category ?? client ?? "All Products");

    console.log("RAW PARAMS", Object.fromEntries(params.entries()));

    const filtered = allProducts.filter((product) => {
        if (category && product.mainCategory !== category) return false;
        if (brand && product.brand !== brand) return false;
        if (client && product.usedBy !== client) return false;
        if (tag && !product.tags.includes(tag)) return false;

        return true;
    });

    /* ---------------------------------- */
    /* EMPTY STATE */
    /* ---------------------------------- */

    if (filtered.length === 0) {
        return (
            <section
                className="
          flex w-full flex-col items-center justify-center
          px-page py-section
          text-center
        "
            >
                <div
                    className="
            flex max-w-lg flex-col items-center
            rounded-card border border-border
            bg-card p-8
            shadow-card
          "
                >
                    <h3
                        className="
              text-xl font-semibold
              text-foreground
            "
                    >
                        No products match your filters
                    </h3>

                    <p
                        className="
              mt-3 text-sm leading-relaxed
              text-muted-foreground
            "
                    >
                        This combination of category, brand, and type doesn’t return any products. Try removing a filter
                        or selecting a different option.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => (window.location.href = "/products")}
                            className="
                inline-flex items-center justify-center
                rounded-button
                bg-primary px-4 py-2
                text-sm font-semibold
                text-primary-foreground
                transition-colors duration-200
                hover:bg-primary/90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
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
                                className="
                  inline-flex items-center justify-center
                  rounded-button border border-border
                  bg-background px-4 py-2
                  text-sm font-semibold
                  text-foreground
                  transition-colors duration-200
                  hover:bg-muted
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
                            >
                                Remove last filter
                            </button>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full px-page py-section p-4">
            <header className="mb-6">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Products</p>

                <h1 className="mt-1 text-3xl font-bold text-foreground">{activeFilterLabel}</h1>
            </header>

            <div
                className="
        grid w-full grid-cols-1 gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
            >
                {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
