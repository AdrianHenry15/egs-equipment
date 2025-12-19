import { EquipmentBrand, ProductType } from "../../types";
import DartImg from "@/public/products/aerators/dart-sisis-aerator.jpeg";
import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../product-spec-descriptions";
import { ProductFeatures } from "../product-features";
import { ProductSpecifications } from "../product-specifications";

export const AeratorProducts: ProductType[] = [
    {
        id: "aer-1",
        name: "Javelin Aer-Aid 1500",
        description:
            "Tractor mounted vertical action aerator for use on both fine and outfield turf.",
        mainCategory: "Golf & Sports Turf",
        subCategory: "Aerators",
        image: JavelinImg,
        brand: EquipmentBrand.SISIS,
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
        brand: EquipmentBrand.SISIS,
        equipment_details: {
            specs_description: ProductSpecDescriptions.dart,
            features: ProductFeatures.dart,
            specifications: ProductSpecifications.dart,
            video: "",
        },
    },
];
