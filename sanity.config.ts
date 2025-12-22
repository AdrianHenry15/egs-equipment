"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "@/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! as string;

export default defineConfig({
    basePath: "/studio", // `basePath` must match the route of your Studio
    projectId,
    dataset,
    plugins: [structureTool()],
    schema,
});
