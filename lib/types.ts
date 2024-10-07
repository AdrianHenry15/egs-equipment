import { StaticImageData } from "next/image";
import { Category, EquipmentBrand } from "./constants";

export type NavMenuType = {
    title: string;
    link: string;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    category: Category;
    price?: number;
    quantity?: number;
    image: string | StaticImageData;
    equipment_details: EquipmentType;
};

export type EquipmentType = {
    specs_description: string;
    features: string[];
    brand: EquipmentBrand;
    specifications: {
        model?: string;
        code: string;
        action?: string;
        working_width: string;
        working_depth?: string;
        tractor_power_requirement?: string;
        inclusions?: string;
    };
    video?: string;
};
