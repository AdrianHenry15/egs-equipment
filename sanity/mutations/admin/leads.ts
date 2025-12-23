import { sanityClient } from "@/sanity/lib/client";

type CreateLeadInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    message?: string;
    equipmentNeeds?: string[];
    equipmentInterest?: string[]; // product IDs
};

// CREATE
export async function createLead(input: CreateLeadInput) {
    return sanityClient.create({
        _type: "lead",
        ...input,
        equipmentInterest: input.equipmentInterest?.map((id) => ({
            _type: "reference",
            _ref: id,
        })),
        status: "new",
        createdAt: new Date().toISOString(),
    });
}

// UPDATE
export async function updateLead(
    leadId: string,
    data: Partial<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    }>,
) {
    return sanityClient.patch(leadId).set(data).commit();
}

// UPDATE LEAD STATUS
export async function updateLeadStatus(
    leadId: string,
    status: "new" | "contacted" | "qualified" | "converted" | "lost",
) {
    return sanityClient.patch(leadId).set({ status }).commit();
}

// UPDATE LEAD EQUIPMENT
export async function updateLeadEquipment(
    leadId: string,
    input: {
        equipmentNeeds?: string[];
        equipmentInterest?: string[];
    },
) {
    return sanityClient
        .patch(leadId)
        .set({
            ...(input.equipmentNeeds && { equipmentNeeds: input.equipmentNeeds }),
            ...(input.equipmentInterest && {
                equipmentInterest: input.equipmentInterest.map((id) => ({
                    _type: "reference",
                    _ref: id,
                })),
            }),
        })
        .commit();
}

// MARK LEAD CONVERTED
export async function markLeadConverted(leadId: string) {
    return sanityClient
        .patch(leadId)
        .set({
            status: "converted",
            convertedAt: new Date().toISOString(),
        })
        .commit();
}

// ARCHIVE
export async function archiveLead(leadId: string) {
    return sanityClient.patch(leadId).set({ status: "lost" }).commit();
}

// DELETE LEAD
export async function deleteLead(leadId: string) {
    return sanityClient.delete(leadId);
}
