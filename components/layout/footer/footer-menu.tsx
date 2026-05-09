"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavMenu } from "../../../lib/constants";

const FooterMenu = () => {
    const pathname = usePathname();

    return (
        <nav className="flex-1 text-sm md:text-left">
            <h5 className="text-2xl font-semibold tracking-wide text-card-foreground">Company</h5>

            <ul className="mt-6 space-y-4 text-sm">
                {NavMenu.map((item) => {
                    const isActive = pathname === (item.title === "Products" ? "/products" : item.link);

                    return (
                        <li key={item.title}>
                            <Link
                                href={item.title === "Products" ? "/products" : item.link}
                                className={`transition ${
                                    isActive
                                        ? "font-medium text-primary underline underline-offset-4"
                                        : "text-muted-foreground hover:text-primary"
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
