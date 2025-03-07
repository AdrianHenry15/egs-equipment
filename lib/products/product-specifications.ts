import { ProductSpecificationsType } from "../types";

type Products = {
    [key: string]: ProductSpecificationsType;
};

export const ProductSpecifications: Products = {
    javelin: {
        model: "Javelin Aer-Aid 1500",
        code: "FS1066",
        action: "Vertical Air Injection",

        cutting: {
            working_width: `1500mm(60")`,
            working_depth: `127mm(5")`,
        },
        engine: {
            tractor_power_requirement: "30hp minimum",
        },
        inclusions: "Includes set of 10 air/non-air tines",
    },
    dart: {
        model: "Dart",
        code: "FS1231",
        action: "Vertical",
        cutting: {
            working_width: `400mm(16")`,
            working_depth: `100mm(4")`,
        },
        engine: {
            engine: "Honda GX160",
        },
        exclusions: "Power unit excludes tines",
    },
    gseries: {
        model: "G-660",
        dimensions: {
            width: "1250",
            length: "875",
            height: "1020mm",
        },
        cutting: {
            cutting_width: `660mm(26")`,
            height_of_cut: `8-56mm`,
            cutter_performance: `95 cuts/m(88cuts/yd)`,
            cylinder: `6 or 8 bladed heavy duty spiral`,
        },
        weight: `148kg`,
        engine: {
            engine_petrol: `Honda 5.5hp`,
        },
        drive_system: `Brake band for roller and dog drive to disengage cutter for transport`,
        final_drive: `Poly "V" high performance belts under constant tension`,
    },
    es860: {
        code: `D150`,
        cutting: {
            cutting_width: `860mm (34")`,
            height_of_cut: `9mm - 56mm`,
        },
        power_source_output: `48v battery system`,
        dimensions: {
            width: "1110mm",
            length: "1860mm (with grassbox)",
            altLength: "1340mm (without grassbox)",
            height: "1100mm",
        },
        weight: "235kg (with cutting cassette)",
        altWeight: "195kg (without cassette)",
    },
    rotorake_600_hd: {
        model: "Rotorake 600HD",
        code: "FS1246",
        dimensions: {
            width: "600mm(24)",
        },
        engine: {
            engine: "Honda GX390",
        },
        depth: "30mm (with option to go deeper)",
    },
    auto_rotorake_mk5: {
        model: `Auto Rotorake Mk5`,
        code: `FS1052`,
        dimensions: {
            width: `500mm (20")`,
        },
        engine: {
            engine: `GX160 Honda Engine`,
        },
    },
    veemo_mk2: {
        model: "Veemo Mk2",
        code: "FS1014",
        dimensions: {
            width: `2000mm (80")`,
        },
        engine: {
            tractor_power_requirement: `30hp minimum`,
        },
        inclusions: [
            "Includes 2mm tungssten tipped 'hook' blades reel",
            "Integral heavy duty Oil cooler",
        ],
    },
    hover_mower: {
        model: "Hover Mower",
        engine: {
            engine: "Honda 5.5hp GCV160A-N7AI, 4 cycle",
        },
        cutting: {
            cutting_width: "19 inches",
        },
        inclusions: [
            "Deck high density polyethylene, UV, checmical resistant",
            "Impeller High impact plastic alloy, machined aluminum hub",
        ],
    },
    brush_pro: {
        model: "Brush Pro",
        code: "FS1235Y",
        brushes: {
            oscillating_brush: `1500mm (1.5m/60)`,
            rear_brush: `3000mm (3m/120)`,
        },
        engine: {
            engine: "Honda GXV390",
        },
    },
    svr_1500_deep_cleaner: {
        model: "SVR 1500 Deep Cleaner",
        code: `FS1286`,
        engine: {
            tractor_power_requirement: `Minimum 20hp`,
        },
        cutting: {
            working_width: `1500mm (1.5m/60)`,
        },
    },

    sss1000: {
        model: "SSS1000",
        dimensions: {
            width: "1500mm",
            length: "870mm",
            height: "390mm",
        },
        weight: "112kg",
        cutting: {
            working_width: "1000mm",
        },
    },
    osca_3: {
        model: "OSCA 3",
        dimensions: {
            width: "2044mm",
            length: "512mm",
            height: "867mm",
        },
        weight: "150kg",
        cutting: {
            working_width: "1833mm",
        },
        brushes: {
            brushes: "F33772 or SP24004",
            number_of_brushes: "6",
        },

        recommended_tractor: "16hp 540rpm",
    },
    varibrush: {
        model: "Varibrush",
        dimensions: {
            width: "1924mm",
            length: "2370mm",
            height: "850mm",
        },
        brushes: {
            number_of_brushes: "14",
        },
        weight: "125kg",
        cutting: {
            working_width: "1924mm",
        },
    },
    triangular_brush: {
        model: "Triangular Brush",
        code: "FS1265Y",
        cutting: {
            working_width: "1800mm (1.8m/72)",
        },
    },
    powaspred: {
        model: "Powaspred",
        code: "FS0780Y",
        operating_width: `1270mm (1.27m/51")`,
        minimum_tractor_requirement: "15hp",
    },
    tractor_brush_combinations: {
        model: "Tractor Brush Combinations",
        cutting: {
            working_width: `1800mm (1.8m/72")`,
        },
        engine: {
            tractor_power_requirement: "15hp minimum",
        },
    },
    tractor_rake_and_brush_combinations: {
        model: "Tractor Rake and Brush Combinations",
        cutting: {
            working_width: `1800mm (1.8m/72")`,
        },
        engine: {
            tractor_power_requirement: "15hp minimum",
        },
    },
    towed_brush_combination: {
        model: "Towed Brush Combination",
        cutting: {
            working_width: `1800mm (1.8m/72")`,
        },
        engine: {
            power_unit_requirement: "15hp minimum",
        },
    },
    litamina: {
        model: "Litamina 1200",
        code: "FS1072Y",
        cutting: {
            working_width: `1200mm (1.2m/48)`,
        },
        minimum_tractor_requirement: "25hp minimum",
    },
    cyclone_8000: {
        model: `Cyclone 8000`,
        dimensions: {
            length: `95"`,
            height: `37"`,
            width: `44"`,
            tire_size: `18.5 x 8.50-8 turf tires`,
        },
        weight: `360 lbs.`,
    },
    cyclone_kb4: {
        model: `Cyclone KB4`,
        dimensions: {
            length: `102"`,
            height: `38.5"`,
            width: `48"`,
            tire_size: `18.5 x 8.50-8 turf tires`,
        },
        weight: `470 lbs.`,
    },
    cyclone_squared: {
        model: `Cyclone Squared`,
    },
    cyclone_mega: {
        model: `Cyclone Mega`,
    },
    cyclone_pto: {
        model: `Cyclone PTO`,
    },
};
