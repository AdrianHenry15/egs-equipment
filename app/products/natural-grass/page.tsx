import { Metadata } from "next";

import ProductRow from "@/components/products/product-row";
import Splash from "@/components/splash";
import SplashPic from "@/public/landscape.jpg";

export const metadata: Metadata = {
    title: "Natural Grass | Eckert Equipment",
    description: "Nurture Nature, One Lawn at a Time!",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function NaturalGrassProductPage() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={SplashPic}
                title="Natural Grass Equipment"
            />
            <ProductRow category="Natural" brand="Dennis" title="Natural By Dennis" />
            <ProductRow category="Natural" brand="SISIS" title="Natural By SISIS" />
        </div>
    );
}
