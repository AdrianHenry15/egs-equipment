import {
    LineMarkerAccessorySpecificationsType,
    LineMarkerPaintSpecificationsType,
} from "@/lib/types/product";
import { LineMarkerAccessoryProductKeys, LineMarkerPaintProductKeys } from "../product-keys";

export const LineMarkerAccessorySpecifications: Record<
    LineMarkerAccessoryProductKeys,
    LineMarkerAccessorySpecificationsType
> = {
    line_marking_handbook: {
        length: "150m",
        width: "105mm",
        weight: "0.12kg",
    },
    linefix: {},
    grassroots_marking_kit: {},
    professional_marking_kit: {},
    initial_pitch_system: {},
    "200_m_string_line": {},
    pitch_marking_pegs: {},
    penalty_circle_marker: {},
    "100m_measuring_tape": {},
    guide_reel: {},
    mini_guide_reel: {},
    "3_4_5_triangle": {},
    kit_bag: {},
    "750_ml_aerosol": {},
    "6l_water_tank": {},
    "25l_paint_tank": {},
    spray_marker_service_kit: {},
    ecoclean_10l: {},
    concentrate_mixing_kit: {},
};
