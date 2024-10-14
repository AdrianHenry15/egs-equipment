import { Metadata } from "next";

import Splash from "@/components/splash";
import SplashPic from "@/public/machine-3.jpg";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "All Purpose | Eckert Equipment",
    description: "For everything you need for freshness",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AllPurposeProductPage() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={SplashPic}
                title="All Purpose Equipment"
            />
            {/* All Purpose */}
            <ProductRow category="Aerator" brand="SISIS" title="Aerators By SISIS" />
            <ProductRow
                category="Debris Blower"
                brand="Buffalo Turbine"
                title="Debris Blowers By Buffalo Turbine"
            />
        </div>
    );
}
