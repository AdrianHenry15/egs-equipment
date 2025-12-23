import { sanityWriteClient } from "@/sanity/lib/client";

type CreateEquipmentEventInput = {
    clientId: string;
    eventType: "purchase" | "upgrade" | "replacement" | "repair" | "retired";
    lastEquipmentId?: string;
    currentEquipmentId?: string;
    reason?: string;
    notes?: string;
    eventDate?: string;
};

// CREATE EQUIPMENT EVENT
export async function createEquipmentEvent(input: CreateEquipmentEventInput) {
    if (input.eventType === "purchase" && !input.currentEquipmentId) {
        throw new Error("Purchase requires currentEquipmentId");
    }

    return sanityWriteClient.create({
        _type: "equipmentEvent",

        client: {
            _type: "reference",
            _ref: input.clientId,
        },

        eventType: input.eventType,

        ...(input.lastEquipmentId && {
            lastEquipment: {
                _type: "reference",
                _ref: input.lastEquipmentId,
            },
        }),

        ...(input.currentEquipmentId && {
            currentEquipment: {
                _type: "reference",
                _ref: input.currentEquipmentId,
            },
        }),

        reason: input.reason,
        notes: input.notes,

        eventDate: input.eventDate ?? new Date().toISOString(),
    });
}

// UPDATE EQUIPMENT EVENT
export async function updateEquipmentEvent(
    eventId: string,
    data: Partial<{
        eventType: CreateEquipmentEventInput["eventType"];
        reason: string;
        notes: string;
        eventDate: string;
    }>,
) {
    return sanityWriteClient.patch(eventId).set(data).commit();
}

// DELETE EQUIPMENT EVENT
export async function deleteEquipmentEvent(eventId: string) {
    return sanityWriteClient.delete(eventId);
}

// LOG EQUIPMENT PURCHASE
export async function logEquipmentPurchase(input: {
    clientId: string;
    productId: string;
    reason?: string;
    notes?: string;
}) {
    return createEquipmentEvent({
        clientId: input.clientId,
        eventType: "purchase",
        currentEquipmentId: input.productId,
        reason: input.reason ?? "Initial Purchase",
        notes: input.notes,
    });
}

// LOG EQUIPMENT UPGRADE
export async function logEquipmentUpgrade(input: {
    clientId: string;
    lastEquipmentId: string;
    currentEquipmentId: string;
    reason?: string;
    notes?: string;
}) {
    return createEquipmentEvent({
        clientId: input.clientId,
        eventType: "upgrade",
        lastEquipmentId: input.lastEquipmentId,
        currentEquipmentId: input.currentEquipmentId,
        reason: input.reason,
        notes: input.notes,
    });
}

// LOG EQUIPMENT REPLACEMENT
export async function logEquipmentReplacement(input: {
    clientId: string;
    lastEquipmentId: string;
    currentEquipmentId: string;
    reason?: string;
    notes?: string;
}) {
    return createEquipmentEvent({
        clientId: input.clientId,
        eventType: "replacement",
        lastEquipmentId: input.lastEquipmentId,
        currentEquipmentId: input.currentEquipmentId,
        reason: input.reason,
        notes: input.notes,
    });
}

// LOG EQUIPMENT REPAIR
export async function logEquipmentRepair(input: {
    clientId: string;
    productId: string;
    notes?: string;
}) {
    return createEquipmentEvent({
        clientId: input.clientId,
        eventType: "repair",
        lastEquipmentId: input.productId,
        notes: input.notes,
    });
}

// LOG EQUIPMENT RETIREMENT
export async function logEquipmentRetirement(input: {
    clientId: string;
    productId: string;
    reason?: string;
    notes?: string;
}) {
    return createEquipmentEvent({
        clientId: input.clientId,
        eventType: "retired",
        lastEquipmentId: input.productId,
        reason: input.reason ?? "End of Life",
        notes: input.notes,
    });
}
