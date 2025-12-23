import { defineType, defineField, ValidationContext } from "sanity";

export default defineType({
    name: "equipmentEvents",
    title: "Equipment Events",
    type: "document",
    validation: (Rule) =>
        Rule.required().custom((value: unknown, context: ValidationContext) => {
            const last = context.document?.lastEquipment;
            const current = context.document?.currentEquipment;
            if (typeof value !== "string") return true;

            const doc = context.document as any;

            if (value === "purchase" && (!current || last)) {
                return "Purchase requires currentEquipment only";
            }

            if ((value === "upgrade" || value === "replacement") && (!last || !current)) {
                return "Upgrade/Replacement requires both last and current equipment";
            }

            if ((value === "repair" || value === "retired") && (!last || current)) {
                return "Repair/Retired requires last equipment only";
            }

            return true;
        }),
    fields: [
        defineField({
            name: "client",
            title: "Client",
            type: "reference",
            to: [{ type: "clients" }],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "eventType",
            title: "Event Type",
            type: "string",
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    { title: "Purchase", value: "purchase" },
                    { title: "Upgrade", value: "upgrade" },
                    { title: "Replacement", value: "replacement" },
                    { title: "Repair", value: "repair" },
                    { title: "Retired", value: "retired" },
                ],
            },
        }),

        defineField({
            name: "lastEquipment",
            title: "Last Equipment",
            type: "reference",
            to: [{ type: "products" }],
            description: "Previous or replaced equipment",
        }),

        defineField({
            name: "currentEquipment",
            title: "Current Equipment",
            type: "reference",
            to: [{ type: "products" }],
            description: "New or upgraded equipment",
        }),

        defineField({
            name: "reason",
            title: "Reason / Context",
            type: "string",
            options: {
                list: [
                    "End of Life",
                    "Upgrade",
                    "Performance Issue",
                    "Cost Savings",
                    "New Field Type",
                    "Expansion",
                    "Other",
                ],
            },
        }),

        defineField({
            name: "notes",
            title: "Internal Notes",
            type: "text",
            rows: 3,
        }),

        defineField({
            name: "eventDate",
            title: "Event Date",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],

    preview: {
        select: {
            title: "eventType",
            subtitle: "client.name",
        },
    },
});
