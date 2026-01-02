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
        mainCategory: "natural_turf",
        tags: ["aerator", "natural_turf"],
        images: [JavelinImg],
        brand: EquipmentBrand.SISIS,
        details: {
            specs_description: ProductSpecDescriptions.javelin,
            features: ProductFeatures.javelin,
            specifications: {
                type: "standard",
                data: ProductSpecifications.javelin,
            },
            video: "",
        },
    },
    {
        id: "aer-2",
        name: "Dart",
        description:
            "Independent powered vertical action aerator ideal for sports field maintenance.",
        mainCategory: "natural_turf",
        tags: ["aerator", "natural_turf"],
        images: [DartImg],
        brand: EquipmentBrand.SISIS,
        details: {
            specs_description: ProductSpecDescriptions.dart,
            features: ProductFeatures.dart,
            specifications: {
                type: "standard",
                data: ProductSpecifications.dart,
            },
            video: "",
        },
    },
];
