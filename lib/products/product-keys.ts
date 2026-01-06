export type MachineProductKey =
    | "javelin"
    | "dart"
    | "gseries"
    | "es860"
    | "rotorake_600_hd"
    | "auto_rotorake_mk5"
    | "veemo_mk2"
    | "hover_mower"
    | "brush_pro"
    | "svr_1500_deep_cleaner"
    | "sss1000"
    | "osca_3"
    | "varibrush"
    | "triangular_brush"
    | "powaspred"
    | "tractor_brush_combinations"
    | "tractor_rake_and_brush_combinations"
    | "towed_brush_combination"
    | "litamina"
    | "cyclone_8000"
    | "cyclone_kb4"
    | "cyclone_squared"
    | "cyclone_mega"
    | "cyclone_pto";

export type HarrodProductKey =
    | "finesse_folding_target_goal"
    | "folding_target_goal"
    | "4g_stadium_pro_goal_braided_nets"
    | "portaball_pro"
    | "4g_stadium_pro_goal_hex_nets"
    | "4g_stadium_goal"
    | "4g_swivel_portagoal"
    | "4g_portagoal"
    | "4g_swivel_weighted_portagoal"
    | "4g_euro_swivel_portagoal"
    | "4g_weighted_portagoal"
    | "polygoal"
    | "4g_portaball_portagoal_with_net"
    | "4g_uefa_portagoal"
    | "4g_euro_portagoal"
    | "slimline_bottom_hinged_net_support_bracket"
    | "4g_net_hook_insertion_tool"
    | "heavyweight_freestanding_goal"
    | "folding_aluminum_goal"
    | "wheelaway_analyst_shelter"
    | "mini_target_goal"
    | "perimeter_poles"
    | "hi_raise_wheels"
    | "super_heavyweight_goal"
    | "heavyweight_goal"
    | "super_heavyweight_goal_with_locking_sockets"
    | "freestanding_steel_goal"
    | "folding_steel_goal"
    | "freestanding_aluminium_goal"
    | "u_peg_anchor_kit";

// Paint
export type LineMarkerPaintProductKeys =
    // Ready To Use
    | "ecoline"
    | "direct"
    | "edge"
    | "transfer"
    // Concentrate
    | "extreme"
    | "lumen"
    | "clubline"
    | "line_out"
    // Artificial Grass
    | "agp";

// Machines
export type LineMarkerMachineProductKeys =
    // Spray Machines
    | "hybrid"
    | "eco_pro"
    | "eco_club"
    | "eco_lite"
    | "fusion"
    // Wheel-To-Wheel
    | "classic";

// Accessories
export type LineMarkerAccessoryProductKeys =
    // Field Accessories
    | "line_marking_handbook"
    | "linefix"
    | "grassroots_marking_kit"
    | "professional_marking_kit"
    | "initial_pitch_system"
    | "200_m_string_line"
    | "pitch_marking_pegs"
    | "penalty_circle_marker"
    | "100m_measuring_tape"
    | "guide_reel"
    | "mini_guide_reel"
    | "3_4_5_triangle"
    | "kit_bag"
    | "750_ml_aerosol"
    // Machine Accessories
    | "6l_water_tank"
    | "25l_paint_tank"
    | "spray_marker_service_kit"
    | "ecoclean_10l"
    | "concentrate_mixing_kit";
export type ProductKey =
    | MachineProductKey
    | HarrodProductKey
    | LineMarkerPaintProductKeys
    | LineMarkerMachineProductKeys
    | LineMarkerAccessoryProductKeys;
