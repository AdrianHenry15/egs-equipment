import { defineType, defineField } from "sanity";

export default defineType({
    name: "leads",
    title: "Leads",
    type: "document",

    fields: [
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
        }),

        defineField({
            name: "email",
            title: "Email",
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
            name: "equipmentNeeds",
            title: "Equipment Needs (Categories)",
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
            title: "Specific Equipment of Interest",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "products" }],
                },
            ],
        }),

        defineField({
            name: "message",
            title: "Message / Notes",
            type: "text",
            rows: 4,
        }),

        defineField({
            name: "source",
            title: "Lead Source",
            type: "string",
            options: {
                list: ["Website Form", "Email", "Referral", "Cold Outreach", "Google", "Other"],
            },
        }),

        defineField({
            name: "status",
            title: "Status",
            type: "string",
            initialValue: "new",
            options: {
                list: [
                    { title: "New", value: "new" },
                    { title: "Contacted", value: "contacted" },
                    { title: "Qualified", value: "qualified" },
                    { title: "Lost", value: "lost" },
                    { title: "Converted to Client", value: "converted" },
                ],
            },
        }),

        defineField({
            name: "priority",
            title: "Priority",
            type: "string",
            options: {
                list: ["Low", "Medium", "High"],
            },
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
            title: "email",
            subtitle: "status",
        },
    },
});
