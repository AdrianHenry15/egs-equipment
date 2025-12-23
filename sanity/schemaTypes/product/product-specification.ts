import { defineType, defineField } from "sanity";

export default defineType({
    name: "productSpecifications",
    title: "Product Specs",
    type: "object",

    fields: [
        defineField({
            name: "specs_description",
            type: "text",
        }),

        defineField({
            name: "features",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "specifications",
            type: "productSpecifications",
        }),

        defineField({
            name: "quality",
            type: "string",
            options: {
                list: ["1", "2", "3", "4", "5"],
            },
        }),

        defineField({
            name: "video",
            type: "url",
        }),
    ],
});
