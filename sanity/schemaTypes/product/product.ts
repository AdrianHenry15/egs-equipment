import { defineType, defineField } from "sanity";

export default defineType({
    name: "products",
    title: "Products",
    type: "document",

    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "description",
            type: "text",
            rows: 4,
        }),

        defineField({
            name: "mainCategory",
            type: "string",
            options: {
                list: [
                    "Sport",
                    "Synthetic Turf",
                    "Natural Turf",
                    "Line Marker",
                    "Hand Tool",
                    "Goal",
                    "Debris Blower",
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "brand",
            type: "string",
            options: {
                list: [
                    "Howardsons",
                    "Harrod Sports",
                    "Pitchmark",
                    "Buffalo Turbine",
                    "Eastman",
                    "Dennis",
                    "SISIS",
                    "Syn-Pro",
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
        }),

        defineField({
            name: "details",
            type: "details",
        }),

        defineField({
            name: "manual",
            type: "file",
        }),

        defineField({
            name: "usedBy",
            type: "string",
            options: {
                list: [
                    "Golf",
                    "Soccer",
                    "American Football",
                    "Baseball",
                    "Lacrosse",
                    "Sports Turf",
                    "Synthetic Turf",
                ],
            },
        }),

        defineField({
            name: "popular",
            type: "boolean",
        }),
    ],

    preview: {
        select: {
            title: "name",
            subtitle: "brand",
            media: "image",
        },
    },
});
