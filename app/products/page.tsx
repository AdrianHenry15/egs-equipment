import type { Metadata } from "next";

import ProductsClient from "./components/product-client";

export const metadata: Metadata = {
    title: "Professional Turf & Sports Field Equipment",
    description:
        "Browse professional turf maintenance, field marking, and sports field equipment from Dennis, SISIS, Syn-Pro, Harrod Sport, Buffalo Turbine, Pitchmark, and more.",

    keywords: [
        "turf equipment",
        "sports field equipment",
        "golf course equipment",
        "Dennis mowers",
        "SISIS equipment",
        "Syn-Pro sprayers",
        "Buffalo Turbine",
        "Pitchmark",
        "Harrod Sport",
        "field maintenance equipment",
        "athletic field equipment",
        "groundskeeping equipment",
    ],

    openGraph: {
        title: "Professional Turf & Sports Field Equipment | EGS Equipment",
        description:
            "Browse professional turf maintenance, field marking, and sports field equipment from industry-leading brands.",
        type: "website",
        url: "/products",
        images: [
            {
                url: "/logos/egs-swoosh.png",
                width: 1200,
                height: 630,
                alt: "EGS Equipment",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Professional Turf & Sports Field Equipment | EGS Equipment",
        description: "Browse professional turf maintenance and sports field equipment from trusted brands.",
        images: ["/logos/egs-swoosh.png"],
    },

    alternates: {
        canonical: "/products",
    },
};

export default async function ProductsPage() {
    return <ProductsClient />;
}
