// Grass Roots Marking Kit Images
import StringLineImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/200m-string-line.webp";
import TriangleImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/3-4-5-Triangle.webp";
import PitchMarkingPegsImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/4-x-pitch-marking-pegs.webp";
import GrassRootsImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/Grassroots-Initial-Marking.webp";
import MiniReelImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/Mini-Reel.webp";
import MeasuringTapeImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/RST-100-metre-fibreglass-measuring-tape-640-640px.webp";
import AerosolImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/Range-of-750ml-aerosol-line-marking-paints.webp";
import PenaltySpotMarkerImg from "@/public/products/line-markers/accessories/field-accessories/grassroots-marking-kit/rubber-penalty-spot-marker-for-football-pitches.webp";
// Initial Pitch System Images
import IPS1Img from "@/public/products/line-markers/accessories/field-accessories/initial-pitch-system/IPS-Contents-01.webp";
import IPS2Img from "@/public/products/line-markers/accessories/field-accessories/initial-pitch-system/IPS-Contents-02.webp";
import IPS3Img from "@/public/products/line-markers/accessories/field-accessories/initial-pitch-system/IPS-Contents-03.webp";
import IPSBagImg from "@/public/products/line-markers/accessories/field-accessories/initial-pitch-system/Initial-Pitch-System-Bag-WEB.webp";
import IPSSystemImg from "@/public/products/line-markers/accessories/field-accessories/initial-pitch-system/Initial-Pitch-System-WEB.webp";
// Line Marking Handbook Images
import BackCoverImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Back-Cover.webp";
import CoverImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Cover.webp";
import FrontBackImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Front-Back.webp";
import HowToImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/How-To.webp";
import InsidePageImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Inside-Page.webp";
import InsidePage2Img from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Inside-Pages.webp";
import ProductsImg from "@/public/products/line-markers/accessories/field-accessories/line-marking-handbook/Products.webp";
// Line Fix Images
import LineFixKitImg from "@/public/products/line-markers/accessories/field-accessories/linefix/LineFix-Kit-WEB-1.webp";
import LineFixWhiteImg from "@/public/products/line-markers/accessories/field-accessories/linefix/LineFix-White.webp";
// Pitch Marking Pegs Images
import MarkingPegsImg from "@/public/products/line-markers/accessories/field-accessories/pitch-marking-pegs/10-pitch-marking-pegs-for-line-marking.webp";
// Professional Marking Kit Bag Images
import GuideReelImg from "@/public/products/line-markers/accessories/field-accessories/professional-marking-kit/Rutland-Guide-Reel.webp";
import ProIMTImg from "@/public/products/line-markers/accessories/field-accessories/professional-marking-kit/Professional-Initial-Marking-Kit.webp";
import KitBagImg from "@/public/products/line-markers/accessories/field-accessories/professional-marking-kit/Pitchmark-Kit-Bag-Web.webp";

import { ProductSpecDescriptions } from "../../../product-spec-descriptions";
import { ProductFeatures } from "../../../product-features";
import { ProductSpecifications } from "../../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";
import { LineMarkerAccessorySpecifications } from "@/lib/products/line-marker-specifications/accessory-specifications";

export const LineMarkerFieldAccessoryProducts: ProductType[] = [
    {
        id: "lmfa-1",
        name: "Line Marking Handbook",
        description: `This handy pocket-sized line marking handbook contains a range of pitch dimensions, saving you time when marking pitches.`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [
            BackCoverImg,
            CoverImg,
            FrontBackImg,
            HowToImg,
            InsidePageImg,
            InsidePage2Img,
            ProductsImg,
        ],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.line_marking_handbook,
            features: ProductFeatures.line_marking_handbook,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.line_marking_handbook,
            },
            video: "",
        },
    },
    {
        id: "lmfa-2",
        name: "LineFix",
        description: `
            This product utilises a sequence of ‘sockets’ placed into the turf using the LineFix installation key. 
        `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [LineFixKitImg, LineFixWhiteImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.linefix,
            features: ProductFeatures.linefix,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.linefix,
            },
            video: "",
        },
    },
    {
        id: "lmfa-3",
        name: "Grassroots Marking Kit",
        description: `Our Grassroots Marking Kit is a great kit to aid the groundsman when helping to measure and string out pitches from scratch.`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [
            GrassRootsImg,
            StringLineImg,
            TriangleImg,
            PitchMarkingPegsImg,
            MiniReelImg,
            MeasuringTapeImg,
            AerosolImg,
            PenaltySpotMarkerImg,
        ],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.grassroots_marking_kit,
            features: ProductFeatures.grassroots_marking_kit,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.grassroots_marking_kit,
            },
            video: "",
        },
    },
    {
        id: "lmfa-4",
        name: "Professional Marking Kit",
        description: `Our Professional Marking Kit is a great kit to aid the groundsman when helping to measure and string out pitches from scratch.`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [GuideReelImg, ProIMTImg, KitBagImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.professional_marking_kit,
            features: ProductFeatures.professional_marking_kit,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.professional_marking_kit,
            },
            video: "",
        },
    },
    {
        id: "lmfa-5",
        name: "Initial Pitch System",
        description: `
            Five string lines, 30 LineFix orange sockets, 80 LineFix blue sockets, a measuring tape, a LineFix installation key, 
            10 LineFix pins, 10 LineFix mowing pins, and a premium carrying bag are included.
        `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [IPSSystemImg, IPSBagImg, IPS1Img, IPS2Img, IPS3Img],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.initial_pitch_system,
            features: ProductFeatures.initial_pitch_system,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.initial_pitch_system,
            },
            video: "",
        },
    },
    {
        id: "lmfa-6",
        name: "200m String Line",
        description: `This 200m String Line was designed & developed for marking out sports pitches, courts & tracks.`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [StringLineImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["200_m_string_line"],
            features: ProductFeatures["200_m_string_line"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["200_m_string_line"],
            },
            video: "",
        },
    },
    {
        id: "lmfa-7",
        name: "Pitch Marking Pegs",
        description: `Pitch Marking Pegs to aid with stringing out and marking of sports pitches on grass.`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [MarkingPegsImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.pitch_marking_pegs,
            features: ProductFeatures.pitch_marking_pegs,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.pitch_marking_pegs,
            },
            video: "",
        },
    },
    {
        id: "lmfa-8",
        name: "Penalty Circle Marker",
        description: `A flexible rubber Penalty Circle Marker enables you to mark out perfect penalty spots on football pitches. `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [PenaltySpotMarkerImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.penalty_circle_marker,
            features: ProductFeatures.penalty_circle_marker,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.penalty_circle_marker,
            },
            video: "",
        },
    },
    {
        id: "lmfa-9",
        name: "100m Measuring Tape",
        description: `
            Perfect for groundsmen, this reliable 100m measuring tape (330ft) provides superior accuracy when setting out a pitch.
            `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [MeasuringTapeImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["100m_measuring_tape"],
            features: ProductFeatures["100m_measuring_tape"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["100m_measuring_tape"],
            },
            video: "",
        },
    },
    {
        id: "lmfa-10",
        name: "Guide Reel",
        description: `
            This high-quality Rutland Guide Reel is great for stringing out your pitch when combined with 500 metres polywire.
            `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [GuideReelImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.guide_reel,
            features: ProductFeatures.guide_reel,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.guide_reel,
            },
            video: "",
        },
    },
    {
        id: "lmfa-11",
        name: "Mini Guide Reel",
        description: `
        This high-quality Rutland Mini Guide Reel is great for stringing out your pitch when combined with 500 metres of Polywire.
`,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [MiniReelImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.mini_guide_reel,
            features: ProductFeatures.mini_guide_reel,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.mini_guide_reel,
            },
            video: "",
        },
    },
    {
        id: "lmfa-12",
        name: "3-4-5 Triangle",
        description: `
            Our PVC 3-4-5 Triangle is used for setting out the corners of your sports pitch, ensuring the pitch has perfect right-angle corners quickly, and easily.
        `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [TriangleImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["3_4_5_triangle"],
            features: ProductFeatures["3_4_5_triangle"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["3_4_5_triangle"],
            },
            video: "",
        },
    },
    {
        id: "lmfa-13",
        name: "Kit Bag",
        description: `
            The Pitchmark Kit Bag is extremely useful to help store and carry around your pitch marking accessories and equipment, such as pegs, string, reel and tape measure.
        `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [KitBagImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions.kit_bag,
            features: ProductFeatures.kit_bag,
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications.kit_bag,
            },
            video: "",
        },
    },
    {
        id: "lmfa-14",
        name: "750ml Aerosol",
        description: `
            Aerosol cans perfect for a wide range of hard surfaces, artificial grass and spot marking on natural grass. `,
        mainCategory: "line_marker",
        tags: ["accessory", "field_accessory"],
        images: [AerosolImg],
        brand: EquipmentBrand.PITCHMARK,
        details: {
            specs_description: ProductSpecDescriptions["750_ml_aerosol"],
            features: ProductFeatures["750_ml_aerosol"],
            specifications: {
                type: "line_marker_accessory",
                data: LineMarkerAccessorySpecifications["750_ml_aerosol"],
            },
            video: "",
        },
    },
];
