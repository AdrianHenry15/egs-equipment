import { Metadata } from "next";

import Splash from "@/components/splash";

import SplashPic from "@/public/baseball-field.jpg";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Debris Blowers | Eckert Equipment",
    description: "Clear The Clutter, Unleash The Clean",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function DebrisBlowersProductPage() {
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
                brandLogos={["Buffalo Turbine"]}
                category="Debris Blower"
                brandFilter="Buffalo Turbine"
                title="Debris Blower Equipment By Buffalo Turbine"
            />
        </div>
    );
}
