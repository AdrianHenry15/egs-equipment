import { MainCategory, EquipmentBrand, GolfSportsTurfItems, SyntheticTurfItems } from "@/lib/types";

export const Filters = {
    MainCategory: ["Golf & Sports Turf", "Synthetic Turf", "All Purpose"] as MainCategory[],

    GolfSportsTurfItems: [
        "Aerators",
        "Verticutters",
        "Sweepers",
        "Rollers/Brush",
        "Top Dressers/Spreaders",
        "Seeders",
        "Line Markers",
        "Implement Frames",
        "Hand Tools",
        "Goals",
        "Mowers",
    ] as GolfSportsTurfItems[],

    SyntheticTurfItems: [
        "Brushes",
        "Goals",
        "Implement Frames",
        "Sweepers",
        "Top Dresser",
        "Deep Cleaner",
        "All In One Brush System",
        "Hand Tools",
    ] as SyntheticTurfItems[],

    EquipmentBrand: [
        EquipmentBrand.DENNIS,
        EquipmentBrand.SISIS,
        EquipmentBrand.SYNPRO,
        EquipmentBrand.HARROD_SPORTS,
        EquipmentBrand.BUFFALO_TURBINE,
        EquipmentBrand.PITCHMARK,
    ] as EquipmentBrand[],
};
