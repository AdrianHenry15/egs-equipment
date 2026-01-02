import { ProductBrand } from "@/sanity/types";
import { MainCategory } from "../types/categories";
import { LeadFormValues } from "./types";
import { ProductFormValues } from "./types";
import { ClientFormValues } from "./types";
import { EventFormValues } from "./types";

export const DEFAULT_LEAD_FORM: LeadFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    equipmentNeeds: [],
    equipmentInterest: [],
    message: "",
    source: "",
    status: "new",
    priority: "",
};

export const DEFAULT_PRODUCT_FORM: ProductFormValues = {
    name: "",
    slug: {
        current: "",
    },
    description: "",
    mainCategory: "",
    brand: "" as ProductBrand,
    tags: [],
    image: null,
    details: null,
    manual: null,
    usedBy: "",
    popular: null,
};

export const DEFAULT_CLIENT_FORM: ClientFormValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    status: "active",
    equipmentOwned: [],
    equipmentNeeds: [],
    equipmentInterest: [],
    notes: "",
    lead: "",
};

export const DEFAULT_EVENT_FORM: EventFormValues = {
    name: "",
    slug: {
        current: "",
    },
    type: "trade_show",
    description: "",
    startDate: "",
    endDate: "",
    location: {
        venue: "",
        city: "",
        state: "",
        country: "",
    },
    clients: [],
    productsFeatured: [],
    leadsGenerated: [],
    coverImage: null,
    gallery: [],
    status: "upcoming",
    notes: "",
};
