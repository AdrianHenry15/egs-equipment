import { defineType, defineField } from "sanity";

export default defineType({
    name: "userSaves",
    title: "User Saves",
    type: "document",
    fields: [
        defineField({
            name: "clerkId",
            title: "Clerk ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "product",
            title: "Product",
            type: "reference",
            to: [{ type: "products" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],

    preview: {
        select: {
            title: "clerkId",
            subtitle: "product.name",
        },
    },
});
