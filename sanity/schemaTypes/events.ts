import { defineType, defineField } from "sanity";

export default defineType({
    name: "events",
    title: "Events",
    type: "document",

    fields: [
        /* -------------------- */
        /* CORE INFO */
        /* -------------------- */

        defineField({
            name: "name",
            title: "Event Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "type",
            title: "Event Type",
            type: "string",
            options: {
                list: [
                    { title: "Trade Show", value: "trade_show" },
                    { title: "Demo Day", value: "demo_day" },
                    { title: "Tournament", value: "tournament" },
                    { title: "Conference", value: "conference" },
                    { title: "Client Visit", value: "client_visit" },
                    { title: "Other", value: "other" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        }),

        /* -------------------- */
        /* DATE & LOCATION */
        /* -------------------- */

        defineField({
            name: "startDate",
            title: "Start Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "endDate",
            title: "End Date",
            type: "datetime",
        }),

        defineField({
            name: "location",
            title: "Location",
            type: "object",
            fields: [
                defineField({
                    name: "venue",
                    title: "Venue",
                    type: "string",
                }),
                defineField({
                    name: "city",
                    title: "City",
                    type: "string",
                }),
                defineField({
                    name: "state",
                    title: "State / Province",
                    type: "string",
                }),
                defineField({
                    name: "country",
                    title: "Country",
                    type: "string",
                }),
            ],
        }),

        /* -------------------- */
        /* BUSINESS CONTEXT */
        /* -------------------- */

        defineField({
            name: "clients",
            title: "Related Clients",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "clients" }],
                },
            ],
        }),

        defineField({
            name: "productsFeatured",
            title: "Products Featured",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "products" }],
                },
            ],
        }),

        defineField({
            name: "leadsGenerated",
            title: "Leads Generated",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "leads" }],
                },
            ],
        }),

        /* -------------------- */
        /* MEDIA & ASSETS */
        /* -------------------- */

        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
        }),

        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [{ type: "image" }],
        }),

        /* -------------------- */
        /* META */
        /* -------------------- */

        defineField({
            name: "status",
            title: "Event Status",
            type: "string",
            initialValue: "upcoming",
            options: {
                list: [
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Completed", value: "completed" },
                    { title: "Cancelled", value: "cancelled" },
                ],
            },
        }),

        defineField({
            name: "notes",
            title: "Internal Notes",
            type: "text",
            rows: 4,
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
            subtitle: "type",
            media: "coverImage",
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle ? subtitle.replace("_", " ").toUpperCase() : "EVENT",
            };
        },
    },
});
