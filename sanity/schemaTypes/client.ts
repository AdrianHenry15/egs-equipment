import { defineType, defineField } from "sanity";

export default defineType({
    name: "clients",
    title: "Clients",
    type: "document",

    fields: [
        defineField({
            name: "name",
            title: "Client Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "email",
            title: "Primary Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),

        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
        }),

        defineField({
            name: "company",
            title: "Company",
            type: "string",
        }),

        defineField({
            name: "website",
            title: "Website",
            type: "url",
        }),

        defineField({
            name: "status",
            title: "Client Status",
            type: "string",
            initialValue: "active",
            options: {
                list: [
                    { title: "Active", value: "active" },
                    { title: "Paused", value: "paused" },
                    { title: "Completed", value: "completed" },
                    { title: "Inactive", value: "inactive" },
                ],
            },
        }),

        defineField({
            name: "equipmentOwned",
            title: "Equipment Owned",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "products" }],
                },
            ],
        }),

        defineField({
            name: "equipmentNeeds",
            title: "Equipment Needs",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    "Line Markers",
                    "Goals",
                    "Aerators",
                    "Brushes",
                    "Sweepers",
                    "Top Dressers",
                    "Seeders",
                    "Mowers",
                    "Debris Blowers",
                    "Synthetic Turf Equipment",
                    "Natural Turf Equipment",
                ],
            },
        }),

        defineField({
            name: "equipmentInterest",
            title: "Equipment of Interest",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "products" }],
                },
            ],
        }),

        defineField({
            name: "notes",
            title: "Internal Notes",
            type: "text",
            rows: 4,
        }),

        defineField({
            name: "lead",
            title: "Original Lead",
            type: "reference",
            to: [{ type: "leads" }],
        }),

        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            readOnly: true,
        }),
    ],

    preview: {
        select: {
            title: "name",
            subtitle: "email",
        },
    },
});
