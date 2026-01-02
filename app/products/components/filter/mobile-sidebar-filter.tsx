"use client";

import { Dialog, Transition, DialogPanel, TransitionChild } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillFilter } from "react-icons/ai";
import { ProductFilterContent } from "./product-filter-content";

export default function MobileSidebarFilter() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="relative flex lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open filters"
                className="fixed bottom-3 left-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white p-2 opacity-75"
            >
                <AiFillFilter size={20} />
            </button>

            <Transition show={isOpen}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
                    </TransitionChild>

                    <TransitionChild
                        as={Fragment}
                        enter="transition-transform duration-100"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-100"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="fixed left-0 top-0 h-full w-full bg-white p-4 sm:w-81.25">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-black">Filters</h2>
                                <button onClick={() => setIsOpen(false)} aria-label="Close filters">
                                    <XMarkIcon color="black" className="h-6 w-6" />
                                </button>
                            </div>

                            <ProductFilterContent />
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    );
}
