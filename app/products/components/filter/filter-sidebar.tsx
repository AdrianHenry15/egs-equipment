"use client";

import { IoFilterOutline } from "react-icons/io5";
import FilterGroup from "./filter-group";
import { useProductFilters } from "@/hooks/use-product-filters";
import { useSearchParams } from "next/navigation";
import { Filters } from "./filter-data";

export default function FilterSidebar() {
    const params = useSearchParams();
    const { updateUrl } = useProductFilters();

    const selectedMainCategory = params.get("category");
    const selectedTag = params.get("tag");
    const selectedBrand = params.get("brand");

    return (
        <aside className="min-w-72 p-4 border-r border-gray-200 bg-white hidden flex-col lg:flex">
            <div className="flex items-center space-x-2">
                <IoFilterOutline color="black" size={20} />
                <h2 className="text-xl font-semibold text-black">Filters</h2>
            </div>

            {/* MAIN CATEGORY FILTER */}
            <FilterGroup
                title="Category"
                options={Filters.mainCategory}
                selectedOption={selectedMainCategory}
                onChange={(category) => updateUrl({ category, tag: null })}
            />

            {/* CONDITIONAL TAG GROUPS BASED ON CATEGORY */}

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
                    options={Filters.turfTags} // same domain for now
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
                <p className="text-sm text-gray-500 mt-2">No additional filters available.</p>
            )}

            {/* BRAND FILTER */}
            <FilterGroup
                title="Brand"
                options={Filters.ageGroup}
                selectedOption={selectedBrand}
                onChange={(brand) => updateUrl({ brand })}
            />

            {/* RESET FILTERS */}
            <button
                onClick={() =>
                    updateUrl({
                        category: null,
                        tag: null,
                        brand: null,
                    })
                }
                className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded"
                aria-label="Reset all filters"
            >
                Reset Filters
            </button>
        </aside>
    );
}
