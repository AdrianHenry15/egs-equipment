/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    },
    async redirects() {
        return [
            { source: "/contact-us", destination: "/contact", permanent: true },
            { source: "/parts-services", destination: "/parts-form", permanent: true },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};

export default nextConfig;
