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
            if (item.title === "Products") {
                return (
                    <div key={item.title} className="relative">
                        <button
                            onClick={() => setProductsMenuOpen((prev) => !prev)}
                            className={`flex items-center gap-1 px-2 py-1 transition hover:text-green-700 ${
                                pathname === item.link ? "underline" : ""
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
                    className={`px-2 py-1 whitespace-nowrap transition hover:text-green-700 ${
                        pathname === item.link ? "underline" : ""
                    }`}
                >
                    {item.title}
                </Link>
            );
        });

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
            <div className="grid h-20 grid-cols-3 items-center px-4 xl:px-8">
                {/* LEFT */}
                <div className="flex items-center gap-3">
                    {/* Mobile search */}
                    <button
                        onClick={toggleSearchModal}
                        className="xl:hidden text-gray-700 hover:text-black"
                        aria-label="Search"
                    >
                        <BiSearch size={22} />
                    </button>

                    {/* Desktop nav */}
                    <ul className="hidden xl:flex items-center gap-3 text-sm font-semibold text-gray-600">
                        {renderNavMenu()}
                    </ul>
                </div>

                {/* CENTER (TRUE CENTER LOGO) */}
                <div className="flex justify-center">
                    <Link href="/" aria-label="Home">
                        <Image src={Logo} alt="EGS Equipment" className="w-44 object-contain" priority />
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="xl:hidden absolute right-4">
                    <MobileMenu />
                </div>

                {/* RIGHT */}

                <div className="hidden xl:flex items-center justify-end gap-4">
                    <SearchBar />
                    <UserMenu />
                </div>
            </div>
        </nav>
    );
}
