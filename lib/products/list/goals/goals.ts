import Cyclone8000Img from "@/public/products/debris-blowers/cyclone-8000.webp";
import FFTG1Img from "@/public/products/goals/fftg-1.jpg";
import FFTG2Img from "@/public/products/goals/fftg-2.jpg";
import FTGImg from "@/public/products/goals/ftg.jpg";
import FTG2Img from "@/public/products/goals/ftg-2.jpg";
import PPImg from "@/public/products/goals/pp-1.jpg";
import GSPImg from "@/public/products/goals/4gsp-1.jpg";
import GPImg from "@/public/products/goals/4gp-1.jpg";
import GSWPImg from "@/public/products/goals/4gswp-1.jpg";
import GESPImg from "@/public/products/goals/4gesp-1.jpg";
import GWPImg from "@/public/products/goals/4gwp.jpg";
import Poly7_5Img from "@/public/products/goals/poly7v5.jpg";
import GPWNImg from "@/public/products/goals/4gpwn.jpg";
import GEPImg from "@/public/products/goals/4gep.jpg";
import HFGImg from "@/public/products/goals/hfg.jpg";
import FSGImg from "@/public/products/goals/fsg-1.jpg";
import FAGImg from "@/public/products/goals/fag-1.jpg";
import FSFAGImg from "@/public/products/goals/fs1fag-1.jpg";
import FSFWGImg from "@/public/products/goals/fs8fwg-1.jpg";
import HDGGImg from "@/public/products/goals/hdgg-1.jpg";
import WUEFAPImg from "@/public/products/goals/wuefap-1.jpg";
import FMGCWBImg from "@/public/products/goals/f126mgcwb.jpg";
import FSG126Img from "@/public/products/goals/f126sg.jpg";
import F64SGImg from "@/public/products/goals/f64sg.jpg";
import F84SGImg from "@/public/products/goals/f84sg.jpg";
import FFGImg from "@/public/products/goals/4gffg.jpg";
import GFEPImg from "@/public/products/goals/3gfep.jpg";
import GHPSImg from "@/public/products/goals/3ghp.jpg";
import GSPGQBNImg from "@/public/products/goals/4gspgqpbn.jpg";
import GSPGImg from "@/public/products/goals/4gspg.jpg";
import HexNetsImg from "@/public/products/goals/hexnets.jpg";
import GSGImg from "@/public/products/goals/4gsg.jpg";
import GUEFAPImg from "@/public/products/goals/4guefap.jpg";
import SlimelineBracketImg from "@/public/products/goals/slimlinebracket.jpg";
import GNHITImg from "@/public/products/goals/4gnhit.jpg";
import FTrainGImg from "@/public/products/goals/FTrainingG.jpg";
import WUEFAPSImg from "@/public/products/goals/4gweps.jpg";

import { ProductSpecDescriptions } from "../../product-spec-descriptions";
import { ProductFeatures } from "../../product-features";
import { EquipmentBrand } from "@/lib/types/brands";
import { ProductType } from "@/lib/types/product";
import { GoalSpecifications } from "./goal-specifications";

export const SoccerGoalProducts: ProductType[] = [
    {
        id: "sgp-1",
        name: "Finesse Folding Target Goal",
        description:
            "Finesse 8 x 4ft goals are commonly used in back gardens and make great football practice for children.",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FFTG1Img, FFTG2Img],
        details: {
            specs_description: ProductSpecDescriptions.finesse_folding_target_goal,
            features: ProductFeatures.finesse_folding_target_goal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.finesse_folding_target_goal,
            },
            video: "",
        },
    },
    {
        id: "sgp-2",
        name: "Folding Target Goal",
        description: `The Harrod Sport Aluminium Folding Target Goals 
        are quick to set up featuring our innovative folding system ideal for 
        training sessions and drills or a back garden kickabout. 
        The collapsible designs means they can be assembled in seconds 
        and easily folded back down small enough to fit in a car boot. 
        Perfect for target practice, these strong, portable goals are 
        made using high quality aluminium and feature strong mesh 
        netting to withstand the most powerful shots.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FTGImg, FTG2Img],
        details: {
            specs_description: ProductSpecDescriptions.folding_target_goal,
            features: ProductFeatures.folding_target_goal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.folding_target_goal,
            },
            video: "",
        },
    },
    {
        id: "sgp-3",
        name: "Portaball Pro",
        description: `Our new patented and innovative Portaball Pro 
        football goal has been specifically designed to meet the 
        exacting standards and requirements of the world's 
        best clubs and coaches.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [PPImg],
        details: {
            specs_description: ProductSpecDescriptions.portaball_pro,
            features: ProductFeatures.portaball_pro,
            specifications: {
                type: "goals",
                data: GoalSpecifications.portaball_pro,
            },
            video: "",
        },
    },
    {
        id: "sgp-4",
        name: "4G Swivel Portagoal",
        description: ``,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GSPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_swivel_portagoal"],
            features: ProductFeatures["4g_swivel_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_swivel_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-5",
        name: "4G Portagoal",
        description: `Harrod Sport 4G Portagoals are the preferred choice of professional clubs and academy facilities. 
        Please Note: All recommended nets and extras must be purchased separately 
        (unless stated as included with product) 
        and can be found listed by clicking the 
        View Set and Buy button. Please ensure that all boxes are 
        ticked for the required product before proceeding to checkout.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_portagoal"],
            features: ProductFeatures["4g_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-6",
        name: "4G Swivel Weighted Portagoal",
        description: `Harrod Sport's new 4G Swivel Weighted Portagoal 
        has been developed in conjunction with Premier League Football Coaches. 
        Please Note: All recommended nets and extras must be purchased separately 
        (unless stated as included with product) 
        and can be found listed by clicking the 
        View Set and Buy button. Please ensure that all boxes are 
        ticked for the required product before proceeding to checkout.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GSWPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_swivel_weighted_portagoal"],
            features: ProductFeatures["4g_swivel_weighted_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_swivel_weighted_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-7",
        name: "4G Euro Swivel Portagoal",
        description: `Bring the big match feel to any pitch with the Harrod Sport 4G Euro Swivel Portagoal. 
        Designed to deliver the ultimate box goal experience across a wide range of formats, 
        this premium freestanding goal combines professional quality with outstanding manoeuvrability.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GESPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_euro_swivel_portagoal"],
            features: ProductFeatures["4g_euro_swivel_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_euro_swivel_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-8",
        name: "4G Weighted Portagoal",
        description: `Harrod Sport 4G Weighted Portagoal is designed to be portable on both grass and synthetic surfaces. 
        Please Note: All recommended nets and extras must be purchased separately 
        (unless stated as included with product) 
        and can be found listed by clicking the View Set and Buy button. 
        Please ensure that all boxes are ticked for the 
        required product before proceeding to checkout.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GWPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_weighted_portagoal"],
            features: ProductFeatures["4g_weighted_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_weighted_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-9",
        name: "Polygoal - 7v7/5v5",
        description: `Perfect for matches, 
        training sessions and garden kickabouts, 
        this 12ft x 6ft lightweight yet highly durable, 
        freestanding portable PVC goal can be easily assembled and dismantled. 
        With a robust, weather resistant frame, 
        the goal has been thoughtfully designed to withstand consistent 
        year-round football games and training sessions for youngsters. 
        Please Note: All recommended nets and extras must be purchased separately 
        (unless stated as included with product) and can be found listed by clicking the View Set and Buy button. 
        Please ensure that all boxes are ticked for the required product before proceeding to checkout.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [Poly7_5Img],
        details: {
            specs_description: ProductSpecDescriptions.polygoal,
            features: ProductFeatures.polygoal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.polygoal,
            },
            video: "",
        },
    },
    {
        id: "sgp-10",
        name: "4G PortaBall Portagoal with Net",
        description: `Engineered for high-performance sessions, 
            the Harrod Sport 4G PortaBall Portagoal is an elite portable 
            football goal with a patented spherical ball system that glides 
            in any direction on artificial 
            and natural turf - far more agile than wheel-based designs.`,
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding", "net", "netting"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GPWNImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_portaball_portagoal_with_net"],
            features: ProductFeatures["4g_portaball_portagoal_with_net"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_portaball_portagoal_with_net"],
            },
            video: "",
        },
    },
    {
        id: "sgp-11",
        name: "4G Euro Portagoal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GEPImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_euro_portagoal"],
            features: ProductFeatures["4g_euro_portagoal"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_euro_portagoal"],
            },
            video: "",
        },
    },
    {
        id: "sgp-12",
        name: "Heavyweight Freestanding Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [HFGImg],
        details: {
            specs_description: ProductSpecDescriptions.heavyweight_freestanding_goal,
            features: ProductFeatures.heavyweight_freestanding_goal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.heavyweight_freestanding_goal,
            },
            video: "",
        },
    },
    {
        id: "sgp-13",
        name: "Freestanding Steel Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSGImg],
        details: {
            specs_description: ProductSpecDescriptions.freestanding_steel_goal,
            features: ProductFeatures.freestanding_steel_goal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.freestanding_steel_goal,
            },
            video: "",
        },
    },
    {
        id: "sgp-14",
        name: "Freestanding Aluminium Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FAGImg],
        details: {
            specs_description: ProductSpecDescriptions.freestanding_aluminium_goal,
            features: ProductFeatures.freestanding_aluminium_goal,
            specifications: {
                type: "goals",
                data: GoalSpecifications.freestanding_aluminium_goal,
            },
            video: "",
        },
    },
    {
        id: "sgp-15",
        name: "FS1 Fold-away Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSFAGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-16",
        name: "FS8 Folding Wheelaway Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSFWGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-17",
        name: "Heavy Duty Galvanised Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [HDGGImg],
        details: {
            specs_description: ProductSpecDescriptions["100m_measuring_tape"],
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-18",
        name: "Weighted UEFA Portagoal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [WUEFAPImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-19",
        name: "Finesse 12 x 6ft Match Goal c/w Bag",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FMGCWBImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-20",
        name: "Finesse 12 x 6ft Standard Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSG126Img],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-21",
        name: "Finesse 6 x 4ft Standard Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [F64SGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-22",
        name: "Finesse 8 x 4ft Standard Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "freestanding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [F84SGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-23",
        name: "Folding Aluminium Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FAGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-24",
        name: "Folding Steel Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-25",
        name: "FS1 Fold-away Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSFAGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-26",
        name: "FS8 Folding Wheelaway Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FSFWGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-27",
        name: "4G Fence Folding Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FFGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-28",
        name: "3G Foldaway Euro Portagoal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "folding"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GFEPImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-29",
        name: "3G Hinged Portagoal - Senior",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "hinged"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GHPSImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-30",
        name: "4G Stadium Pro Goal - FIFA  Quality Package - Braided Nets",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "net", "netting"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GSPGQBNImg],
        details: {
            specs_description: ProductSpecDescriptions["4g_stadium_pro_goal_braided_nets"],
            features: ProductFeatures["4g_stadium_pro_goal_braided_nets"],
            specifications: {
                type: "goals",
                data: GoalSpecifications["4g_stadium_pro_goal_braided_nets"],
            },
            video: "",
        },
    },
    {
        id: "sgp-31",
        name: "4G Stadium Pro Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GSPGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-32",
        name: "4G Stadium Pro Goal - FIFA  Quality Package - Hex Nets",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal", "net", "netting"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [HexNetsImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-33",
        name: "4G Stadium Goal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GSGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-34",
        name: "4G UEFA Portagoal",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GUEFAPImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-35",
        name: "Slimline Bottom Hinged Net Support Bracket",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [SlimelineBracketImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-36",
        name: "4G Net Hook Insertion Tool",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [GNHITImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-37",
        name: "Fixed Training Goals",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [FTrainGImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "sgp-38",
        name: "4G Weighted Euro Portagoal - Senior",
        description: "Lightweight compact debris blower",
        mainCategory: "goal",
        tags: ["soccer", "goal"],
        brand: EquipmentBrand.HARROD_SPORT,
        images: [WUEFAPSImg],
        details: {
            specs_description: ProductSpecDescriptions.cyclone_8000,
            features: ProductFeatures.cyclone_8000,
            specifications: {
                type: "goals",
                data: GoalSpecifications.javelin,
            },
            video: "",
        },
    },
];
