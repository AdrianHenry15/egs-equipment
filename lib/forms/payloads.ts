import { EventFormValues, LeadFormValues } from "./types";
import { ProductFormValues } from "./types";
import { ClientFormValues } from "./types";

export function leadPayload(form: LeadFormValues) {
    return {
        _type: "leads",
        firstName: form.firstName,
        lastName: form.lastName || undefined,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        equipmentNeeds: form.equipmentNeeds.length ? form.equipmentNeeds : undefined,
        equipmentInterest: form.equipmentInterest.length
            ? form.equipmentInterest.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,
        message: form.message || undefined,
        source: form.source || undefined,
        status: form.status,
        priority: form.priority || undefined,
    };
}

export function productPayload(form: ProductFormValues) {
    return {
        _type: "products",
        name: form.name,
        slug: form.slug, // expected shape: { current: string }
        description: form.description || undefined,
        mainCategory: form.mainCategory,
        brand: form.brand,
        tags: form.tags?.length ? form.tags : undefined,
        image: form.image || undefined, // Sanity image object
        details: form.details || undefined, // custom object type
        manual: form.manual || undefined, // Sanity file object
        usedBy: form.usedBy || undefined,
        popular: form.popular ?? undefined,
    };
}

export function clientPayload(form: ClientFormValues) {
    return {
        _type: "clients",
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        website: form.website || undefined,
        status: form.status,
        equipmentOwned: form.equipmentOwned.length
            ? form.equipmentOwned.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,
        equipmentNeeds: form.equipmentNeeds.length ? form.equipmentNeeds : undefined,
        equipmentInterest: form.equipmentInterest.length
            ? form.equipmentInterest.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,
        notes: form.notes || undefined,
        lead: form.lead
            ? {
                  _type: "reference",
                  _ref: form.lead,
              }
            : undefined,
    };
}

export function eventPayload(form: EventFormValues) {
    return {
        _type: "events",

        name: form.name,
        slug: form.slug,

        type: form.type,
        description: form.description || undefined,

        startDate: form.startDate,
        endDate: form.endDate || undefined,

        location:
            form.location?.venue ||
            form.location?.city ||
            form.location?.state ||
            form.location?.country
                ? {
                      venue: form.location.venue || undefined,
                      city: form.location.city || undefined,
                      state: form.location.state || undefined,
                      country: form.location.country || undefined,
                  }
                : undefined,

        clients: form.clients?.length
            ? form.clients.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,

        productsFeatured: form.productsFeatured?.length
            ? form.productsFeatured.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,

        leadsGenerated: form.leadsGenerated?.length
            ? form.leadsGenerated.map((id) => ({
                  _type: "reference",
                  _ref: id,
              }))
            : undefined,

        coverImage: form.coverImage || undefined,
        gallery: form.gallery?.length ? form.gallery : undefined,

        status: form.status,
        notes: form.notes || undefined,
    };
}
