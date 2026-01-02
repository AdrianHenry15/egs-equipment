import { EquipmentBrand } from "@/lib/types/brands";

export const BRANDS: {
    value: EquipmentBrand;
    label: string;
}[] = [
    {
        value: EquipmentBrand.BUFFALO_TURBINE,
        label: "Buffalo Turbine",
    },
    {
        value: EquipmentBrand.DENNIS,
        label: "Dennis",
    },
    {
        value: EquipmentBrand.EASTMAN,
        label: "Eastman",
    },
    {
        value: EquipmentBrand.HARROD_SPORTS,
        label: "Harrod Sports",
    },
    // {
    //     value: EquipmentBrand.HOWARDSONS,
    //     label: "Howardsons",
    // },
    {
        value: EquipmentBrand.PITCHMARK,
        label: "Pitchmark",
    },

    {
        value: EquipmentBrand.SISIS,
        label: "SISIS",
    },
    {
        value: EquipmentBrand.SYNPRO,
        label: "Syn-Pro",
    },
] as const;
