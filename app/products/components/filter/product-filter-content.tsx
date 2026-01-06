"use client";

import { useSearchParams } from "next/navigation";
import { useProductFilters } from "@/hooks/use-product-filters";
import FilterGroup from "./filter-group";
import { MAIN_CATEGORIES } from "@/lib/domain/categories";
import { MainCategory } from "@/lib/types/categories";
import { BRANDS } from "@/lib/domain/brands";
import { CATEGORY_FILTER_TAGS } from "@/lib/domain/category-filters";

export function ProductFilterContent() {
    const params = useSearchParams();
    const { updateUrl } = useProductFilters();

    const selectedCategory = params.get("category") as MainCategory | null;
    const selectedTag = params.get("tag");
    const selectedBrand = params.get("brand");

    const tagOptions =
        selectedCategory && CATEGORY_FILTER_TAGS[selectedCategory]
            ? CATEGORY_FILTER_TAGS[selectedCategory].map((opt) => ({
                  label: opt.label,
                  value: opt.tag, // <-- adapt here
              }))
            : undefined;

    return (
        <>
            {/* BRAND */}
            <FilterGroup
                title="Brand"
                options={BRANDS}
                selectedOption={selectedBrand}
                onChange={(brand) => updateUrl({ brand })}
            />

            {/* CATEGORY */}
            <FilterGroup
                title="Category"
                options={MAIN_CATEGORIES}
                selectedOption={selectedCategory}
                onChange={(category) =>
                    updateUrl({
                        category,
                        tag: null,
                    })
                }
            />

            {/* TAGS (CATEGORY-DRIVEN) */}
            {tagOptions && tagOptions.length > 0 && (
                <FilterGroup
                    title="Type"
                    options={tagOptions}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {/* RESET */}
            <button
                onClick={() =>
                    updateUrl({
                        category: null,
                        tag: null,
                        brand: null,
                    })
                }
                className="mt-6 w-full rounded bg-red-500 py-2 font-semibold text-white"
            >
                Reset Filters
            </button>
        </>
    );
}
