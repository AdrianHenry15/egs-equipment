"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Logo from "@/public/logos/placeholder.webp";

import MobileHeader from "./MobileMenu";
import { NavMenu } from "../../../lib/constants";
import { NavMenuType } from "../../../lib/types";

export default function Navbar() {
    const pathname = usePathname();

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
                        {NavMenu.map((item: NavMenuType) => (
                            <li
                                className={`mx-2 transition-all duration-300 ease-in-out hover:text-emerald-700 hover:underline ${
                                    pathname === item.link ? "underline" : ""
                                }`}
                                key={item.title}
                            >
                                <Link href={item.link} className="">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* NAV BUTTONS */}
            </div>
        </nav>
    );
}
