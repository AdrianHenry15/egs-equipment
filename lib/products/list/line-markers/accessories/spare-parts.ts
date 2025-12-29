import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerSparePartsProducts: ProductType[] = [
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmsp-1",
        name: "Contact Local Distributor",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [JavelinImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
];
