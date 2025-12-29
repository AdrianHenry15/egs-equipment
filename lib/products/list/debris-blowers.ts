import Cyclone8000Img from "@/public/products/debris-blowers/cyclone-8000.webp";
import CycloneKB4Img from "@/public/products/debris-blowers/cyclone-kb4.webp";
import CycloneSquaredImg from "@/public/products/debris-blowers/cyclone-squared.webp";
import CycloneMegaImg from "@/public/products/debris-blowers/cyclone-mega.webp";
import CyclonePTOImg from "@/public/products/debris-blowers/cyclone-pto.webp";

import { ProductSpecDescriptions } from "../product-spec-descriptions";
import { ProductFeatures } from "../product-features";
import { ProductSpecifications } from "../product-specifications";
import { EquipmentBrand } from "@/lib/types/brands";
import { ProductType } from "@/lib/types/product";

export const DebrisBlowerProducts: ProductType[] = [
    {
        id: "db-1",
        name: "Cyclone 8000",
        description: "Lightweight compact debris blower",
        mainCategory: "Debris Blower",
        tags: ["Natural Turf", "Synthetic Turf", "Debris Blower"],
        brand: EquipmentBrand.BUFFALO_TURBINE,
        images: [Cyclone8000Img],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: ProductSpecifications.cyclone_8000,
            video: "",
        },
    },
    {
        id: "db-2",
        name: "Cyclone KB4",
        description: "Turbine style debris blower",
        mainCategory: "Debris Blower",
        tags: ["Natural Turf", "Synthetic Turf", "Debris Blower"],
        brand: EquipmentBrand.BUFFALO_TURBINE,
        images: [CycloneKB4Img],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_kb4,
            features: ProductFeatures.cyclone_kb4,
            specifications: ProductSpecifications.cyclone_kb4,
            video: "",
        },
    },
    {
        id: "db-3",
        name: "Cyclone Squared",
        description: "Lightweight compact debris blower",
        mainCategory: "Debris Blower",
        tags: ["Natural Turf", "Synthetic Turf", "Debris Blower"],
        brand: EquipmentBrand.BUFFALO_TURBINE,
        images: [CycloneSquaredImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_squared,
            features: ProductFeatures.cyclone_squared,
            specifications: ProductSpecifications.cyclone_squared,
            video: "",
        },
    },
    {
        id: "db-4",
        name: "Cyclone Mega",
        description: "Lightweight compact debris blower",
        mainCategory: "Debris Blower",
        tags: ["Natural Turf", "Synthetic Turf", "Debris Blower"],
        brand: EquipmentBrand.BUFFALO_TURBINE,
        images: [CycloneMegaImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_mega,
            features: ProductFeatures.cyclone_mega,
            specifications: ProductSpecifications.cyclone_mega,
            video: "",
        },
    },
    {
        id: "db-5",
        name: "Cyclone PTO",
        description: "Lightweight compact debris blower",
        mainCategory: "Debris Blower",
        tags: ["Natural Turf", "Synthetic Turf", "Debris Blower"],
        brand: EquipmentBrand.BUFFALO_TURBINE,
        images: [CyclonePTOImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_pto,
            features: ProductFeatures.cyclone_pto,
            specifications: ProductSpecifications.cyclone_pto,
            video: "",
        },
    },
];
