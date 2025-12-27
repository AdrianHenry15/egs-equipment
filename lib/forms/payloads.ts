import { LeadFormValues } from "./types";

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
