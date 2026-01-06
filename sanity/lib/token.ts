import "server-only";

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

export const readToken = requireEnv("SANITY_READ_TOKEN");
export const writeToken = requireEnv("SANITY_BACKEND_TOKEN");
