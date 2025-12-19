import { EquipmentBrand, ProductType } from "../../types";
import GSeriesImg from "@/public/products/natural/g660-g760-g860-dennis.webp";
import ES860Img from "@/public/products/natural/es-860-dennis.webp";
import AutoRotoRakeImg from "@/public/products/natural/auto-roto-rake-mk5.webp";
import HoverMowerImg from "@/public/products/natural/hover-mower.webp";
import VeemoImg from "@/public/products/natural/veemo-mk2.webp";
import RotoRakeImg from "@/public/products/natural/roto-rake-600hd.webp";
import { ProductSpecDescriptions } from "../product-spec-descriptions";
import { ProductFeatures } from "../product-features";
import { ProductSpecifications } from "../product-specifications";

export const GolfSportsTurfProducts: ProductType[] = [
    {
        id: "gst-1",
        name: "G660, G760, G860",
        description: "Interchangeable Cassette System Mowers",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Mowers",
        image: GSeriesImg,
        brand: EquipmentBrand.DENNIS,
        manuel: "https://dennis-api.wsio-api.com/uploads/manuals_G_SERIES_CASSETTE_MOWER_d704cb9b31.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.gseries,
            features: ProductFeatures.gseries,
            specifications: ProductSpecifications.gseries,
            video: "",
        },
    },
    {
        id: "gst-2",
        name: "ES860",
        description: "Battery powered mower and Maintenance system",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Mowers",
        image: ES860Img,
        brand: EquipmentBrand.DENNIS,
        manuel: "https://dennis-api.wsio-api.com/uploads/manuals_ES_860_ES_760_5a49c756a8.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.es860,
            features: ProductFeatures.es860,
            specifications: ProductSpecifications.es860,
            video: "",
        },
    },
    {
        id: "gst-3",
        name: "Rotorake 600HD",
        description: "Heavy duty scarifier",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Scarifier",
        image: RotoRakeImg,
        brand: EquipmentBrand.SYNPRO,
        manuel: "https://sisis-api.wsio-api.com/uploads/manuals_Rotorake_600_HD_9b10c22d0a.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.rotorake_600_hd,
            features: ProductFeatures.rotorake_600_hd,
            specifications: ProductSpecifications.rotorake_600_hd,
            video: "",
        },
    },
    {
        id: "gst-4",
        name: "Auto Rotorake MK5",
        description:
            "Self-propelled heavy duty scarifier and de-thatcher for removal and control of thatch on fine and other quality turf",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Scarifier",
        image: AutoRotoRakeImg,
        brand: EquipmentBrand.SISIS,
        manuel: "https://sisis-api.wsio-api.com/uploads/manuals_AUTO_ROTORAKE_Mk_5_526d9a474a.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.auto_rotorake_mk5,
            features: ProductFeatures.auto_rotorake_mk5,
            specifications: ProductSpecifications.auto_rotorake_mk5,
            video: "",
        },
    },
    {
        id: "gst-5",
        name: "Veemo MK2",
        description: "Triple mounted hydraulic driven scarifier",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Scarifier",
        image: VeemoImg,
        brand: EquipmentBrand.SISIS,
        manuel: "https://sisis-api.wsio-api.com/uploads/manuals_VEEMO_MK_2_cf14cbf6fa.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.veemo_mk2,
            features: ProductFeatures.veemo_mk2,
            specifications: ProductSpecifications.veemo_mk2,
            video: "",
        },
    },
    {
        id: "gst-6",
        name: "Hover Mower",
        description: "Hover light mower",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Mowers",
        image: HoverMowerImg,
        brand: EquipmentBrand.EASTMAN,
        manuel: "https://thehovermower.com/pdf/HM16H-4-manual.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.hover_mower,
            features: [],
            specifications: ProductSpecifications.hover_mower,
            video: "",
        },
    },
];
