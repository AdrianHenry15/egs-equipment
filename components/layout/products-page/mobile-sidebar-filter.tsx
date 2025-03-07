"use client";

import { motion } from "framer-motion";
import { Dialog, Transition, DialogPanel, TransitionChild } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillFilter } from "react-icons/ai";
import { useProductStore } from "@/stores/product-store";
import { EquipmentBrand, GolfSportsTurfItems, MainCategory, SyntheticTurfItems } from "@/lib/types";
import { Filters } from "./filter-sidebar";

export default function MobileSidebarFilter() {
    // Constants
    const pathname = usePathname();

    // State
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    const {
        filterByMainCategory,
        filterBySubCategory,
        filterByBrand,
        resetFilters,
        selectedMainCategory,
        selectedSubCategory,
        selectedBrand,
    } = useProductStore();

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

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
            transition={{ duration: 0.5 }}
        >
            <h3
                id={title.toLowerCase().replace(" ", "-")}
                className="text-sm font-semibold text-black mt-4"
            >
                {title}
            </h3>
            {options.map((option, index) => (
                <div
                    key={index}
                    className="flex items-center cursor-pointer my-2"
                    onClick={() => onChange(option)}
                    aria-label={`Filter by ${option}`}
                >
                    <span
                        className={`w-4 h-4 mr-2 rounded-full border-[1px] border-black flex items-center justify-center ${
                            selectedOption === option ? "bg-blue-700" : "bg-white"
                        }`}
                    >
                        {selectedOption === option && (
                            <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                    </span>
                    <label className="block text-sm text-left text-black cursor-pointer">
                        {option}
                    </label>
                </div>
            ))}
        </motion.section>
    );

    return (
        <div className="relative flex lg:hidden">
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                className="flex h-11 w-11 items-center fixed bottom-3 left-3 z-50 justify-center rounded-full border border-black p-2 bg-white opacity-75 text-black transition-colors overflow-hidden"
            >
                <AiFillFilter size={100} className="text-black" />
            </button>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-[9050]">
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </TransitionChild>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="fixed bottom-0 left-0 top-0 flex h-full flex-col bg-white pb-6 w-full sm:w-[375px]">
                            <aside className="p-4">
                                <div className="flex items-center justify-between">
                                    <button
                                        className="flex h-11 w-11 items-center justify-center rounded-md text-black transition-colors"
                                        onClick={closeMobileMenu}
                                        aria-label="Close mobile menu"
                                    >
                                        <XMarkIcon className="h-6" />
                                    </button>
                                </div>

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
                                        (subCategory) =>
                                            filterBySubCategory(subCategory as GolfSportsTurfItems)
                                    )}

                                {selectedMainCategory === "Synthetic Turf" &&
                                    renderFilterSection(
                                        "Synthetic Turf Items",
                                        Filters.SyntheticTurfItems,
                                        selectedSubCategory,
                                        (subCategory) =>
                                            filterBySubCategory(subCategory as SyntheticTurfItems)
                                    )}

                                {renderFilterSection(
                                    "Brand",
                                    Filters.EquipmentBrand,
                                    selectedBrand,
                                    (brand) => filterByBrand(brand as EquipmentBrand)
                                )}

                                <button
                                    onClick={resetFilters}
                                    className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded"
                                    aria-label="Reset all filters"
                                >
                                    Reset Filters
                                </button>
                            </aside>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    );
}
