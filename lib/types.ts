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
    | "Scarifier"
    | "Sweepers"
    | "Rollers/Brush"
    | "Top Dressers/Spreaders"
    | "Seeders"
    | "Line Markers"
    | "Implement Frames"
    | "Hand Tools"
    | "Goals"
    | "Debris Blower"
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
    manuel?: string;
    usedBy?: Clients;
    popular?: boolean;
};

export type Dimensions = {
    width: string;
    length: string;
    altLength?: string;
    weight: string;
    altWeight?: string;
    height: string;
};

export type ProductSpecificationsType = {
    cutting_width?: string;
    brushes?: string;
    recommended_tractor?: string;
    number_of_brushes?: string;
    oscillating_brush?: string;
    rear_brush?: string;
    cylinder?: string;
    height_of_cut?: string;
    cutter_performance?: string;
    dimensions?: string | Dimensions;
    engine_petrol?: string;
    drive_system?: string;
    final_drive?: string;
    model?: string;
    code?: string;
    action?: string;
    working_width?: string;
    working_depth?: string;
    tractor_power_requirement?: string;
    engine?: string;
    inclusions?: string | string[];
    exclusions?: string;
};

export type EquipmentType = {
    specs_description: string;
    features: string[];
    specifications: ProductSpecificationsType | ProductSpecificationsType[];
    video?: string;
};
