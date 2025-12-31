import EcolineImg from "@/public/products/line-markers/paint/ready-to-use/Ecoline-10L-1.webp";
import DirectImg from "@/public/products/line-markers/paint/ready-to-use/Direct-10L-1.webp";
import EdgeboxImg from "@/public/products/line-markers/paint/ready-to-use/Edge-Box-10L-Brown-Main-View.webp";
import TransferImg from "@/public/products/line-markers/paint/ready-to-use/Transfer-10L-1.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerReadyToUsePaintProducts: ProductType[] = [
    {
        id: "lmprtu-1",
        name: "Ecoline+",
        description: `
            Ecoline+ line marking paint is an advanced, 
            low-volume, ready-to-use solution designed for maximum efficiency and visibility.
        `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Ready-To-Use"],
        images: [EcolineImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.ecoline,
            features: ProductFeatures.ecoline,
            specifications: ProductSpecifications.ecoline,
            video: "",
        },
    },
    {
        id: "lmprtu-2",
        name: "Direct",
        description: `Direct line marking paint is a popular low-volume, 
            ready-to-use solution formulated with advanced ingredients for bright, 
            long-lasting field markings.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Professional", "Ready-To-Use"],
        images: [DirectImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.direct,
            features: ProductFeatures.direct,
            specifications: ProductSpecifications.direct,
            video: "",
        },
    },
    {
        id: "lmprtu-3",
        name: "Edge",
        description: `Introducing Edge, Pitchmark’s latest specialist formulation, designed for use with any spray or robot line marking machine.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Professional", "Ready-To-Use"],
        images: [EdgeboxImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.edge,
            features: ProductFeatures.edge,
            specifications: ProductSpecifications.edge,
            video: "",
        },
    },
    // TODO: DESCRIPTION | IMAGE | DETAILS
    {
        id: "lmprtu-4",
        name: "Transfer",
        description: `
            Transfer line marking paint is a bright and long-lasting ready-to-use 
            specially formulated with added thickeners for wheel-to-wheel markers like our Classic.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Standard", "Ready-To-Use"],
        images: [TransferImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.transfer,
            features: ProductFeatures.transfer,
            specifications: ProductSpecifications.transfer,
            video: "",
        },
    },
];
