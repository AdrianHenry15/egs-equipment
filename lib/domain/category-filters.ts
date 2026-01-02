import { MainCategory, Tag } from "@/lib/types/categories";

export const CATEGORY_FILTER_TAGS: Record<MainCategory, { label: string; tag: Tag }[]> = {
    debris_blower: [],
    goal: [
        { label: "Freestanding", tag: "freestanding" },
        { label: "Folding", tag: "folding" },
        { label: "Socketed", tag: "socketed" },
    ],
    line_marker: [
        { label: "Paint", tag: "paint" },
        { label: "Machines", tag: "machine" },
        { label: "Accessories", tag: "accessory" },
    ],

    natural_turf: [
        { label: "Aerators", tag: "aerator" },
        { label: "Scarifiers", tag: "scarifier" },
        { label: "Top Dressers", tag: "top_dresser" },
    ],

    synthetic_turf: [
        { label: "Brushes", tag: "brush" },
        { label: "Sweepers", tag: "sweeper" },
    ],
};
