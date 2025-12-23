type EquipmentEventType = "purchase" | "upgrade" | "replacement" | "repair" | "retired";

export function validateEquipmentEvent(input: {
    eventType: EquipmentEventType;
    lastEquipmentId?: string;
    currentEquipmentId?: string;
}) {
    const { eventType, lastEquipmentId, currentEquipmentId } = input;

    switch (eventType) {
        case "purchase":
            if (!currentEquipmentId) {
                throw new Error("Purchase requires currentEquipmentId");
            }
            if (lastEquipmentId) {
                throw new Error("Purchase cannot have lastEquipmentId");
            }
            break;

        case "upgrade":
        case "replacement":
            if (!lastEquipmentId || !currentEquipmentId) {
                throw new Error(
                    `${eventType} requires both lastEquipmentId and currentEquipmentId`,
                );
            }
            break;

        case "repair":
        case "retired":
            if (!lastEquipmentId) {
                throw new Error(`${eventType} requires lastEquipmentId`);
            }
            if (currentEquipmentId) {
                throw new Error(`${eventType} cannot have currentEquipmentId`);
            }
            break;

        default:
            throw new Error("Invalid equipment event type");
    }
}
