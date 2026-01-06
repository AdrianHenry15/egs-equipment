import { Tag } from "./categories";

export const ALL_TAGS = [
    // MainCategory
    "synthetic_turf",
    "natural_turf",
    "goal",
    // TurfTag
    "brush",
    "rake",
    "spreader",
    "implement_frame",
    "sweeper",
    "top_dresser",
    "deep_cleaner",
    "all_in_one_brush_system",
    "scarifier",
    "aerator",

    // SportTag
    "american_football",
    "golf",
    "soccer",
    "baseball",
    "softball",
    "lacrosse",

    // SportsEquipmentTag
    "post",
    "net",
    "flag",
    "trolley",
    "official_shelter",
    "technical_shelter",
    "anchor",
    "accessory",
    "spare",
    "mannequin",
    "cone",
    "training_goal",
    "pole",
    "hurdle",
    "ladder",
    "training",

    // SportsLocationTag
    "indoor",

    // SportsMaterialTag
    "aluminum",
    "netting",
    "pvc",
    "rubber",
    "steel",

    // SportsAgeTag
    "over_18",
    "u15_to_u18",
    "u13_to_u14",
    "u11_to_u12",
    "u7_to_u10",

    // SoccerGoalCategoryTag
    "kids",
    "metal",
    "plastic",
    "mini",

    // SoccerGoalNetTag
    "junior",

    // GoalSubtypeTag
    "freestanding",
    "folding",
    "hinged",
    "portable",
    "self_weighted",
    "portagoal",
    "heavyweight",
    "swivel",
    "socketed",

    // LineMarkerTag
    "paint",
    "machine",
    "accessory",

    // LineMarkerPaint
    "ready_to_use",
    "concentrate",
    "artificial_grass",

    // LineMarkerPaintQuality
    "premium",
    "professional",
    "standard",
    "low",

    // LineMarkerMachines
    "spray_machine",
    "wheel_to_wheel",

    // LineMarkerAccessories
    "field_accessory",
    "machine_accessory",

    // MowerSubtypeTag
    "reel_mower",
    "rotary_mower",
    "hover_mower",
] as const satisfies readonly Tag[];

export function isTag(value: string): value is Tag {
    return (ALL_TAGS as readonly string[]).includes(value);
}
