import "server-only";

export const readToken = process.env.SANITY_READ_TOKEN;
export const writeToken = process.env.SANITY_BACKEND_TOKEN;

if (!readToken) {
    throw new Error("Missing SANITY_READ_TOKEN");
}
if (!writeToken) {
    throw new Error("Missing SANITY_BACKEND_TOKEN");
}
