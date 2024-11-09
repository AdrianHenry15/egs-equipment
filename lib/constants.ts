// TODO: Update navbar to Home, Products [Natural Grass, Synthetic Turf, All Purpose], Parts & Service, About, Finance Options]

import { NavMenuType } from "./types";

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
        title: "Products",
        link: "",
    },
    // Parts Order Form
    {
        title: "Parts Form",
        link: "/parts-form",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Finance Options",
        link: "/finance-options",
    },
];
export const ProductsMenuItems: NavMenuType[] = [
    {
        title: "All Products",
        link: "/products",
    },
    {
        title: "Golf & Sports Turf",
        link: "/products",
    },
    {
        title: "Synthetic Turf",
        link: "/products",
    },
    {
        title: "All Purpose",
        link: "/products",
    },
];

export const GolfSportsTurfItems: NavMenuType[] = [
    {
        title: "Aerators",
        link: "/products",
    },
    {
        title: "Verticutters",
        link: "/products",
    },
    {
        title: "Sweepers",
        link: "/products",
    },
    {
        title: "Rollers/Brush",
        link: "/products",
    },
    {
        title: "Top Dressers/Spreaders",
        link: "/products",
    },
    {
        title: "Seeders",
        link: "/products",
    },
    {
        title: "Line Markers",
        link: "/products",
    },
    {
        title: "Implement Frames",
        link: "/products",
    },
    {
        title: "Hand Tools",
        link: "/products",
    },
    {
        title: "Goals",
        link: "/products",
    },
    {
        title: "Mowers",
        link: "/products",
    },
];

export const MowersItems: NavMenuType[] = [
    {
        title: "Reel Mowers",
        link: "/products",
    },
    {
        title: "Rotary Mowers",
        link: "/products",
    },
    {
        title: "Hover Mowers",
        link: "/products",
    },
];

export const SyntheticTurfItems: NavMenuType[] = [
    {
        title: "Brushes",
        link: "/products",
    },
    {
        title: "Goals",
        link: "/products",
    },
    {
        title: "Implement Frames",
        link: "/products",
    },
    {
        title: "Sweepers",
        link: "/products",
    },
    {
        title: "Top Dresser",
        link: "/products",
    },
    {
        title: "Deep Cleaner",
        link: "/products",
    },
    {
        title: "All In One Brush System",
        link: "/products",
    },
    {
        title: "Hand Tools",
        link: "/products",
    },
];
