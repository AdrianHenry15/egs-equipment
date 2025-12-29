import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerArtificialGrassPaintProducts: ProductType[] = [
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmpag-1",
        name: "AGP",
        description:
            "A handy pocket-sized line marking handbook that contains a range of pitch dimensions, saving you time when marking pitches",
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Artificial Grass"],
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
