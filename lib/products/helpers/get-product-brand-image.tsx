import SISISLogo from "@/public/logos/sisis.webp";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.webp";
import DennisLogo from "@/public/logos/dennis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import EGSLogo from "@/public/logos/EGS1.png";
import { EquipmentBrand } from "@/lib/types";

// Functions
export const getProductBrandImage = (brand: EquipmentBrand) => {
    if (brand === "SISIS") {
        return SISISLogo;
    } else if (brand === "Buffalo Turbine") {
        return BuffaloTurbineLogo;
    } else if (brand === "Dennis") {
        return DennisLogo;
    } else if (brand === "Syn-Pro") {
        return SynProLogo;
    } else {
        return EGSLogo;
    }
};
