// TODO: Update navbar to Home, Products [Natural Grass, Synthetic Turf, All Purpose], Parts & Service, About, Finance Options]

import { NavMenuType } from "./types";

export enum AltNavMenuLinks {
    CONTACT_US = "/contact-us",
    ESTIMATE = "/estimate",
}

export const ProductsMenuItems: NavMenuType[] = [
    {
        title: "All Products",
        link: "/products",
    },
    {
        title: "Natural Grass",
        link: "/products/natural-grass",
    },
    {
        title: "Synthetic Turf",
        link: "/products/synthetic-turf",
    },
    {
        title: "All Purpose",
        link: "/products/all-purpose",
    },
];

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
    // {
    //     title: "Contact",
    //     link: "/contact-us",
    // },
    // {
    //     title: "Parts & Services",
    //     link: "/parts-services",
    // },
    // {
    //     title: "About",
    //     link: "/about",
    // },
    {
        title: "Finance Options",
        link: "/finance-options",
    },
];
