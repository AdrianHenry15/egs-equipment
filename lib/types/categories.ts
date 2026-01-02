// Main categories (domain truth)
export type MainCategory =
    | "synthetic_turf"
    | "natural_turf"
    | "line_marker"
    | "goal"
    | "debris_blower";

export type TurfTag =
    | "brush"
    | "rake"
    | "spreader"
    | "goal"
    | "implement_frame"
    | "sweeper"
    | "top_dresser"
    | "deep_cleaner"
    | "all_in_one_brush_system"
    | "scarifier"
    | "aerator";

// SPORTS
export type SportTag =
    | "american_football"
    | "golf"
    | "soccer"
    | "baseball"
    | "softball"
    | "lacrosse";

export type SportsEquipmentTag =
    | "goal"
    | "post"
    | "net"
    | "flag"
    | "trolley"
    | "official_shelter"
    | "technical_shelter"
    | "anchor"
    | "accessory"
    | "spare"
    | "mannequin"
    | "cone"
    | "training_goal"
    | "pole"
    | "hurdle"
    | "ladder"
    | "training";

export type SportsLocationTag = "synthetic_turf" | "natural_turf" | "indoor";

export type SportsMaterialTag = "aluminum" | "netting" | "pvc" | "rubber" | "steel";

export type SportsAgeTag = "over_18" | "u15_to_u18" | "u13_to_u14" | "u11_to_u12" | "u7_to_u10";

export type SoccerGoalCategoryTag = "kids" | "metal" | "plastic" | "mini";
export type SoccerGoalNetTag = "junior" | "indoor";
export type GoalSubtypeTag =
    | "freestanding"
    | "folding"
    | "hinged"
    | "portable"
    | "self_weighted"
    | "portagoal"
    | "heavyweight"
    | "swivel"
    | "socketed";

// Line Markers
export type LineMarkerTag = "paint" | "machine" | "accessory";
export type LineMarkerPaintType = "ready_to_use" | "concentrate" | "artificial_grass";
export type LineMarkerPaintQuality = "premium" | "professional" | "standard" | "low";
export type LineMarkerMachineType = "spray_machine" | "wheel_to_wheel";
export type LineMarkerAccessoryType = "field_accessory" | "machine_accessory" | "spare";

export type MowerSubtypeTag = "reel_mower" | "rotary_mower" | "hover_mower";

export type Tag =
    | TurfTag
    | SportTag
    | SportsEquipmentTag
    | SportsLocationTag
    | SportsMaterialTag
    | SportsAgeTag
    | SoccerGoalCategoryTag
    | SoccerGoalNetTag
    | LineMarkerTag
    | LineMarkerPaintType
    | LineMarkerPaintQuality
    | LineMarkerMachineType
    | LineMarkerAccessoryType
    | GoalSubtypeTag
    | MowerSubtypeTag;
