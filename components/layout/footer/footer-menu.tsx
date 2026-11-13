"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavMenu } from "../../../lib/constants";

const FooterMenu = () => {
    const pathname = usePathname();

    return (
        <nav aria-label="Footer navigation">
            <h2 className="text-base font-semibold">Quick links</h2>

            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                {NavMenu.map((item) => {
                    const href = item.title === "Products" ? "/products" : item.link;
                    const isActive = pathname === href;

                    return (
                        <li key={item.title}>
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`inline-flex min-h-9 items-center transition-colors ${
                                    isActive
                                        ? "font-medium text-brand-gold underline underline-offset-4"
                                        : "text-white/75 hover:text-brand-gold"
                                }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterMenu;
