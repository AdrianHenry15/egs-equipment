import { Metadata } from "next";

import Splash from "@/components/splash";
import SplashPic from "@/public/field-lines.jpg";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Synthetic Turf | Eckert Equipment",
    description: "Performance Meets Perfection",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function SyntheticProductPage() {
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
                brandLogos={["Syn-Pro"]}
                category="Synthetic"
                brandFilter="Syn-Pro"
                title="Synthetic Turf Equipment By Syn-Pro"
            />
        </div>
    );
}
