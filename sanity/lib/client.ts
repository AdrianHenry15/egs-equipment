import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { writeToken } from "./token";

export const sanityWriteClient = createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    stega: { studioUrl: "/studio" },
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const sanityReadClient = createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    stega: { studioUrl: "/studio" },
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
