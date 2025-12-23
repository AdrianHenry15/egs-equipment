export type NavMenuType = {
    title: string;
    link: string;
};
export type NavMenuItems = "Home" | "Products" | "Parts Form" | "About" | "Finance Options";

export type NavMenuLinks = "/" | "/products" | "/parts-form" | "/about" | "/finance-options";

export type ProductNavItems =
    | "All Products"
    | "Golf & Sports Turf"
    | "Synthetic Turf"
    | "All Purpose";

export type ProductNavLinks = "/products" | "/products/synthetic-turf" | "/products/all-purpose";
