"use client";

import { useSearchParams } from "next/navigation";
import { useProductFilters } from "@/hooks/use-product-filters";
import FilterGroup from "./filter-group";
import { Filters } from "./filter-data";

export function ProductFilterContent() {
    const params = useSearchParams();
    const { updateUrl } = useProductFilters();

    const selectedMainCategory = params.get("category");
    const selectedTag = params.get("tag");
    const selectedBrand = params.get("brand");

    return (
        <>
            {/* BRAND */}
            <FilterGroup
                title="Brand"
                options={Filters.brand}
                selectedOption={selectedBrand}
                onChange={(brand) => updateUrl({ brand })}
            />

            {/* CATEGORY */}
            <FilterGroup
                title="Category"
                options={Filters.mainCategory}
                selectedOption={selectedMainCategory}
                onChange={(category) =>
                    updateUrl({
                        category,
                        tag: null, // reset tag on category change
                    })
                }
            />

            {/* CONDITIONAL TAGS */}
            {selectedMainCategory === "Sport" && (
                <FilterGroup
                    title="Sport Type"
                    options={Filters.sportTags}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {selectedMainCategory === "Natural Turf" && (
                <FilterGroup
                    title="Turf Tags"
                    options={Filters.turfTags}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {selectedMainCategory === "Synthetic Turf" && (
                <FilterGroup
                    title="Synthetic Turf Tags"
                    options={Filters.turfTags}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {selectedMainCategory === "Line Marker" && (
                <FilterGroup
                    title="Line Marker"
                    options={Filters.lineMarkerTags}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {selectedMainCategory === "Goal" && (
                <FilterGroup
                    title="Goal Type"
                    options={Filters.goalSubtype}
                    selectedOption={selectedTag}
                    onChange={(tag) => updateUrl({ tag })}
                />
            )}

            {selectedMainCategory === "Debris Blower" && (
                <p className="mt-2 text-sm text-gray-500">No additional filters available.</p>
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
