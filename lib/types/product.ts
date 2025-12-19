import { StaticImageData } from "next/image";
import { EquipmentBrand } from "./brands";
import { MainCategory, SubCategory } from "./categories";
import { Clients } from "./clients";

export type ProductType = {
    id: string;
    name: string;
    description: string;

    mainCategory: MainCategory;
    subCategory: SubCategory;
    brand: EquipmentBrand;

    image: string | StaticImageData;

    equipment_details: EquipmentDetails;

    manual?: string;
    usedBy?: Clients;
    popular?: boolean;
};

export type EngineSpecifications = {
    engine?: string;
    engine_petrol?: string;
    tractor_power_requirement?: string;
    power_unit_requirement?: string;
};

export type Dimensions = {
    width?: string;
    altWidth?: string;
    length?: string;
    altLength?: string;
    height?: string;
    altHeight?: string;
    tire_size?: string;
};

export type BrushSpecifications = {
    brushes?: string;
    number_of_brushes?: string;
    oscillating_brush?: string;
    rear_brush?: string;
};

export type CuttingSpecifications = {
    cutting_width?: string;
    height_of_cut?: string;
    working_width?: string;
    working_depth?: string;
    cutter_performance?: string;
    cylinder?: string;
};

export type ProductSpecificationsType = {
    model?: string;
    code?: string;
    action?: string;
    depth?: string;
    power_source_output?: string;
    recommended_tractor?: string;

    dimensions?: Dimensions;
    operating_width?: string;
    inclusions?: string | string[];
    exclusions?: string;
    weight?: string;
    altWeight?: string;
    minimum_tractor_requirement?: string;

    engine?: EngineSpecifications;
    brushes?: BrushSpecifications;
    cutting?: CuttingSpecifications;

    drive_system?: string;
    final_drive?: string;
};

export type EquipmentDetails = {
    specs_description: string;
    features: string[];
    specifications: ProductSpecificationsType;
    video?: string;
};
