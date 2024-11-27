import { ProductType } from "../types";

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
// Natural Images
import GSeriesImg from "@/public/products/natural/g660-g760-g860-dennis.webp";
import ES860Img from "@/public/products/natural/es-860-dennis.webp";
import AutoRotoRakeImg from "@/public/products/natural/auto-roto-rake-mk5.webp";
import HoverMowerImg from "@/public/products/natural/hover-mower.webp";
import VeemoImg from "@/public/products/natural/veemo-mk2.webp";
import RotoRakeImg from "@/public/products/natural/roto-rake-600hd.webp";
// Aerator Images
import DartImg from "@/public/products/aerators/dart-sisis-aerator.jpeg";
import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
// Debris Blower Images
import Cyclone8000Img from "@/public/products/debris-blowers/cyclone-8000.webp";
import CycloneKB4Img from "@/public/products/debris-blowers/cyclone-kb4.webp";
import CycloneSquaredImg from "@/public/products/debris-blowers/cyclone-squared.webp";
import CycloneMegaImg from "@/public/products/debris-blowers/cyclone-mega.webp";
import CyclonePTOImg from "@/public/products/debris-blowers/cyclone-pto.webp";

import { ProductSpecDescriptions } from "./product-spec-descriptions";
import { ProductFeatures } from "./product-features";
import { ProductSpecifications } from "./product-specifications";

export const GolfSportsTurfProducts: ProductType[] = [
    {
        id: "gst-1",
        name: "G660, G760, G860",
        description: "Interchangeable Cassette System Mowers",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Mowers",
        image: GSeriesImg,
        brand: "Dennis",
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
        brand: "Dennis",
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
        brand: "Syn-Pro",
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
        brand: "SISIS",
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
        brand: "SISIS",
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
        brand: "Eastman",
        manuel: "https://thehovermower.com/pdf/HM16H-4-manual.pdf",
        equipment_details: {
            specs_description: ProductSpecDescriptions.hover_mower,
            features: [],
            specifications: ProductSpecifications.hover_mower,
            video: "",
        },
    },
];

export const SyntheticTurfProducts: ProductType[] = [
    {
        id: "syn-1",
        name: "Brush Pro",
        description: "Ride on brushing system",
        mainCategory: "Synthetic Turf",
        subCategory: "Brushes",
        image: BrushProImg,
        brand: "Syn-Pro",
        manuel: "https://syn-pro-api.wsio-api.com/uploads/BRUSH_PRO_Manual_9a29794398.pdf",
        equipment_details: {
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
        mainCategory: "Golf & Sports Turf",
        subCategory: "Deep Cleaner",
        image: SVRImg,
        brand: "Syn-Pro",
        manuel: "https://syn-pro-api.wsio-api.com/uploads/SVR_1500_DEEP_CLEANER_Manual_7d0baa326a.pdf",
        equipment_details: {
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
        brand: "SISIS",
        mainCategory: "Synthetic Turf",
        subCategory: "Sweepers",
        image: SSS1000Img,
        manuel: "https://syn-pro-api.wsio-api.com/uploads/SSS_1000_Manual_03efd4ac67.pdf",
        equipment_details: {
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
        brand: "Syn-Pro",
        mainCategory: "Synthetic Turf",
        subCategory: "All In One Brush System",
        image: OSCA3Img,
        manuel: "https://syn-pro-api.wsio-api.com/uploads/Osca_3_Manual_812d76894b.pdf",
        equipment_details: {
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
        brand: "Syn-Pro",
        mainCategory: "Synthetic Turf",
        subCategory: "Brushes",
        image: VaribrushImg,
        manuel: "https://syn-pro-api.wsio-api.com/uploads/VARIBRUSH_Manual_19262a27b6.pdf",
        equipment_details: {
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
        mainCategory: "Golf & Sports Turf",
        subCategory: "Brushes",
        brand: "Syn-Pro",
        image: TriangularBrushImg,
        manuel: "https://synprobysisis.com/triangular-brush",
        equipment_details: {
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
        subCategory: "Top Dressers/Spreaders",
        brand: "Syn-Pro",
        image: PowaspredImg,
        manuel: "https://synprobysisis.com/powaspred",
        equipment_details: {
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
        subCategory: "All In One Brush System",
        brand: "Syn-Pro",
        image: TractorBrushImg,
        equipment_details: {
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
        subCategory: "All In One Brush System",
        brand: "Syn-Pro",
        image: TractorBrushRakeImg,
        equipment_details: {
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
        subCategory: "All In One Brush System",
        brand: "Syn-Pro",
        image: TowedBrushImg,
        equipment_details: {
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
        subCategory: "Sweepers",
        brand: "Syn-Pro",
        image: LitaminaImg,
        equipment_details: {
            specs_description: ProductSpecDescriptions.litamina,
            features: ProductFeatures.litamina,
            specifications: ProductSpecifications.litamina,
            video: "",
        },
    },
];

// Aerators
export const AeratorProducts: ProductType[] = [
    {
        id: "aer-1",
        name: "Javelin Aer-Aid 1500",
        description:
            "Tractor mounted vertical action aerator for use on both fine and outfield turf.",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Aerators",
        image: JavelinImg,
        brand: "SISIS",
        equipment_details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: ProductSpecifications.javelin,
            video: "",
        },
    },
    {
        id: "aer-2",
        name: "Dart",
        description:
            "Independent powered vertical action aerator ideal for sports field maintenance.",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Aerators",
        image: DartImg,
        brand: "SISIS",
        equipment_details: {
            specs_description: ProductSpecDescriptions.dart,
            features: ProductFeatures.dart,
            specifications: ProductSpecifications.dart,
            video: "",
        },
    },
];

// Debris Blowers
export const DebrisBlowerProducts: ProductType[] = [
    {
        id: "dbp-1",
        name: "Cyclone 8000",
        description: "Lightweight compact debris blower",
        mainCategory: "All Purpose",
        subCategory: "Debris Blower",
        brand: "Buffalo Turbine",
        image: Cyclone8000Img,
        equipment_details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: ProductSpecifications.cyclone_8000,
            video: "",
        },
    },
    {
        id: "dbp-2",
        name: "Cyclone KB4",
        description: "Turbine style debris blower",
        mainCategory: "All Purpose",
        subCategory: "Debris Blower",
        brand: "Buffalo Turbine",
        image: CycloneKB4Img,
        equipment_details: {
            specs_description: ProductSpecDescriptions.cyclone_kb4,
            features: ProductFeatures.cyclone_kb4,
            specifications: ProductSpecifications.cyclone_kb4,
            video: "",
        },
    },
    {
        id: "dbp-3",
        name: "Cyclone Squared",
        description: "Lightweight compact debris blower",
        mainCategory: "All Purpose",
        subCategory: "Debris Blower",
        brand: "Buffalo Turbine",
        image: CycloneSquaredImg,
        equipment_details: {
            specs_description: ProductSpecDescriptions.cyclone_squared,
            features: ProductFeatures.cyclone_squared,
            specifications: ProductSpecifications.cyclone_squared,
            video: "",
        },
    },
    {
        id: "dbp-4",
        name: "Cyclone Mega",
        description: "Lightweight compact debris blower",
        mainCategory: "All Purpose",
        subCategory: "Debris Blower",
        brand: "Buffalo Turbine",
        image: CycloneMegaImg,
        equipment_details: {
            specs_description: ProductSpecDescriptions.cyclone_mega,
            features: ProductFeatures.cyclone_mega,
            specifications: ProductSpecifications.cyclone_mega,
            video: "",
        },
    },
    {
        id: "dbp-5",
        name: "Cyclone PTO",
        description: "Lightweight compact debris blower",
        mainCategory: "All Purpose",
        subCategory: "Debris Blower",
        brand: "Buffalo Turbine",
        image: CyclonePTOImg,
        equipment_details: {
            specs_description: ProductSpecDescriptions.cyclone_pto,
            features: ProductFeatures.cyclone_pto,
            specifications: ProductSpecifications.cyclone_pto,
            video: "",
        },
    },
];
