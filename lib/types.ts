import { StaticImageData } from "next/image";

// -------------------- Navigation --------------------

// String Unions for Navigation
export type NavMenuItems = "Home" | "Products" | "Parts Form" | "About" | "Finance Options";
export type ProductNavItems =
    | "All Products"
    | "Golf & Sports Turf"
    | "Synthetic Turf"
    | "All Purpose";

// Navigation Links
export type NavMenuLinks = "" | "/" | "/parts-form" | "/about" | "/finance-options";
export type ProductNavLinks =
    | "/products"
    | "/products/"
    | "/products/synthetic-turf"
    | "/products/all-purpose";

// Main Categories
export type MainCategory = "Golf & Sports Turf" | "Synthetic Turf" | "All Purpose" | "All Products";

// Sub Categories
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
// export type HowardsonsBrand = "Dennis" | "SISIS" | "Syn-Pro";
export enum EquipmentBrand {
    NONE = "",
    HOWARDSONS = "Howardsons",
    HARROD_SPORTS = "Harrod Sports",
    PITCHMARK = "Pitchmark",
    BUFFALO_TURBINE = "Buffalo Turbine",
    EASTMAN = "Eastman",
    DENNIS = "Dennis",
    SISIS = "SISIS",
    SYNPRO = "Syn-Pro",
}

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

export type EngineSpecifications = {
    engine?: string;
    engine_petrol?: string;
    tractor_power_requirement?: string;
    power_unit_requirement?: string;
};

export type Dimensions = {
    width?: string;
    altWidth?: string;
    length?: string;
    altLength?: string;
    height?: string;
    altHeight?: string;
    tire_size?: string;
};

export type BrushSpecifications = {
    brushes?: string;
    number_of_brushes?: string;
    oscillating_brush?: string;
    rear_brush?: string;
};

export type CuttingSpecifications = {
    cutting_width?: string;
    height_of_cut?: string;
    working_width?: string;
    working_depth?: string;
    cutter_performance?: string;
    cylinder?: string;
};

export type ProductSpecificationsType = {
    model?: string;
    code?: string;
    action?: string;
    depth?: string;
    power_source_output?: string;
    recommended_tractor?: string;
    dimensions?: Dimensions;
    operating_width?: string;
    inclusions?: string | string[];
    exclusions?: string;
    weight?: string;
    altWeight?: string;
    minimum_tractor_requirement?: string;
    // Grouping specifications into categories
    engine?: EngineSpecifications;
    brushes?: BrushSpecifications;
    cutting?: CuttingSpecifications;
    drive_system?: string;
    final_drive?: string;
};

export type EquipmentType = {
    specs_description: string;
    features: string[];
    specifications: ProductSpecificationsType;
    video?: string;
};
