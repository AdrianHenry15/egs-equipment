import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerConcentratePaintProducts: ProductType[] = [
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmpc-1",
        name: "Extreme",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Concentrate"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmpc-2",
        name: "Lumen",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Professional", "Concentrate"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmpc-3",
        name: "Clubline",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Standard", "Concentrate"],
        image: JavelinImg,
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmpc-4",
        name: "Line-Out",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Concentrate"],
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
