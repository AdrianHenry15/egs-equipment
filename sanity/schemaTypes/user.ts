import { defineType, defineField } from "sanity";

export default defineType({
    name: "users",
    title: "Users",
    type: "document",
    fields: [
        defineField({
            name: "clerkId",
            title: "Clerk ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),

        defineField({
            name: "role",
            title: "Role",
            type: "string",
            options: {
                list: [
                    { title: "Customer", value: "customer" },
                    { title: "Admin", value: "admin" },
                ],
                layout: "dropdown",
            },
            initialValue: "customer",
        }),

        defineField({
            name: "dateJoined",
            title: "Date Joined",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],

    preview: {
        select: {
            title: "name",
            subtitle: "email",
        },
    },
});
