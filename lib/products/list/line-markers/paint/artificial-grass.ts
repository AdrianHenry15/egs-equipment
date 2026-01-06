import AGPImg from "@/public/products/line-markers/paint/artificial-grass/AGP-10L-1.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";
import { LineMarkerPaintSpecifications } from "@/lib/products/line-marker-specifications/paint-specifications";

export const LineMarkerArtificialGrassPaintProducts: ProductType[] = [
    {
        id: "lmpag-1",
        name: "AGP",
        description: `
            AGP (Artificial Grass Paint) 
            is an advanced ready-to-use formulation designed for artificial grass surfaces including 3G and 4G. 
        `,
        mainCategory: "line_marker",
        tags: ["paint", "premium", "artificial_grass"],
        images: [AGPImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.agp,
            features: ProductFeatures.agp,
            specifications: {
                type: "line_marker_paint",
                data: LineMarkerPaintSpecifications.agp,
            },
            video: "",
        },
    },
];
