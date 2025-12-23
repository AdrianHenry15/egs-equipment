"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import Logo from "@/public/logos/EGS1.png";

import MobileMenu from "./mobile-menu";
import { NavMenu } from "../../../lib/constants";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import SearchBar from "@/components/search-bar";
import ProductsNavMenu from "./products-nav-menu";
import UserMenu from "./user/user-menu";

export default function Navbar() {
    // Constants
    const pathname = usePathname();

    // State
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);

    // Render
    const renderNavMenu = () => {
        return NavMenu.map((item) => {
            if (item.title === "Products") {
                return (
                    <div className="relative cursor-pointer" key={item.title}>
                        <span
                            onClick={(e) => {
                                e.preventDefault();
                                setProductsMenuOpen(!productsMenuOpen);
                            }}
                        >
                            <li
                                className={`whitespace-nowrap flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-green-700 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                            >
                                {item.title}
                                <BiChevronDown size={20} />
                            </li>
                        </span>
                        {productsMenuOpen && (
                            <ProductsNavMenu
                                setProductsMenuOpen={() => setProductsMenuOpen(false)}
                            />
                        )}
                    </div>
                );
            } else {
                return (
                    <Link
                        onClick={() => setProductsMenuOpen(false)}
                        key={item.title}
                        href={item.link}
                        className="mr-2"
                    >
                        <li
                            className={` flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-green-700 hover:underline ${
                                pathname === item.link ? "underline" : ""
                            }`}
                        >
                            {item.title}
                        </li>
                    </Link>
                );
            }
        });
    };

    return (
        <nav
            id="nav-bar"
            className={`bg-white/90 text-sm font-semibold flex w-full sticky top-0 z-101 shadow-md lg:pb-0`}
        >
            {mobileSearch && (
                <div className="absolute flex justify-center items-center self-center w-full h-full ml-4 xl:hidden">
                    <SearchBar />
                </div>
            )}
            {!mobileSearch && (
                <div className="flex relative justify-center items-center self-center lg:hidden">
                    <BiSearch
                        onClick={() => setMobileSearch(!mobileSearch)}
                        className="text-black cursor-pointer absolute ml-14"
                        size={25}
                    />
                </div>
            )}
            {/* MOBILE CONTAINER */}
            <div className="absolute self-center right-0 top-4 xl:top-0 xl:hidden">
                <MobileMenu />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 items-center justify-center py-4">
                <div className="flex items-center">
                    <Link href="/" className="pl-10 lg:pl-0 lg:mr-10">
                        <Image className="w-48" src={Logo} alt="logo" />
                    </Link>
                    {/* LINKS  */}
                    <ul className="hidden text-gray-600 items-center xl:flex">{renderNavMenu()}</ul>
                </div>
                {/* NAV BUTTONS */}
            </div>
            <div className="hidden xl:flex items-center gap-4 pr-6">
                <SearchBar />
                <UserMenu />
            </div>
        </nav>
    );
}
