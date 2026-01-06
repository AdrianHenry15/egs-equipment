import AutoRotoRakeImg from "@/public/products/natural/auto-roto-rake-mk5.webp";
import VeemoImg from "@/public/products/natural/veemo-mk2.webp";
import RotoRakeImg from "@/public/products/natural/roto-rake-600hd.webp";
import { ProductSpecDescriptions } from "../../product-spec-descriptions";
import { ProductFeatures } from "../../product-features";
import { ProductSpecifications } from "../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const ScarifierProducts: ProductType[] = [
    {
        id: "scar-1",
        name: "Rotorake 600HD",
        description: "Heavy duty scarifier",
        mainCategory: "natural_turf",
        tags: ["scarifier", "natural_turf"],
        images: [RotoRakeImg],
        brand: EquipmentBrand.SYNPRO,
        manual: "https://sisis-api.wsio-api.com/uploads/manuals_Rotorake_600_HD_9b10c22d0a.pdf",
        details: {
            specs_description: ProductSpecDescriptions.rotorake_600_hd,
            features: ProductFeatures.rotorake_600_hd,
            specifications: {
                type: "standard",
                data: ProductSpecifications.rotorake_600_hd,
            },
            video: "",
        },
    },
    {
        id: "gst-4",
        name: "Auto Rotorake MK5",
        description:
            "Self-propelled heavy duty scarifier and de-thatcher for removal and control of thatch on fine and other quality turf",
        mainCategory: "natural_turf",
        tags: ["scarifier", "natural_turf"],
        images: [AutoRotoRakeImg],
        brand: EquipmentBrand.SISIS,
        manual: "https://sisis-api.wsio-api.com/uploads/manuals_AUTO_ROTORAKE_Mk_5_526d9a474a.pdf",
        details: {
            specs_description: ProductSpecDescriptions.auto_rotorake_mk5,
            features: ProductFeatures.auto_rotorake_mk5,
            specifications: {
                type: "standard",
                data: ProductSpecifications.auto_rotorake_mk5,
            },
            video: "",
        },
    },
    {
        id: "gst-5",
        name: "Veemo MK2",
        description: "Triple mounted hydraulic driven scarifier",
        mainCategory: "natural_turf",
        tags: ["scarifier", "natural_turf"],
        images: [VeemoImg],
        brand: EquipmentBrand.SISIS,
        manual: "https://sisis-api.wsio-api.com/uploads/manuals_VEEMO_MK_2_cf14cbf6fa.pdf",
        details: {
            specs_description: ProductSpecDescriptions.veemo_mk2,
            features: ProductFeatures.veemo_mk2,
            specifications: {
                type: "standard",
                data: ProductSpecifications.veemo_mk2,
            },
            video: "",
        },
    },
];
