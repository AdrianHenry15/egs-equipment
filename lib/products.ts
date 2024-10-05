import { ProductType } from "./types";

// Synthetic Images
import BrushProImg from "@/public/products/synthetic/brush-pro-synthetic.webp";
// Natural Images
// Aerator Images
// Debris Blower Images

export const Products: ProductType[] = [
    {
        id: "epi-1",
        name: "Brush Pro",
        description: "Add Description Here",
        category: "Synthetic",
        image: BrushProImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "epi-2",
        name: "Brush Pro",
        description: "Add Description Here",
        category: "Synthetic",
        image: BrushProImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
];
