// Main categories (domain truth)
export type MainCategory =
    | "Sport"
    | "Synthetic Turf"
    | "Natural Turf"
    | "Line Marker"
    | "Hand Tool"
    | "Goal"
    | "Debris Blower";

export type TurfTag =
    | "Brush"
    | "Rake"
    | "Spreader"
    | "Goal"
    | "Implement Frame"
    | "Sweeper"
    | "Top Dresser"
    | "Deep Cleaner"
    | "All In One Brush System"
    | "Scarifier"
    | "Aerator";
// SPORTS
export type SportTag =
    | "American Football"
    | "Golf"
    | "Soccer"
    | "Baseball"
    | "Softball"
    | "Lacrosse";

export type SportsEquipmentTag =
    | "Goal"
    | "Post"
    | "Net"
    | "Flag"
    | "Trolley"
    | "Official Shelter"
    | "Technical Shelter"
    | "Anchor"
    | "Accessory"
    | "Spare"
    | "Mannequin"
    | "Cone"
    | "Training Goal"
    | "Pole"
    | "Hurdle"
    | "Ladder"
    | "Training";

export type SportsLocationTag = "Synthetic Turf" | "Natural Turf" | "Indoor";
export type SportsMaterialTag = "Aluminum" | "Netting" | "PVC" | "Rubber" | "Steel";
export type SportsAgeTag = "Over 18" | "U15 to U18" | "U13 to U14" | "U11 to U12" | "U7 to U10";

export type SoccerGoalCategoryTag = "Kids" | "Metal" | "Plastic" | "Mini";
export type SoccerGoalNetTag = "Junior" | "Indoor";
export type GoalSubtypeTag =
    | "Freestanding"
    | "Folding"
    | "Hinged"
    | "Portable"
    | "Self-Weighted"
    | "Socketed";

// Line Markers
export type LineMarkerTag = "Paint" | "Machine" | "Accessories";
export type LineMarkerPaint = "Ready To Use" | "Concentrate" | "Artificial Grass";
export type LineMarkerMachines = "Spray Machines" | "Wheel-To-Wheel";
export type LineMarkerAccessories = "Field Accessories" | "Machine Accessories" | "Spare";

export type MowerSubtypeTag = "Reel Mower" | "Rotary Mower" | "Hover Mower";

export type Tag =
    | MainCategory
    | SportTag
    | SportsEquipmentTag
    | SportsLocationTag
    | SportsMaterialTag
    | SportsAgeTag
    | SoccerGoalCategoryTag
    | SoccerGoalNetTag
    | LineMarkerTag
    | GoalSubtypeTag
    | MowerSubtypeTag
    | TurfTag;
