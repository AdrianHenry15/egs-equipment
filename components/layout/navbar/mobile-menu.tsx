"use client";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

import { NavMenu } from "@/lib/constants";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";

import Button from "@/components/button";
import ProductsNavMenu from "./products-nav-menu";
import UserMenu from "./user/user-menu";

const ICON_BUTTON_CLASSES =
    "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-card-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

export default function MobileMenu() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsOpen(false);
        setProductsMenuOpen(false);
    };

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    const renderNavMenu = () => {
        return NavMenu.map((item) => {
            const isActive = pathname === item.link;

            if (item.title === "Products") {
                return (
                    <li key={item.title} className="relative">
                        <button
                            type="button"
                            onClick={() => setProductsMenuOpen((prev) => !prev)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg font-semibold transition ${
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-card-foreground hover:bg-accent hover:text-accent-foreground"
                            }`}
                        >
                            <span>{item.title}</span>

                            <BiChevronDown
                                size={22}
                                className={`transition-transform ${productsMenuOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {productsMenuOpen && (
                            <div className="mt-2">
                                <ProductsNavMenu setProductsMenuOpen={() => setProductsMenuOpen(false)} />
                            </div>
                        )}
                    </li>
                );
            }

            return (
                <li key={item.title}>
                    <Link
                        href={item.link}
                        onClick={closeMobileMenu}
                        className={`block rounded-xl px-4 py-3 text-lg font-semibold transition ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-card-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open mobile menu"
                    className={ICON_BUTTON_CLASSES}
                >
                    <Bars3Icon className="h-5 w-5" />
                </button>

                <UserMenu />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Transition show={isOpen}>
                        <Dialog onClose={closeMobileMenu} className="relative z-[9050]">
                            <TransitionChild
                                as={Fragment}
                                enter="transition-opacity ease-in-out duration-150"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-in-out duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
                            </TransitionChild>

                            <motion.aside
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 34,
                                }}
                                className="fixed inset-y-0 right-0 flex h-dvh w-full flex-col border-l border-border bg-card text-card-foreground shadow-2xl sm:w-[375px]"
                            >
                                <div className="flex items-center justify-between border-b border-border px-4 py-4">
                                    <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                        Menu
                                    </span>

                                    <button
                                        type="button"
                                        className={ICON_BUTTON_CLASSES}
                                        onClick={closeMobileMenu}
                                        aria-label="Close mobile menu"
                                    >
                                        <XMarkIcon className="h-5 w-5" />
                                    </button>
                                </div>

                                <nav className="flex-1 overflow-y-auto px-4 py-5">
                                    <ul className="flex flex-col gap-2">{renderNavMenu()}</ul>
                                </nav>

                                <div className="border-t border-border bg-card px-4 py-4">
                                    <div className="flex flex-col gap-3">
                                        <Link href="tel:7048423535" onClick={closeMobileMenu}>
                                            <Button
                                                leftChildren
                                                roundedFull
                                                className="w-full justify-center py-4"
                                                name="704-842-3535"
                                                altColor
                                            >
                                                <FaPhone className="mr-2" />
                                            </Button>
                                        </Link>

                                        <Link href="mailto:frank.eckert@eckertgolf.com" onClick={closeMobileMenu}>
                                            <Button
                                                leftChildren
                                                roundedFull
                                                className="w-full justify-center py-4"
                                                name="frank.eckert@eckertgolf.com"
                                            >
                                                <FaEnvelope className="mr-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.aside>
                        </Dialog>
                    </Transition>
                )}
            </AnimatePresence>
        </div>
    );
}
