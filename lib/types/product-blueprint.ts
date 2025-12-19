import { StaticImageData } from "next/image";
import { EquipmentDetails } from "./product";
import { MainCategory, SubCategory } from "./categories";
import { EquipmentBrand } from "./brands";

export type ProductBlueprint = {
    id: string;
    name: string;
    description: string;
    mainCategory: MainCategory;
    subCategory: SubCategory;
    brand: EquipmentBrand;
    image: StaticImageData;
    manual?: string;
    details: EquipmentDetails;
    popular?: boolean;
};
