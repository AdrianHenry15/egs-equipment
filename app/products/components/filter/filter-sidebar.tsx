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
    const selectedSubCategory = params.get("subcategory");
    const selectedBrand = params.get("brand");

    return (
        <aside className="min-w-72 p-4 border-r border-gray-200 bg-white hidden flex-col lg:flex">
            <div className="flex items-center space-x-2">
                <IoFilterOutline color="black" size={20} />
                <h2 className="text-xl font-semibold text-black">Filters</h2>
            </div>

            <FilterGroup
                title="Categories"
                options={Filters.MainCategory}
                selectedOption={selectedMainCategory}
                onChange={(category) => updateUrl({ category, subcategory: null })}
            />

            {selectedMainCategory === "Golf & Sports Turf" && (
                <FilterGroup
                    title="Golf & Sports Turf Items"
                    options={Filters.GolfSportsTurfItems}
                    selectedOption={selectedSubCategory}
                    onChange={(subcategory) => updateUrl({ subcategory })}
                />
            )}

            {selectedMainCategory === "Synthetic Turf" && (
                <FilterGroup
                    title="Synthetic Turf Items"
                    options={Filters.SyntheticTurfItems}
                    selectedOption={selectedSubCategory}
                    onChange={(subcategory) => updateUrl({ subcategory })}
                />
            )}

            <FilterGroup
                title="Brand"
                options={Filters.EquipmentBrand}
                selectedOption={selectedBrand}
                onChange={(brand) => updateUrl({ brand })}
            />

            <button
                onClick={() =>
                    updateUrl({
                        category: null,
                        subcategory: null,
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
