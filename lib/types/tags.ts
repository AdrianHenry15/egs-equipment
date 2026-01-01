import { Tag } from "./categories";

export const ALL_TAGS = [
    // MainCategory
    "Sport",
    "Synthetic Turf",
    "Natural Turf",
    "Line Marker",
    "Hand Tool",
    "Goal",
    "Debris Blower",

    // TurfTag
    "Brush",
    "Rake",
    "Spreader",
    "Implement Frame",
    "Sweeper",
    "Top Dresser",
    "Deep Cleaner",
    "All In One Brush System",
    "Scarifier",
    "Aerator",

    // SportTag
    "American Football",
    "Golf",
    "Soccer",
    "Baseball",
    "Softball",
    "Lacrosse",

    // SportsEquipmentTag
    "Post",
    "Net",
    "Flag",
    "Trolley",
    "Official Shelter",
    "Technical Shelter",
    "Anchor",
    "Accessory",
    "Spare",
    "Mannequin",
    "Cone",
    "Training Goal",
    "Pole",
    "Hurdle",
    "Ladder",
    "Training",

    // SportsLocationTag
    "Indoor",

    // SportsMaterialTag
    "Aluminum",
    "Netting",
    "PVC",
    "Rubber",
    "Steel",

    // SportsAgeTag
    "Over 18",
    "U15 to U18",
    "U13 to U14",
    "U11 to U12",
    "U7 to U10",

    // SoccerGoalCategoryTag
    "Kids",
    "Metal",
    "Plastic",
    "Mini",

    // SoccerGoalNetTag
    "Junior",

    // GoalSubtypeTag
    "Freestanding",
    "Folding",
    "Hinged",
    "Portable",
    "Self-Weighted",
    "Portagoal",
    "Heavyweight",
    "Swivel",
    "Socketed",

    // LineMarkerTag
    "Paint",
    "Machine",
    "Accessories",

    // LineMarkerPaint
    "Ready-To-Use",
    "Concentrate",
    "Artificial Grass",

    // LineMarkerPaintQuality
    "Premium",
    "Professional",
    "Standard",
    "Low",
    "Bad",

    // LineMarkerMachines
    "Spray Machines",
    "Wheel-To-Wheel",

    // LineMarkerAccessories
    "Field Accessories",
    "Machine Accessories",

    // MowerSubtypeTag
    "Reel Mower",
    "Rotary Mower",
    "Hover Mower",
] as const satisfies readonly Tag[];

export function isTag(value: string): value is Tag {
    return (ALL_TAGS as readonly string[]).includes(value);
}
