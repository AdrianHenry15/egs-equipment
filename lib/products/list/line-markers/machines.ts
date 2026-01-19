// Eco Club
import EcoPlusImg from "@/public/products/line-markers/machines/eco-club/Eco-Club-Ecoline-Plus.webp";
import EcoClubImg from "@/public/products/line-markers/machines/eco-club/Eco-Club.webp";
// Eco Lite
import EcoLiteNoTankImg from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-No-Tank-View-1.webp";
import EcoLiteNoTank2Img from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-No-Tank-View-2.webp";
import EcoLiteNoTank3Img from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-No-Tank-View-4.webp";
import EcoLiteNoTank4Img from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-No-Tank-View-5.webp";
import EcoLiteImg from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-View-1.webp";
import EcoLite2Img from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-View-4.webp";
import EcoLite3Img from "@/public/products/line-markers/machines/eco-lite/Eco-Lite-2023-View-5.webp";
// Eco Pro
import EcoProDiscsImg from "@/public/products/line-markers/machines/eco-pro/Discs-Backwards.webp";
import EcoProPSGImg from "@/public/products/line-markers/machines/eco-pro/ECO-Pro-PSG.webp";
import EcoProInUse2Img from "@/public/products/line-markers/machines/eco-pro/Eco-Pro-In-Use-2.webp";
import EcoProInUseImg from "@/public/products/line-markers/machines/eco-pro/Eco-Pro-In-Use.webp";
import EcoProImg from "@/public/products/line-markers/machines/eco-pro/Eco-Pro.webp";
import EcoProFrontEndImg from "@/public/products/line-markers/machines/eco-pro/Extended-Front-End.webp";
// Fusion
import FusionNoTankImg from "@/public/products/line-markers/machines/fusion/Fusion-2023-No-Tank-View-1.webp";
import FusionNoTank2Img from "@/public/products/line-markers/machines/fusion/Fusion-2023-No-Tank-View-2.webp";
import FusionNoTank3Img from "@/public/products/line-markers/machines/fusion/Fusion-2023-No-Tank-View-4.webp";
import FusionNoTank4Img from "@/public/products/line-markers/machines/fusion/Fusion-2023-No-Tank-View-5.webp";
import FusionImg from "@/public/products/line-markers/machines/fusion/Fusion-2023-View-2.webp";
import Fusion2Img from "@/public/products/line-markers/machines/fusion/Fusion-2023-View-4.webp";
import Fusion3Img from "@/public/products/line-markers/machines/fusion/Fusion-2023-View-5.webp";
// Hybrid
import HybridImg from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB.webp";
import Hybrid2Img from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB-2.webp";
import Hybrid3Img from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB-3.webp";
import Hybrid4Img from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB-4.webp";
import Hybrid5Img from "@/public/products/line-markers/machines/hybrid/Hybrid-Line-Marking-Machine-WEB-5.webp";
import HybridCityImg from "@/public/products/line-markers/machines/hybrid/Leicester-City-FC-Hybrid.webp";
import HybridTigersImg from "@/public/products/line-markers/machines/hybrid/Leicester-Tigers-Hybrid.webp";
import HybridWatfordImg from "@/public/products/line-markers/machines/hybrid/Watford-Hybrid.webp";
import HybridWatford2Img from "@/public/products/line-markers/machines/hybrid/Watford-Hybrid-2.webp";
import HybridWembleyImg from "@/public/products/line-markers/machines/hybrid/Wembley-Hybrid.webp";
import HybridWembley2Img from "@/public/products/line-markers/machines/hybrid/Wembley-Hybrid-2.webp";
import HybridWanderImg from "@/public/products/line-markers/machines/hybrid/Wolverhampton-Wanderers-Hybrid.webp";
import HybridWebshopImg from "@/public/products/line-markers/machines/hybrid/hybrid-manufacturing-webshop.webp";
import HybridWebshop2Img from "@/public/products/line-markers/machines/hybrid/hybrid-manufacturing-webshop-2.webp";
import HybridWebshop3Img from "@/public/products/line-markers/machines/hybrid/hybrid-manufacturing-webshop-4.webp";
// Classic
import ClassicImg from "@/public/products/line-markers/machines/classic/Classic-Line-Marker-Web-1.webp";
import Classic2Img from "@/public/products/line-markers/machines/classic/Classic-Line-Marker-Web-2.webp";
import Classic3Img from "@/public/products/line-markers/machines/classic/Classic-Line-Marker-Web-3.webp";
import Classic4Img from "@/public/products/line-markers/machines/classic/Classic-Line-Marker-Web-4.webp";
import Classic5Img from "@/public/products/line-markers/machines/classic/Classic-Line-Marker-Web-5.webp";

import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";
import { ProductSpecDescriptions } from "../../product-spec-descriptions";
import { ProductFeatures } from "../../product-features";
import { LineMarkerMachineSpecifications } from "../../line-marker-specifications/machine-specifications";

export const LineMarkerMachineProducts: ProductType[] = [
    {
        id: "lmm-1",
        name: "Hybrid",
        description: `Our premium Hybrid line marking machine is designed with and for sports turf professionals, perfect for use on stadium pitches.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "spray_machine"],
        images: [
            Hybrid2Img,
            HybridImg,
            Hybrid3Img,
            Hybrid4Img,
            Hybrid5Img,
            HybridCityImg,
            HybridTigersImg,
            HybridWatfordImg,
            HybridWatford2Img,
            HybridWembleyImg,
            HybridWembley2Img,
            HybridWanderImg,
            HybridWebshopImg,
            HybridWebshop2Img,
            HybridWebshop3Img,
        ],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.hybrid,
            },
            video: "",
        },
    },
    {
        id: "lmm-2",
        name: "Eco Pro",
        description: `The Eco Pro line marking machine is a high-end upgraded version of our popular Eco Club and is just as easy-to-use for all grounds staff.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "spray_machine"],
        images: [EcoProDiscsImg, EcoProPSGImg, EcoProInUse2Img, EcoProInUseImg, EcoProImg, EcoProFrontEndImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.eco_pro,
            },
            video: "",
        },
    },
    {
        id: "lmm-3",
        name: "Eco Club",
        description: `Used by groundsmen across the globe, the Eco Club is our most popular battery-powered spray line marking machine, 
        engineered especially for our range of high-quality line marking paints.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "spray_machine"],
        images: [EcoPlusImg, EcoClubImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.eco_club,
            },
            video: "",
        },
    },
    {
        id: "lmm-4",
        name: "Eco Lite",
        description: `The Eco Lite line marking machine is designed by grounds staff, 
        for grounds staff, so is straightforward to use and easy to maintain for all users.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "spray_machine"],
        images: [
            EcoLiteNoTankImg,
            EcoLiteNoTank2Img,
            EcoLiteNoTank3Img,
            EcoLiteNoTank4Img,
            EcoLiteImg,
            EcoLite2Img,
            EcoLite3Img,
        ],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.eco_lite,
            },
            video: "",
        },
    },
    {
        id: "lmm-5",
        name: "Fusion",
        description: `Affordability, performance, and appearance make the Fusion line marking machine an excellent choice for all levels of sport.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "spray_machine"],
        images: [
            FusionNoTankImg,
            FusionNoTank2Img,
            FusionNoTank3Img,
            FusionNoTank4Img,
            FusionImg,
            Fusion2Img,
            Fusion3Img,
        ],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.fusion,
            },
            video: "",
        },
    },
    {
        id: "lmm-6",
        name: "Classic",
        description: `The Classic line marking machine is extremely easy-to-use and popular with amateur and professional groundsmen alike, 
        including several Premier League clubs & World Cup stadia.`,
        mainCategory: "line_marker",
        tags: ["accessory", "machine", "wheel_to_wheel"],
        images: [ClassicImg, Classic2Img, Classic3Img, Classic4Img, Classic5Img],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specifications: {
                type: "line_marker_machine",
                data: LineMarkerMachineSpecifications.classic,
            },
            video: "",
        },
    },
];
