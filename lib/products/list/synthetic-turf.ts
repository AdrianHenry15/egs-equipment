// Synthetic Images
import BrushProImg from "@/public/products/synthetic/brush-pro-synthetic.webp";
import SVRImg from "@/public/products/synthetic/svr-deep-cleaner-synthetic.webp";
import SSS1000Img from "@/public/products/synthetic/sss1000.webp";
import OSCA3Img from "@/public/products/synthetic/osca3.webp";
import VaribrushImg from "@/public/products/synthetic/varibrush.webp";
import TriangularBrushImg from "@/public/products/synthetic/triangularbrush.webp";
import PowaspredImg from "@/public/products/synthetic/powaspred.webp";
import TractorBrushImg from "@/public/products/synthetic/tractor-mounted-brush-combo.webp";
import TractorBrushRakeImg from "@/public/products/synthetic/tractor-mounted-rake-combinations.webp";
import TowedBrushImg from "@/public/products/synthetic/towed-brush-combo-zig.webp";
import LitaminaImg from "@/public/products/synthetic/sweeperlitamina.webp";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";
import { ProductSpecDescriptions } from "../product-spec-descriptions";
import { ProductFeatures } from "../product-features";
import { ProductSpecifications } from "../product-specifications";

export const SyntheticTurfProducts: ProductType[] = [
    {
        id: "syn-1",
        name: "Brush Pro",
        description: "Ride on brushing system",
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Synthetic Turf"],
        images: [BrushProImg],
        brand: EquipmentBrand.SYNPRO,
        manual: "https://syn-pro-api.wsio-api.com/uploads/BRUSH_PRO_Manual_9a29794398.pdf",
        details: {
            specs_description: ProductSpecDescriptions.brush_pro,
            features: ProductFeatures.brush_pro,
            specifications: ProductSpecifications.brush_pro,
            video: "",
        },
    },
    {
        id: "syn-2",
        name: "SVR 1500 Deep Cleaner",
        description: "2-in-1 deep cleaning and decompaction machine",
        mainCategory: "Synthetic Turf",
        tags: ["Deep Cleaner", "Synthetic Turf"],
        images: [SVRImg],
        brand: EquipmentBrand.SYNPRO,
        manual: "https://syn-pro-api.wsio-api.com/uploads/SVR_1500_DEEP_CLEANER_Manual_7d0baa326a.pdf",
        details: {
            specs_description: ProductSpecDescriptions.svr_1500_deep_cleaner,
            features: ProductFeatures.svr_1500_deep_cleaner,
            specifications: ProductSpecifications.svr_1500_deep_cleaner,
            video: "",
        },
    },
    {
        id: "syn-3",
        name: "SSS1000",
        description: "Debris Sweeper",
        brand: EquipmentBrand.SISIS,
        mainCategory: "Synthetic Turf",
        tags: ["Synthetic Turf", "Sweeper"],
        images: [SSS1000Img],
        manual: "https://syn-pro-api.wsio-api.com/uploads/SSS_1000_Manual_03efd4ac67.pdf",
        details: {
            specs_description: ProductSpecDescriptions.sss1000,
            features: ProductFeatures.sss1000,
            specifications: ProductSpecifications.sss1000,
            video: "",
        },
    },
    {
        id: "syn-4",
        name: "OSCA 3",
        description: "Dual purpose brushing system",
        brand: EquipmentBrand.SYNPRO,
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Synthetic Turf"],
        images: [OSCA3Img],
        manual: "https://syn-pro-api.wsio-api.com/uploads/Osca_3_Manual_812d76894b.pdf",
        details: {
            specs_description: ProductSpecDescriptions.osca_3,
            features: ProductFeatures.osca_3,
            specifications: ProductSpecifications.osca_3,
            video: "",
        },
    },
    {
        id: "syn-5",
        name: "Varibrush",
        description: "Brush with 4 rows of brushes",
        brand: EquipmentBrand.SYNPRO,
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Synthetic Turf"],
        images: [VaribrushImg],
        manual: "https://syn-pro-api.wsio-api.com/uploads/VARIBRUSH_Manual_19262a27b6.pdf",
        details: {
            specs_description: ProductSpecDescriptions.varibrush,
            features: ProductFeatures.varibrush,
            specifications: ProductSpecifications.varibrush,
            video: "",
        },
    },
    {
        id: "syn-6",
        name: "Triangular Brush",
        description: "Ideal for brushing surface infill to an even level",
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [TriangularBrushImg],
        manual: "https://synprobysisis.com/triangular-brush",
        details: {
            specs_description: ProductSpecDescriptions.triangular_brush,
            features: [],
            specifications: ProductSpecifications.triangular_brush,
            video: "",
        },
    },
    {
        id: "syn-7",
        name: "Powaspred",
        description: "Top spread that reduces infill levels",
        mainCategory: "Synthetic Turf",
        tags: ["Spreader", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [PowaspredImg],
        manual: "https://synprobysisis.com/powaspred",
        details: {
            specs_description: ProductSpecDescriptions.powaspred,
            features: ProductFeatures.powaspred,
            specifications: ProductSpecifications.powaspred,
            video: "",
        },
    },
    {
        id: "syn-8",
        name: "Tractor Mounted Brush Combinations",
        description: "Brush combo to decompact sand or rubber infill",
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [TractorBrushImg],
        details: {
            specs_description: ProductSpecDescriptions.tractor_brush_combinations,
            features: ProductFeatures.tractor_brush_combinations,
            specifications: ProductSpecifications.tractor_brush_combinations,
            video: "",
        },
    },
    {
        id: "syn-9",
        name: "Tractor Mounted Rake and Brush Combinations",
        description: "Rake and brush combo to decompact sand or rubber infill",
        mainCategory: "Synthetic Turf",
        tags: ["Brush", "Rake", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [TractorBrushRakeImg],
        details: {
            specs_description: ProductSpecDescriptions.tractor_rake_and_brush_combinations,
            features: ProductFeatures.tractor_rake_and_brush_combinations,
            specifications: ProductSpecifications.tractor_rake_and_brush_combinations,
            video: "",
        },
    },
    {
        id: "syn-10",
        name: "Towed Brush Combinations",
        description: "Brush combo for sand and rubber infill",
        mainCategory: "Synthetic Turf",
        tags: ["All In One Brush System", "Brush", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [TowedBrushImg],
        details: {
            specs_description: ProductSpecDescriptions.towed_brush_combination,
            features: ProductFeatures.towed_brush_combination,
            specifications: ProductSpecifications.towed_brush_combination,
            video: "",
        },
    },
    {
        id: "syn-11",
        name: "Litamina 1200",
        description:
            "Compact sweeper for collection of debris from sand or rubber crumb synthetics",
        mainCategory: "Synthetic Turf",
        tags: ["Sweeper", "Synthetic Turf"],
        brand: EquipmentBrand.SYNPRO,
        images: [LitaminaImg],
        details: {
            specs_description: ProductSpecDescriptions.litamina,
            features: ProductFeatures.litamina,
            specifications: ProductSpecifications.litamina,
            video: "",
        },
    },
];
