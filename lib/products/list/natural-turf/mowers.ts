import GSeriesImg from "@/public/products/natural/g660-g760-g860-dennis.webp";
import ES860Img from "@/public/products/natural/es-860-dennis.webp";
import HoverMowerImg from "@/public/products/natural/hover-mower.webp";
import { ProductSpecDescriptions } from "../../product-spec-descriptions";
import { ProductFeatures } from "../../product-features";
import { ProductSpecifications } from "../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const MowerProducts: ProductType[] = [
    {
        id: "mower-1",
        name: "G660, G760, G860",
        description: "Interchangeable Cassette System Mowers",
        mainCategory: "natural_turf",
        tags: ["reel_mower", "rotary_mower", "natural_turf"],
        images: [GSeriesImg],
        brand: EquipmentBrand.DENNIS,
        manual: "https://dennis-api.wsio-api.com/uploads/manuals_G_SERIES_CASSETTE_MOWER_d704cb9b31.pdf",
        details: {
            specs_description: ProductSpecDescriptions.gseries,
            features: ProductFeatures.gseries,
            specifications: {
                type: "standard",
                data: ProductSpecifications.gseries,
            },
            video: "",
        },
    },
    {
        id: "mower-2",
        name: "ES860",
        description: "Battery powered mower and Maintenance system",
        mainCategory: "natural_turf",
        tags: ["reel_mower", "rotary_mower", "natural_turf"],
        images: [ES860Img],
        brand: EquipmentBrand.DENNIS,
        manual: "https://dennis-api.wsio-api.com/uploads/manuals_ES_860_ES_760_5a49c756a8.pdf",
        details: {
            specs_description: ProductSpecDescriptions.es860,
            features: ProductFeatures.es860,
            specifications: {
                type: "standard",
                data: ProductSpecifications.es860,
            },
            video: "",
        },
    },
    {
        id: "mower-3",
        name: "Hover Mower",
        description: "Hover light mower",
        mainCategory: "natural_turf",
        tags: ["natural_turf"],
        images: [HoverMowerImg],
        brand: EquipmentBrand.EASTMAN,
        manual: "https://thehovermower.com/pdf/HM16H-4-manual.pdf",
        details: {
            specs_description: ProductSpecDescriptions.hover_mower,
            features: [],
            specifications: {
                type: "standard",
                data: ProductSpecifications.hover_mower,
            },
            video: "",
        },
    },
];
