"use client";

import { Dialog, Transition, DialogPanel, TransitionChild } from "@headlessui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillFilter } from "react-icons/ai";

import { useProductFilters } from "@/hooks/use-product-filters";
import FilterGroup from "./filter-group";
import { Filters } from "./filter-data";

export default function MobileSidebarFilter() {
    const pathname = usePathname();
    const params = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    const { updateUrl } = useProductFilters();

    // derive all selected values from URL
    const selectedMainCategory = params.get("category");
    const selectedSubCategory = params.get("subcategory");
    const selectedBrand = params.get("brand");

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

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
                        <DialogPanel className="fixed bottom-0 left-0 top-0 flex h-full flex-col bg-white pb-6 w-full sm:w-[325px]">
                            <aside className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-black">Filters</h2>
                                    <button
                                        onClick={closeMobileMenu}
                                        aria-label="Close filters"
                                        className="rounded-md p-2 text-black"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>

                                <FilterGroup
                                    title="Categories"
                                    options={Filters.MainCategory}
                                    selectedOption={selectedMainCategory}
                                    onChange={(category) =>
                                        updateUrl({ category, subcategory: null })
                                    }
                                    defaultOpen
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
                                    className="mt-6 w-full rounded bg-red-500 py-2 font-semibold text-white"
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
