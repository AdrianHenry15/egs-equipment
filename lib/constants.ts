import { NavMenuType } from "./types/navigation";

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
    {
        title: "Events",
        link: "/events",
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
        title: "Debris Blowers",
        value: "debris_blower",
        link: "/products?category=debris_blower",
    },
    {
        title: "Goals",
        value: "goal",
        link: "/products?category=goal",
    },
    {
        title: "Line Markers",
        value: "line_marker",
        link: "/products?category=line_marker",
    },
    {
        title: "Natural Turf",
        value: "natural_turf",
        link: "/products?category=natural_turf",
    },
    {
        title: "Synthetic Turf",
        value: "synthetic_turf",
        link: "/products?category=synthetic_turf",
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
