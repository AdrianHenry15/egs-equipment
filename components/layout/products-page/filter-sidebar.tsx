"use client";
import {
    MainCategory,
    EquipmentBrand,
    Clients,
    GolfSportsTurfItems,
    MowersItems,
    SyntheticTurfItems,
} from "@/lib/types";
import { useProductStore } from "@/stores/product-store";

// Define filter options
const filters = {
    MainCategory: [
        "Golf & Sports Turf",
        "Synthetic Turf",
        "All Purpose",
        "All Products",
    ] as MainCategory[],
    GolfSportsTurfItems: [
        "Aerators",
        "Verticutters",
        "Sweepers",
        "Rollers/Brush",
        "Top Dressers/Spreaders",
        "Seeders",
        "Line Markers",
        "Implement Frames",
        "Hand Tools",
        "Goals",
        "Mowers",
    ] as GolfSportsTurfItems[],
    MowersItems: ["Reel Mowers", "Rotary Mowers", "Hover Mowers"] as MowersItems[],
    SyntheticTurfItems: [
        "Brushes",
        "Goals",
        "Implement Frames",
        "Sweepers",
        "Top Dresser",
        "Deep Cleaner",
        "All In One Brush System",
        "Hand Tools",
    ] as SyntheticTurfItems[],
    EquipmentBrand: [
        "Dennis",
        "SISIS",
        "Syn-Pro",
        "Harod Sports",
        "Pitchmark Line Markers",
    ] as EquipmentBrand[],
    Clients: [
        "Metlife Stadium",
        "HardRock Stadium",
        "Camden Yard",
        "M&T Bank Stadium",
        "Inter&Co Stadium",
        "Cracker Jack Stadium",
    ] as Clients[],
};

export default function FilterSidebar() {
    const {
        filterByMainCategory,
        filterBySubCategory,
        filterByBrand,
        resetFilters,
        selectedMainCategory,
        selectedSubCategory,
        selectedBrand,
    } = useProductStore();

    // Define a helper to render each filter section
    const renderFilterSection = (
        title: string,
        options: string[],
        selectedOption: string | null,
        onClick: (option: string) => void
    ) => (
        <section aria-labelledby={title.toLowerCase().replace(" ", "-")}>
            <h3
                id={title.toLowerCase().replace(" ", "-")}
                className="text-lg text-black font-medium mt-4"
            >
                {title}
            </h3>
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onClick(selectedOption === option ? "" : option)}
                    className={`block text-sm text-left px-2 py-1 my-1 rounded ${
                        selectedOption === option ? "text-blue-500" : " text-gray-400"
                    }`}
                    aria-pressed={selectedOption === option}
                    aria-label={`Filter by ${option}`}
                >
                    {option}
                </button>
            ))}
        </section>
    );

    return (
        <aside className="w-64 p-4 border-r border-gray-200 bg-white hidden flex-col lg:flex">
            <h2 className="text-xl font-semibold mb-4 text-black">Filters</h2>

            {renderFilterSection(
                "Categories",
                filters.MainCategory,
                selectedMainCategory,
                (category) => filterByMainCategory(category as MainCategory)
            )}

            {selectedMainCategory === "Golf & Sports Turf" &&
                renderFilterSection(
                    "Golf & Sports Turf Items",
                    filters.GolfSportsTurfItems,
                    selectedSubCategory,
                    (subCategory) => filterBySubCategory(subCategory as GolfSportsTurfItems)
                )}

            {selectedMainCategory === "Synthetic Turf" &&
                renderFilterSection(
                    "Synthetic Turf Items",
                    filters.SyntheticTurfItems,
                    selectedSubCategory,
                    (subCategory) => filterBySubCategory(subCategory as SyntheticTurfItems)
                )}

            {renderFilterSection("Brand", filters.EquipmentBrand, selectedBrand, (brand) =>
                filterByBrand(brand as EquipmentBrand)
            )}

            {/* {renderFilterSection("Client", filters.Clients, selectedClient, (client) =>
                filterByClient(client as Clients)
            )} */}

            <button
                onClick={resetFilters}
                className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded"
                aria-label="Reset all filters"
            >
                Reset Filters
            </button>
        </aside>
    );
}
