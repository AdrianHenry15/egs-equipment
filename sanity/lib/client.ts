import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { writeToken } from "./token";
export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    stega: { studioUrl: "/studio" },
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
