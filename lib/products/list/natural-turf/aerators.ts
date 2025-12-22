import DartImg from "@/public/products/aerators/dart-sisis-aerator.jpeg";
import JavelinImg from "@/public/products/aerators/javelin-aer-aid-1500-aerator.webp";
import { ProductSpecDescriptions } from "../../product-spec-descriptions";
import { ProductFeatures } from "../../product-features";
import { ProductSpecifications } from "../../product-specifications";
import { ProductType } from "@/lib/types/product";
import { EquipmentBrand } from "@/lib/types/brands";

export const AeratorProducts: ProductType[] = [
    {
        id: "aer-1",
        name: "Javelin Aer-Aid 1500",
        description:
            "Tractor mounted vertical action aerator for use on both fine and outfield turf.",
        mainCategory: "Natural Turf",
        tags: ["Aerator", "Natural Turf"],
        image: JavelinImg,
        brand: EquipmentBrand.SISIS,
        details: {
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
        mainCategory: "Natural Turf",
        tags: ["Aerator", "Natural Turf"],
        image: DartImg,
        brand: EquipmentBrand.SISIS,
        details: {
            specs_description: ProductSpecDescriptions.dart,
            features: ProductFeatures.dart,
            specifications: ProductSpecifications.dart,
            video: "",
        },
    },
];
