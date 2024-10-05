import { NavMenuType } from "./types";

export type Category = "Synthetic" | "Natural" | "Aerators" | "Debris Blowers";

export type NavMenuItems = "Home" | "About" | "Contact" | "Products" | "Parts";

export type NavMenuLinks = "/" | "/about" | "/contact" | "/products" | "/parts";

export enum AltNavMenuLinks {
    CONTACT_US = "/contact-us",
    ESTIMATE = "/estimate",
}

export const NavMenu: NavMenuType[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Products",
        link: "/products",
    },
    {
        title: "Contact",
        link: "/contact",
    },
];
