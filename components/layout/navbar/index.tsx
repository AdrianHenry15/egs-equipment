"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import Logo from "@/public/logos/EGS1.png";

import MobileMenu from "./mobile-menu";
import { NavMenu } from "@/lib/constants";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import ProductsNavMenu from "./products-nav-menu";
import ThemeToggle from "@/components/theme-toggle";
import { useModalStore } from "@/stores/modal-store/modal-store";

export default function Navbar() {
    const pathname = usePathname();
    const { isOpen, openModal, type, closeModal } = useModalStore();
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);

    const toggleSearchModal = () => {
        if (isOpen && type === "search") closeModal();
        else openModal("search", { placeholder: "Search Products" });
    };

    const renderNavMenu = () =>
        NavMenu.map((item) => {
            const isProducts = item.title === "Products";
            const isActive = isProducts
                ? pathname === "/products" || pathname.startsWith("/products/")
                : pathname === item.link;
            const itemClass = `inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-2.5 text-sm leading-none font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                isActive || (isProducts && productsMenuOpen) ? "bg-muted text-primary" : "text-muted-foreground"
            }`;

            return (
                <li key={item.title} className={isProducts ? "relative flex" : "flex"}>
                    {isProducts ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setProductsMenuOpen((open) => !open)}
                                aria-expanded={productsMenuOpen}
                                className={`${itemClass} gap-1`}
                            >
                                <span>{item.title}</span>
                                <BiChevronDown
                                    aria-hidden="true"
                                    className={`size-4 shrink-0 motion-safe:transition-transform ${productsMenuOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {productsMenuOpen && (
                                <ProductsNavMenu setProductsMenuOpen={() => setProductsMenuOpen(false)} />
                            )}
                        </>
                    ) : (
                        <Link href={item.link} className={itemClass} aria-current={isActive ? "page" : undefined}>
                            {item.title}
                        </Link>
                    )}
                </li>
            );
        });

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/90 text-foreground shadow-sm backdrop-blur supports-backdrop-filter:bg-background/75">
            <div className="grid h-20 grid-cols-3 items-center px-4 xl:px-8">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleSearchModal}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition hover:bg-accent hover:text-accent-foreground xl:hidden"
                        aria-label="Search"
                    >
                        <BiSearch size={22} />
                    </button>

                    <ul className="hidden items-center gap-1 xl:flex">{renderNavMenu()}</ul>
                </div>

                <div className="flex justify-center">
                    <Link href="/" aria-label="Home">
                        <Image src={Logo} alt="EGS Equipment" className="w-44 object-contain" priority />
                    </Link>
                </div>

                <div className="absolute right-4 flex items-center gap-2 xl:hidden">
                    <ThemeToggle />
                    <MobileMenu />
                </div>

                <div className="hidden items-center justify-end gap-4 xl:flex">
                    <button
                        type="button"
                        onClick={toggleSearchModal}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        aria-label="Search"
                    >
                        <BiSearch size={22} />
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
