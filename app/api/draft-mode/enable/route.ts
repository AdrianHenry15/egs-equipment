import { sanityReadClient } from "@/sanity/lib/client.server";
import { readToken } from "@/sanity/lib/token";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
    client: sanityReadClient.withConfig({ token: readToken }),
});
