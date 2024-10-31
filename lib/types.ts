import { StaticImageData } from "next/image";

// String Unions
export type MainCategory = "Golf & Sports Turf" | "Synthetic Turf" | "All Purpose" | "All Products";

// Navigation
export type NavMenuItems = "Home" | "Products" | "Parts Form" | "About" | "Finance Options";
export type ProductNavItems =
    | "Golf & Sports Turf"
    | "Synthetic Turf"
    | "All Purpose"
    | "All Products";
export type NavMenuLinks = "" | "/" | "/parts-form" | "/about" | "/finance-options";
export type ProductNavLinks =
    | "/products"
    | "/products/"
    | "/products/synthetic-turf"
    | "/products/all-purpose";
// Products
export type GolfSportsTurfItems =
    | "Aerators"
    | "Verticutters"
    | "Sweepers"
    | "Rollers/Brush"
    | "Top Dressers/Spreaders"
    | "Seeders"
    | "Line Markers"
    | "Implement Frames"
    | "Hand Tools"
    | "Goals"
    | "Mowers";
export type MowersItems = "Reel Mowers" | "Rotary Mowers" | "Hover Mowers";
export type SyntheticTurfItems =
    | "Brushes"
    | "Goals"
    | "Imeplement Frames"
    | "Sweepers"
    | "Top Dresser"
    | "Deep Cleaner"
    | "All In One Brush System"
    | "Hand Tools";

// Brands
export type EquipmentBrand =
    | ""
    | HowardsonsBrand
    | "Harod Sports"
    | "Pitchmark Line Markers"
    | "Buffalo Turbine"
    | "Eastman";
export type HowardsonsBrand = "Dennis" | "SISIS" | "Syn-Pro";

// Clients
export type Clients =
    | "Metlife Stadium"
    | "HardRock Stadium"
    | "Camden Yard"
    | "M&T Bank Stadium"
    | "Inter&Co Stadium"
    | "Cracker Jack Stadium";

export type Category = MainCategory | GolfSportsTurfItems | MowersItems | SyntheticTurfItems;
export type NavMenuType = {
    title: NavMenuItems | ProductNavItems | GolfSportsTurfItems | SyntheticTurfItems | MowersItems;
    link: NavMenuLinks | ProductNavLinks;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    mainCategory: MainCategory;
    subCategory: Category;
    brand: EquipmentBrand;
    image: string | StaticImageData;
    equipment_details: EquipmentType;
    usedBy?: Clients;
    popular?: boolean;
};

export type EquipmentType = {
    specs_description: string;
    features: string[];
    specifications: {
        code: string;
        working_width: string;
        model?: string;
        action?: string;
        working_depth?: string;
        tractor_power_requirement?: string;
        inclusions?: string;
    };
    video?: string;
};
