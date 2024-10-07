import { NavMenuType } from "./types";

// String Unions
export type Category = "Synthetic" | "Natural" | "Aerator" | "Debris Blower";
export type NavMenuItems = "Home" | "About" | "Contact" | "Products" | "Parts";
export type NavMenuLinks = "/" | "/about" | "/contact" | "/products" | "/parts";
export type EquipmentBrand = "" | "SISIS" | "Syn-Pro" | "Buffalo Turbine" | "Dennis" | "Eastman";

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
