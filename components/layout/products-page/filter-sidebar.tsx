"use client";
import {
    MainCategory,
    EquipmentBrand,
    Clients,
    GolfSportsTurfItems,
    MowersItems,
    SyntheticTurfItems,
} from "@/lib/types";
import { motion } from "framer-motion";
import { useProductStore } from "@/stores/product-store";

// Define filter options
export const Filters = {
    MainCategory: ["Golf & Sports Turf", "Synthetic Turf", "All Purpose"] as MainCategory[],
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
        onChange: (option: string) => void
    ) => (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-labelledby={title.toLowerCase().replace(" ", "-")}
            transition={{ duration: 0.5 }} // Adjust animation duration as needed
        >
            <h3
                id={title.toLowerCase().replace(" ", "-")}
                className="text-sm font-semibold text-black mt-4"
            >
                {title}
            </h3>
            {options.map((option, index) => (
                <div className="flex items-center justify-start w-full m-2" key={index}>
                    <input
                        className="w-4 mr-2"
                        type="radio"
                        name={title}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => onChange(option)}
                        aria-label={`Filter by ${option}`}
                    />
                    <label
                        htmlFor={option}
                        className={`block text-sm text-left text-black rounded`}
                    >
                        {option}
                    </label>
                </div>
            ))}
        </motion.section>
    );

    return (
        <aside className="min-w-64 p-4 border-r border-gray-200 bg-white hidden flex-col lg:flex">
            <h2 className="text-xl font-semibold mb-4 text-black">Filters</h2>

            {renderFilterSection(
                "Categories",
                Filters.MainCategory,
                selectedMainCategory,
                (category) => filterByMainCategory(category as MainCategory)
            )}

            {selectedMainCategory === "Golf & Sports Turf" &&
                renderFilterSection(
                    "Golf & Sports Turf Items",
                    Filters.GolfSportsTurfItems,
                    selectedSubCategory,
                    (subCategory) => filterBySubCategory(subCategory as GolfSportsTurfItems)
                )}

            {selectedMainCategory === "Synthetic Turf" &&
                renderFilterSection(
                    "Synthetic Turf Items",
                    Filters.SyntheticTurfItems,
                    selectedSubCategory,
                    (subCategory) => filterBySubCategory(subCategory as SyntheticTurfItems)
                )}

            {renderFilterSection("Brand", Filters.EquipmentBrand, selectedBrand, (brand) =>
                filterByBrand(brand as EquipmentBrand)
            )}

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
