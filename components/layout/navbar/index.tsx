"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import Logo from "@/public/logos/EGS1.png";

import MobileMenu from "./mobile-menu";
import { NavMenu } from "@/lib/constants";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import SearchBar from "@/components/search-bar";
import ProductsNavMenu from "./products-nav-menu";
import UserMenu from "./user/user-menu";
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
            const isActive = pathname === item.link;

            if (item.title === "Products") {
                return (
                    <div key={item.title} className="relative">
                        <button
                            type="button"
                            onClick={() => setProductsMenuOpen((prev) => !prev)}
                            className={`flex items-center gap-1 rounded-md px-2 py-1 text-sm font-semibold transition hover:bg-accent hover:text-accent-foreground ${
                                isActive
                                    ? "text-primary underline decoration-secondary underline-offset-4"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {item.title}
                            <BiChevronDown size={18} />
                        </button>

                        {productsMenuOpen && <ProductsNavMenu setProductsMenuOpen={() => setProductsMenuOpen(false)} />}
                    </div>
                );
            }

            return (
                <Link
                    key={item.title}
                    href={item.link}
                    className={`rounded-md px-2 py-1 text-sm font-semibold whitespace-nowrap transition hover:bg-accent hover:text-accent-foreground ${
                        isActive
                            ? "text-primary underline decoration-secondary underline-offset-4"
                            : "text-muted-foreground"
                    }`}
                >
                    {item.title}
                </Link>
            );
        });

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/90 text-foreground shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
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

                    <ul className="hidden items-center gap-3 xl:flex">{renderNavMenu()}</ul>
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
                    <SearchBar />
                    <ThemeToggle />
                    <UserMenu />
                </div>
            </div>
        </nav>
    );
}
