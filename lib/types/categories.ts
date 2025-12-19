// Main categories (domain truth)
export enum MainCategory {
    GOLF_SPORTS_TURF = "Golf & Sports Turf",
    SYNTHETIC_TURF = "Synthetic Turf",
    ALL_PURPOSE = "All Purpose",
}

// Subcategories by domain
export enum GolfSportsTurfItem {
    AERATORS = "Aerators",
    VERTICUTTERS = "Verticutters",
    SCARIFIER = "Scarifier",
    SWEEPERS = "Sweepers",
    ROLLERS_BRUSH = "Rollers/Brush",
    TOP_DRESSERS = "Top Dressers/Spreaders",
    SEEDERS = "Seeders",
    LINE_MARKERS = "Line Markers",
    IMPLEMENT_FRAMES = "Implement Frames",
    HAND_TOOLS = "Hand Tools",
    GOALS = "Goals",
    DEBRIS_BLOWER = "Debris Blower",
    MOWERS = "Mowers",
}

export enum MowersItem {
    REEL = "Reel Mowers",
    ROTARY = "Rotary Mowers",
    HOVER = "Hover Mowers",
}

export enum SyntheticTurfItem {
    BRUSHES = "Brushes",
    GOALS = "Goals",
    IMPLEMENT_FRAMES = "Implement Frames",
    SWEEPERS = "Sweepers",
    TOP_DRESSER = "Top Dresser",
    DEEP_CLEANER = "Deep Cleaner",
    ALL_IN_ONE = "All In One Brush System",
    HAND_TOOLS = "Hand Tools",
}

// Union only where needed
export type SubCategory = GolfSportsTurfItem | MowersItem | SyntheticTurfItem;
