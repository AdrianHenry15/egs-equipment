import "server-only";

import { createClient } from "next-sanity";
import { writeToken, readToken } from "./token";

export const sanityWriteClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! as string,
    apiVersion: "2025-02-19",
    token: writeToken,
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const sanityReadClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! as string,
    apiVersion: "2025-02-19",
    token: readToken,
    stega: { studioUrl: "/studio" },
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
