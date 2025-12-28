import { ProductMainCategory, ProductBrand, ProductUsedBy } from "@/sanity/types";
import { LeadPriority, LeadSource, LeadStatus } from "@/sanity/types";
export type ClientStatus = "active" | "paused" | "completed" | "inactive";
export type EventType =
    | "trade_show"
    | "demo_day"
    | "tournament"
    | "conference"
    | "client_visit"
    | "other";

export type EventStatus = "upcoming" | "completed" | "cancelled";

export interface EventLocation {
    venue: string;
    city: string;
    state: string;
    country: string;
}
export interface LeadFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    equipmentNeeds: string[];
    equipmentInterest: string[]; // product IDs
    message: string;
    source: LeadSource | "";
    status: LeadStatus;
    priority: LeadPriority | "";
}

export interface ProductFormValues {
    name: string;
    slug: {
        current: string;
    };
    description: string;
    mainCategory: ProductMainCategory;
    brand: ProductBrand;
    tags: string[];
    image: any | null; // Sanity image object
    details: null; // details object type
    manual: any | null; // Sanity file object
    usedBy: ProductUsedBy | "";
    popular: boolean | null;
}
export interface ClientFormValues {
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string;
    status: ClientStatus;
    equipmentOwned: string[]; // product IDs
    equipmentNeeds: string[];
    equipmentInterest: string[]; // product IDs
    notes: string;
    lead: string | ""; // lead reference ID
}

export interface EventFormValues {
    name: string;
    slug: {
        current: string;
    };
    type: EventType;
    description: string;
    startDate: string; // ISO datetime
    endDate: string;
    location: EventLocation;
    clients: string[]; // client IDs
    productsFeatured: string[]; // product IDs
    leadsGenerated: string[]; // lead IDs
    coverImage: any | null; // Sanity image
    gallery: any[]; // Sanity images
    status: EventStatus;
    notes: string;
}
