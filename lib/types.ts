import { StaticImageData } from "next/image";

// String Unions
export type Category = "Synthetic" | "Natural" | "Aerator" | "Debris Blower";
export type NavMenuItems = "Home" | "Products" | "Parts & Services" | "About" | "Finance Options";
export type ProductNavItems = "All Products" | "Natural Grass" | "Synthetic Turf" | "All Purpose";
export type NavMenuLinks = "" | "/" | "/parts-services" | "/about" | "/finance-options";
export type ProductNavLinks =
    | "/products"
    | "/products/natural-grass"
    | "/products/synthetic-turf"
    | "/products/all-purpose";
export type EquipmentBrand = "" | "SISIS" | "Syn-Pro" | "Buffalo Turbine" | "Dennis" | "Eastman";

export type NavMenuType = {
    title: NavMenuItems | ProductNavItems;
    link: NavMenuLinks | ProductNavLinks;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    category: Category;
    price?: number;
    quantity?: number;
    image: string | StaticImageData;
    equipment_details: EquipmentType;
};

export type EquipmentType = {
    specs_description: string;
    features: string[];
    brand: EquipmentBrand;
    specifications: {
        model?: string;
        code: string;
        action?: string;
        working_width: string;
        working_depth?: string;
        tractor_power_requirement?: string;
        inclusions?: string;
    };
    video?: string;
};
