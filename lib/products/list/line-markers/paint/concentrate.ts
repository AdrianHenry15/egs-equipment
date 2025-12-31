import ExtremeImg from "@/public/products/line-markers/paint/concentrate/Extreme-10L-1.webp";
import LineOutImg from "@/public/products/line-markers/paint/concentrate/Line-Out-10L-1.webp";
import LumenImg from "@/public/products/line-markers/paint/concentrate/Lumen-Box-10L-Brown-Main-View.webp";
import ClublineImg1 from "@/public/products/line-markers/paint/concentrate/clubline/Clubline-10L-1.webp";
import ClublineImg2 from "@/public/products/line-markers/paint/concentrate/clubline/Clubline-750L-IBC-WEB.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const LineMarkerConcentratePaintProducts: ProductType[] = [
    {
        id: "lmpc-1",
        name: "Extreme",
        description: `
            Extreme is our highest-grade concentrated line marking paint, 
            formulated with extra pigments and binders for maximum brightness, 
            durability, and weather resistance. 
         `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Concentrate"],
        images: [ExtremeImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.extreme,
            features: ProductFeatures.extreme,
            specifications: ProductSpecifications.extreme,
            video: "",
        },
    },
    {
        id: "lmpc-2",
        name: "Lumen",
        description: `
            Lumen line marking paint is a very bright and durable concentrate sitting between our Clubline and Extreme products.  
        `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Professional", "Concentrate"],
        images: [LumenImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.lumen,
            features: ProductFeatures.lumen,
            specifications: ProductSpecifications.lumen,
            video: "",
        },
    },
    {
        id: "lmpc-3",
        name: "Clubline",
        description: `Clubline line marking paint is a bright and weather-resistant concentrate aimed at groundsmen marking out sports pitches regularly.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Standard", "Concentrate"],
        images: [ClublineImg1, ClublineImg2],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.clubline,
            features: ProductFeatures.clubline,
            specifications: ProductSpecifications.clubline,
            video: "",
        },
    },
    {
        id: "lmpc-4",
        name: "Line-Out",
        description: `Line-Out is a specialised green concentrate paint designed to cover white lines.
          `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Paint", "Premium", "Concentrate"],
        images: [LineOutImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.line_out,
            features: ProductFeatures.line_out,
            specifications: ProductSpecifications.line_out,
            video: "",
        },
    },
];
