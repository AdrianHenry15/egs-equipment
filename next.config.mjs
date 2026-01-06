/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
        NEXT_PRIVATE_KEY: process.env.NEXT_PRIVATE_KEY,
        SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
        SANITY_BACKEND_TOKEN: process.env.SANITY_BACKEND_TOKEN,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/images/**"
            }
        ]
    }
};

export default nextConfig;
