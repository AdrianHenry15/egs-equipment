import WaterTank6LImg from "@/public/products/line-markers/accessories/machine-accessories/6L-paint-tank-for-Eco-line-markers.webp";
import EcoClean10LImg from "@/public/products/line-markers/accessories/machine-accessories/Eco-Clean-10L__89605.webp";
import ServiceKitImg from "@/public/products/line-markers/accessories/machine-accessories/Service-Kit.webp";
import PaintTank25LImg from "@/public/products/line-markers/accessories/machine-accessories/Standard-25L-Paint-Tank.webp";
import ConcentrateImg from "@/public/products/line-markers/accessories/machine-accessories/mixing-kit-for-concentrate-line-marking-paints.webp";
import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";
import { LineMarkerAccessorySpecifications } from "@/lib/products/line-marker-specifications/accessory-specifications";

export const LineMarkerMachineAccessoryProducts: ProductType[] = [
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-1",
        name: "6L Water Tank",
        description: `This is an extremely useful add-on for the Eco Club and Eco Pro* line markers, 
        slotting easily onto the front of the machine and making the process of cleaning the machine quicker and easier.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [WaterTank6LImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["6l_water_tank"],
            features: ProductFeatures["6l_water_tank"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["6l_water_tank"],
            },
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-2",
        name: "25L Paint Tank",
        description: `The 25L Paint Tank is a moulded plastic container used to contain more paint than normal when marking out pitches.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [PaintTank25LImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["25l_paint_tank"],
            features: ProductFeatures["25l_paint_tank"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["25l_paint_tank"],
            },
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-3",
        name: "Spray Marker Service Kit",
        description: `
        Our Spray Marker Service Kit is suitable for customers who want to keep their spray line marking machine in top working order.  
        Although the Service Kit is suitable for the Eco Pro and Eco Club spray machines, it may be compatible with other pedestrian spray line markers on the market. 
        `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [ServiceKitImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["spray_marker_service_kit"],
            features: ProductFeatures["spray_marker_service_kit"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.spray_marker_service_kit,
            },
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-4",
        name: "EcoClean 10L",
        description: `EcoClean is a ready to use, pH neutral, 
        biodegradable liquid cleaner designed to cleanse pump and nozzles of spray line marking machines. 
        The patent pending technology behind EcoClean is the reason it is REACH compliant making it the most eco-friendly line marker cleaner available. `,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [EcoClean10LImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["ecoclean_10l"],
            features: ProductFeatures["ecoclean_10l"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.ecoclean_10l,
            },
            video: "",
        },
    },
    // TODO: IMAGE | BRAND | DETAILS
    {
        id: "lmma-5",
        name: "Concentrate Mixing Kit",
        description: `This Concentrate Mixing Kit is useful for any groundsman who uses concentrated line marking paints like Pitchmark’s Clubline or Extreme.`,
        mainCategory: "Line Marker",
        tags: ["Line Marker", "Accessories", "Machine Accessories"],
        images: [ConcentrateImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["concentrate_mixing_kit"],
            features: ProductFeatures["concentrate_mixing_kit"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.concentrate_mixing_kit,
            },
            video: "",
        },
    },
];
