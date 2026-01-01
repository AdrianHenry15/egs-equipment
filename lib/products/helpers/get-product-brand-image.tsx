import SISISLogo from "@/public/logos/sisis.webp";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.jpg";
import DennisLogo from "@/public/logos/dennis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarrodSportsLogo from "@/public/logos/harrod-sport-logo.png";
import HowardsonsLogo from "@/public/logos/howardson-logo.png";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";
import EGSLogo from "@/public/logos/EGS1.png";
import { EquipmentBrand } from "@/lib/types/brands";

// Functions
export const getProductBrandImage = (brand: EquipmentBrand) => {
    switch (brand) {
        case EquipmentBrand.SISIS:
            return SISISLogo;
        case EquipmentBrand.BUFFALO_TURBINE:
            return BuffaloTurbineLogo;
        case EquipmentBrand.DENNIS:
            return DennisLogo;
        case EquipmentBrand.HARROD_SPORTS:
            return HarrodSportsLogo;
        case EquipmentBrand.HOWARDSONS:
            return HowardsonsLogo;
        case EquipmentBrand.PITCHMARK:
            return PitchmarkLogo;
        case EquipmentBrand.SYNPRO:
            return SynProLogo;
        default:
            return EGSLogo;
    }
};
