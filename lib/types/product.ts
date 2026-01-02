import { StaticImageData } from "next/image";
import { EquipmentBrand } from "./brands";
import { Clients } from "./clients";
import { Tag, MainCategory } from "./categories";

export type ProductType = {
    id: string;
    name: string;
    description: string;
    mainCategory: MainCategory;
    tags: Tag[];
    brand: EquipmentBrand;
    images: string[] | StaticImageData[];
    details: Details;
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

export type SpecificationKind =
    | "standard"
    | "line_marker_paint"
    | "line_marker_machine"
    | "line_marker_accessory"
    | "goals";

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

export type LineMarkerPaintSpecificationsType = {
    grass: string;
    compatibility: string;
    ready_to_use?: string;
    concentrate?: string;
    size: string;
    coverage?: string;
    colors: string[];
};
export type LineMarkerMachineSpecificationsType = {
    spray_marker?: string;
    battery?: string;
    hybrid_wheel?: string;
    chassis?: string;
    puncture_proof?: string;
    transfer_wheel?: string;
    capacity: string;
    line_width: string;
    low_maintenance?: string;
    usage?: string;
    made_in_britain?: string;
    weight: string;
    no_rust?: string;
    filtration_system?: string;
};
export type LineMarkerAccessorySpecificationsType = {
    package_item?: PackageItemType[];
    length?: string;
    width?: string;
    height?: string;
    weight?: string;
    size?: string;
    colors?: string[];
    capacity?: string;
    compatability?: string;
};

export type PackageItemType = {
    name: string;
    quantity: number;
    description: string;
};

export type StandardSpecifications = {
    type: "standard";
    data: ProductSpecificationsType;
};

export type LineMarkerPaintSpecifications = {
    type: "line_marker_paint";
    data: LineMarkerPaintSpecificationsType;
};

export type LineMarkerMachineSpecifications = {
    type: "line_marker_machine";
    data: LineMarkerMachineSpecificationsType;
};

export type LineMarkerAccessorySpecifications = {
    type: "line_marker_accessory";
    data: LineMarkerAccessorySpecificationsType;
};

export type GoalSpecifications = {
    type: "goals";
    data: any;
};

export type Details = {
    specs_description?: string;
    features?: string[];
    specifications?:
        | StandardSpecifications
        | LineMarkerAccessorySpecifications
        | LineMarkerPaintSpecifications
        | LineMarkerMachineSpecifications
        | GoalSpecifications;
    quality?: "1" | "2" | "3" | "4" | "5";
    video?: string;
};
