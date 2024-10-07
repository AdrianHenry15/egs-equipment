import { ProductType } from "./types";

// Synthetic Images
import BrushProImg from "@/public/products/synthetic/brush-pro-synthetic.webp";
import SVRImg from "@/public/products/synthetic/svr-deep-cleaner-synthetic.webp";
import SSS1000Img from "@/public/products/synthetic/sss1000.webp";
import OSCA3Img from "@/public/products/synthetic/osca3.webp";
import VaribrushImg from "@/public/products/synthetic/varibrush.webp";
import TriangularBrushImg from "@/public/products/synthetic/triangularbrush.webp";
// Natural Images
import GImg from "@/public/products/natural/g660-g760-g860-dennis.webp";
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

export const SyntheticProducts: ProductType[] = [
    {
        id: "syn-1",
        name: "Brush Pro",
        description: "Add Description Here",
        category: "Synthetic",
        image: BrushProImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "syn-2",
        name: "SVR 1500 Deep Cleaner",
        description: "Add Description Here",
        category: "Synthetic",
        image: SVRImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "syn-3",
        name: "SSS1000",
        description: "Add Description Here",
        category: "Synthetic",
        image: SSS1000Img,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "syn-3",
        name: "OSCA 3",
        description: "Add Description Here",
        category: "Synthetic",
        image: OSCA3Img,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "syn-4",
        name: "Varibrush",
        description: "Add Description Here",
        category: "Synthetic",
        image: VaribrushImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "syn-5",
        name: "Triangular Brush",
        description: "Add Description Here",
        category: "Synthetic",
        image: TriangularBrushImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Syn-Pro",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
];

export const NaturalProducts: ProductType[] = [
    {
        id: "nat-1",
        name: "G660, G760, G860",
        description: "Add Description Here",
        category: "Natural",
        image: GImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Dennis",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "nat-2",
        name: "ES860",
        description: "Add Description Here",
        category: "Natural",
        image: ES860Img,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Dennis",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "nat-3",
        name: "RotoRake 600HD",
        description: "Add Description Here",
        category: "Natural",
        image: RotoRakeImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "nat-4",
        name: "Auto RotoRake MK5",
        description: "Add Description Here",
        category: "Natural",
        image: AutoRotoRakeImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "nat-5",
        name: "Veemo MK2",
        description: "Add Description Here",
        category: "Natural",
        image: VeemoImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "nat-6",
        name: "Hover Mower",
        description: "Add Description Here",
        category: "Natural",
        image: HoverMowerImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Eastman",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
];

export const AeratorProducts: ProductType[] = [
    {
        id: "aer-1",
        name: "Javelin Aer-Aid 1500",
        description: "Add Description Here",
        category: "Aerator",
        image: JavelinImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "aer-2",
        name: "Dart",
        description: "Add Description Here",
        category: "Aerator",
        image: DartImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "SISIS",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
];

export const DebrisBlowerProducts: ProductType[] = [
    {
        id: "deb-1",
        name: "Cyclone 8000",
        description: "Add Description Here",
        category: "Debris Blower",
        image: Cyclone8000Img,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Buffalo Turbine",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "deb-2",
        name: "Cyclone KB4",
        description: "Add Description Here",
        category: "Debris Blower",
        image: CycloneKB4Img,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Buffalo Turbine",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "deb-3",
        name: "Cyclone Squared",
        description: "Add Description Here",
        category: "Debris Blower",
        image: CycloneSquaredImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Buffalo Turbine",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "deb-4",
        name: "Cyclone Mega",
        description: "Add Description Here",
        category: "Debris Blower",
        image: CycloneMegaImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Buffalo Turbine",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
    {
        id: "deb-5",
        name: "Cyclone PTO",
        description: "Add Description Here",
        category: "Debris Blower",
        image: CyclonePTOImg,
        equipment_details: {
            specs_description: "Add Specs Description",
            features: [],
            brand: "Buffalo Turbine",
            specifications: {
                model: "",
                code: "",
                action: "",
                working_width: "",
                working_depth: "",
                tractor_power_requirement: "",
                inclusions: "",
            },
            video: "",
        },
    },
];
