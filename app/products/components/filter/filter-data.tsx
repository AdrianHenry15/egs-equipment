import { MainCategory, Tag } from "@/lib/types/categories";

export const Filters = {
    mainCategory: [
        "Sport",
        "Synthetic Turf",
        "Natural Turf",
        "Line Marker",
        "Brand",
        "Hand Tool",
        "Goal",
        "Debris Blower",
    ] as MainCategory[],

    sportTags: ["American Football", "Golf", "Soccer", "Baseball", "Softball", "Lacrosse"] as Tag[],

    turfTags: [
        "Brush",
        "Rake",
        "Spreader",
        "Goal",
        "Implement Frame",
        "Sweeper",
        "Top Dresser",
        "Deep Cleaner",
        "All In One Brush System",
        "Scarifier",
        "Aerator",
    ] as Tag[],

    sportsEquipment: [
        "Goal",
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
    ] as Tag[],

    surfaceType: ["Synthetic Turf", "Natural Turf", "Indoor"] as Tag[],

    materialType: ["Aluminum", "Netting", "PVC", "Rubber", "Steel"] as Tag[],

    ageGroup: ["Over 18", "U15 to U18", "U13 to U14", "U11 to U12", "U7 to U10"] as Tag[],

    soccerGoalCategory: ["Kids", "Metal", "Plastic", "Mini"] as Tag[],

    soccerNetCategory: ["Junior", "Indoor"] as Tag[],

    goalSubtype: [
        "Freestanding",
        "Folding",
        "Hinged",
        "Portable",
        "Self-Weighted",
        "Socketed",
    ] as Tag[],

    mowerSubtype: ["Reel Mower", "Rotary Mower", "Hover Mower"] as Tag[],

    lineMarkerTags: ["Paint", "Machine", "Accessories"] as Tag[],
};
