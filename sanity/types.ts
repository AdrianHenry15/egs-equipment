/* =========================================================
   Shared primitives
   ========================================================= */

export interface SanityBase {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
}

export interface SanityReference {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
}

export interface SanityArrayReference extends SanityReference {
    _key: string;
}

/* =========================================================
   ENUMS
   ========================================================= */

export type LeadStatus = "new" | "contacted" | "qualified" | "lost" | "converted";

export type LeadPriority = "Low" | "Medium" | "High";

export type LeadSource = "Website Form" | "Email" | "Referral" | "Cold Outreach" | "Google" | "Other";

export type ClientStatus = "active" | "paused" | "completed" | "inactive";

export type EquipmentEventType = "purchase" | "upgrade" | "replacement" | "repair" | "retired";

export type EquipmentEventReason =
    | "End of Life"
    | "Upgrade"
    | "Performance Issue"
    | "Cost Savings"
    | "New Field Type"
    | "Expansion"
    | "Other";

export type UserRole = "customer" | "admin";
export type ProductMainCategory =
    | ""
    | "Sport"
    | "Synthetic Turf"
    | "Natural Turf"
    | "Line Marker"
    | "Hand Tool"
    | "Goal"
    | "Debris Blower";

export type ProductBrand =
    | "Howardsons"
    | "Harrod Sports"
    | "Pitchmark"
    | "Buffalo Turbine"
    | "Eastman"
    | "Dennis"
    | "SISIS"
    | "Syn-Pro";

export type ProductUsedBy =
    | "Golf"
    | "Soccer"
    | "American Football"
    | "Baseball"
    | "Lacrosse"
    | "Sports Turf"
    | "Synthetic Turf";
export type EventType = "trade_show" | "demo_day" | "tournament" | "conference" | "client_visit" | "other";

export type EventStatus = "upcoming" | "completed" | "cancelled";

/* =========================================================
   IMAGE / FILE TYPES (Sanity Core)
   ========================================================= */

export interface SanityImageCrop {
    _type: "sanity.imageCrop";
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export interface SanityImageHotspot {
    _type: "sanity.imageHotspot";
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

export interface SanityImage {
    _type: "image";
    asset?: SanityReference;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
}

export interface SanityFile {
    _type: "file";
    asset?: SanityReference;
}

/* =========================================================
   SPECIFICATION OBJECTS
   ========================================================= */

export interface CuttingSpecifications {
    _type: "cuttingSpecifications";
    cutting_width?: string;
    height_of_cut?: string;
    working_width?: string;
    working_depth?: string;
    cutter_performance?: string;
    cylinder?: string;
}

export interface BrushSpecifications {
    _type: "brushSpecifications";
    brushes?: string;
    number_of_brushes?: string;
    oscillating_brush?: string;
    rear_brush?: string;
}

export interface EngineSpecifications {
    _type: "engineSpecifications";
    engine?: string;
    engine_petrol?: string;
    tractor_power_requirement?: string;
    power_unit_requirement?: string;
}

export interface Dimensions {
    _type: "dimensions";
    width?: string;
    altWidth?: string;
    length?: string;
    altLength?: string;
    height?: string;
    altHeight?: string;
    tire_size?: string;
}

export interface ProductDetails {
    _type: "details";
    specs_description?: string;
    features?: string[];
    specifications?: ProductDetails;
    quality?: "1" | "2" | "3" | "4" | "5";
    video?: string;
}

/* =========================================================
   DOCUMENTS
   ========================================================= */

export interface Lead extends SanityBase {
    _type: "leads";
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    company?: string;
    equipmentNeeds?: string[];
    equipmentInterest?: SanityArrayReference[];
    message?: string;
    source?: LeadSource;
    status?: LeadStatus;
    priority?: LeadPriority;
    createdAt?: string;
}

export interface Client extends SanityBase {
    _type: "clients";
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    website?: string;
    status?: ClientStatus;
    equipmentOwned?: SanityArrayReference[];
    equipmentNeeds?: string[];
    equipmentInterest?: SanityArrayReference[];
    notes?: string;
    lead?: SanityReference;
    createdAt?: string;
}

export interface EquipmentEvent extends SanityBase {
    _type: "equipmentEvents";
    client?: SanityReference;
    eventType?: EquipmentEventType;
    lastEquipment?: SanityReference;
    currentEquipment?: SanityReference;
    reason?: EquipmentEventReason;
    notes?: string;
    eventDate?: string;
}

export interface Product extends SanityBase {
    _type: "products";
    name?: string;
    slug?: {
        _type: "slug";
        current?: string;
    };
    description?: string;
    mainCategory?: "Sport" | "Synthetic Turf" | "Natural Turf" | "Line Marker" | "Hand Tool" | "Goal" | "Debris Blower";
    tags?: string[];
    brand?:
        | "Howardsons"
        | "Harrod Sports"
        | "Pitchmark"
        | "Buffalo Turbine"
        | "Eastman"
        | "Dennis"
        | "SISIS"
        | "Syn-Pro";
    image?: SanityImage;
    details?: ProductDetails;
    manual?: SanityFile;
    usedBy?: "Golf" | "Soccer" | "American Football" | "Baseball" | "Lacrosse" | "Sports Turf" | "Synthetic Turf";
    popular?: boolean;
}

export interface User extends SanityBase {
    _type: "users";
    clerkId?: string;
    email?: string;
    name?: string;
    role?: UserRole;
    saves?: SanityArrayReference[];
    dateJoined?: string;
}

export interface UserSave extends SanityBase {
    _type: "userSaves";
    clerkId?: string;
    product?: SanityReference;
    createdAt?: string;
}

export interface EventLocation {
    _type: "eventLocation";
    venue?: string;
    city?: string;
    state?: string;
    country?: string;
}

export interface Event extends SanityBase {
    _type: "events";
    name?: string;
    slug?: {
        _type: "slug";
        current?: string;
    };
    type?: EventType;
    description?: string;
    startDate?: string; // ISO datetime
    endDate?: string;
    location?: EventLocation;
    clients?: SanityArrayReference[];
    productsFeatured?: SanityArrayReference[];
    leadsGenerated?: SanityArrayReference[];
    coverImage?: SanityImage;
    gallery?: SanityImage[];
    status?: EventStatus;
    notes?: string;
    createdAt?: string;
}
