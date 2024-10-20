import { Metadata } from "next";

import SplashPic from "@/public/soccer-field-2.jpg";

import Splash from "@/components/splash";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Aerators | Eckert Equipment",
    description: "Breathe Life Into Your Lawn",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AeratorsProductPage() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={SplashPic}
                title="Synthetic Turf Equipment"
            />
            <ProductRow
                className="pb-48"
                brandLogos={["SISIS"]}
                category="Aerator"
                brandFilter="SISIS"
                title="Aerators by SISIS"
            />
        </div>
    );
}
