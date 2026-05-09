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
            {/* Open Button */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open filters"
                className="
                    fixed bottom-4 left-4 z-50
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-border
                    bg-card
                    text-card-foreground
                    shadow-lg
                    transition
                    hover:bg-accent
                    hover:text-accent-foreground
                "
            >
                <AiFillFilter size={20} />
            </button>

            <Transition show={isOpen}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-9000">
                    {/* Backdrop */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity duration-150"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm" />
                    </TransitionChild>

                    {/* Sidebar */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-transform duration-200"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="fixed top-0 left-0 flex h-full w-full flex-col border-r border-border bg-card p-4 text-card-foreground shadow-2xl sm:w-81.25">
                            {/* Header */}
                            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                                <h2 className="text-xl font-semibold text-card-foreground">Filters</h2>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close filters"
                                    className="
                                        flex h-9 w-9 items-center justify-center
                                        rounded-full
                                        border border-border
                                        bg-background
                                        text-foreground
                                        transition
                                        hover:bg-accent
                                        hover:text-accent-foreground
                                    "
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto">
                                <ProductFilterContent />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    );
}
