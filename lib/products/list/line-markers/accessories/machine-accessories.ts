import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerFieldAccessoryProducts: ProductType[] = [
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-1",
        name: "6L Water Tank",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-2",
        name: "25L Paint Tank",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-3",
        name: "Spray Marker Service Kit",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
];
