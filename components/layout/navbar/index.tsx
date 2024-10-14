"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import Logo from "@/public/logos/placeholder.webp";

import MobileHeader from "./mobile-menu";
import { NavMenu } from "../../../lib/constants";
import { BiChevronDown } from "react-icons/bi";
import ProductsMenu from "./products-menu";

// TODO: Update navbar to Home, Products [Natural Grass, Synthetic Turf, All Purpose], Parts & Service, About, Finance Options]
export default function Navbar() {
    // Constants
    const pathname = usePathname();

    // State
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);

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
                                className={` flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-green-600 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                            >
                                {item.title}
                                <BiChevronDown size={20} />
                            </li>
                        </span>
                        {productsMenuOpen && (
                            <ProductsMenu setProductsMenuOpen={() => setProductsMenuOpen(false)} />
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
                            className={` flex items-center mx-2 transition-all duration-300 ease-in-out hover:text-green-600 hover:underline ${
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
            className={`bg-white text-sm font-semibold flex w-full sticky top-0 z-50 shadow-md lg:pb-0`}
        >
            {/* MOBILE CONTAINER */}
            <div className="absolute self-center right-0 top-4 lg:top-0 lg:hidden">
                <MobileHeader />
            </div>
            {/* TITLE & LINKS  */}
            <div className="flex w-full mt-2 items-center justify-center py-4">
                <div className="flex items-center">
                    <Link href="/" className="lg:mr-10">
                        {/* TODO: LOGO */}
                        <Image className="" src={Logo} alt="logo" width={35} />
                    </Link>
                    {/* LINKS  */}
                    <ul className="hidden text-gray-600 items-center lg:flex">
                        {/* {NavMenu.map((item: NavMenuType) => (
                            <li
                                className={`mx-2 transition-all duration-300 ease-in-out hover:text-green-600 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                                key={item.title}
                            >
                                <Link href={item.link} className="">
                                    {item.title}
                                </Link>
                            </li>
                        ))} */}
                        {renderNavMenu()}
                    </ul>
                </div>
                {/* NAV BUTTONS */}
            </div>
        </nav>
    );
}
