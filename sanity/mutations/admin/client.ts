import { sanityWriteClient } from "@/sanity/lib/client";

type CreateClientInput = {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    equipmentOwned?: string[];
    equipmentNeeds?: string[];
};

type EquipmentEventInput = {
    clientId: string;
    eventType: "purchase" | "upgrade" | "replacement" | "repair" | "retired";
    lastEquipment?: string;
    currentEquipment?: string;
    reason?: string;
    notes?: string;
};

// CREATE CLIENT
export async function createClient(input: CreateClientInput) {
    return sanityWriteClient.create({
        _type: "client",
        ...input,
        equipmentOwned: input.equipmentOwned?.map((id) => ({
            _type: "reference",
            _ref: id,
        })),
        equipmentNeeds: input.equipmentNeeds?.map((id) => ({
            _type: "reference",
            _ref: id,
        })),
        status: "active",
        createdAt: new Date().toISOString(),
    });
}

// CREATE EQUIPMENT EVENT
export async function createClientEquipmentEvent(input: EquipmentEventInput) {
    return sanityWriteClient.create({
        _type: "equipmentEvent",
        client: {
            _type: "reference",
            _ref: input.clientId,
        },
        eventType: input.eventType,
        lastEquipment: input.lastEquipment
            ? { _type: "reference", _ref: input.lastEquipment }
            : undefined,
        currentEquipment: input.currentEquipment
            ? { _type: "reference", _ref: input.currentEquipment }
            : undefined,
        reason: input.reason,
        notes: input.notes,
        eventDate: new Date().toISOString(),
    });
}

// UPDATE CLIENT
export async function updateClient(
    clientId: string,
    data: Partial<{
        name: string;
        email: string;
        phone: string;
        company: string;
    }>,
) {
    return sanityWriteClient.patch(clientId).set(data).commit();
}

// UPDATE CLIENT STATUS
export async function updateClientStatus(
    clientId: string,
    status: "active" | "inactive" | "archived",
) {
    return sanityWriteClient.patch(clientId).set({ status }).commit();
}

// UPDATE CLIENT EQUIPMENT
export async function updateClientEquipment(
    clientId: string,
    input: {
        equipmentOwned?: string[];
        equipmentNeeds?: string[];
    },
) {
    return sanityWriteClient
        .patch(clientId)
        .set({
            ...(input.equipmentOwned && {
                equipmentOwned: input.equipmentOwned.map((id) => ({
                    _type: "reference",
                    _ref: id,
                })),
            }),
            ...(input.equipmentNeeds && {
                equipmentNeeds: input.equipmentNeeds.map((id) => ({
                    _type: "reference",
                    _ref: id,
                })),
            }),
        })
        .commit();
}

// REPLACE CLIENT EQUIPMENT
export async function replaceClientEquipment(input: {
    clientId: string;
    lastEquipmentId: string;
    currentEquipmentId: string;
    reason?: string;
    notes?: string;
}) {
    // 1. Log history
    await createClientEquipmentEvent({
        clientId: input.clientId,
        eventType: "replacement",
        lastEquipment: input.lastEquipmentId,
        currentEquipment: input.currentEquipmentId,
        reason: input.reason,
        notes: input.notes,
    });

    // 2. Update client current state
    return sanityWriteClient
        .patch(input.clientId)
        .unset([`equipmentOwned[_ref=="${input.lastEquipmentId}"]`])
        .append("equipmentOwned", [{ _type: "reference", _ref: input.currentEquipmentId }])
        .commit();
}

// ARCHIVE
export async function archiveClient(clientId: string) {
    return updateClientStatus(clientId, "archived");
}

// DELETE
export async function deleteClient(clientId: string) {
    return sanityWriteClient.delete(clientId);
}
