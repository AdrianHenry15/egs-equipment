import { Metadata } from "next";

import Splash from "@/components/splash";
import SplashPic from "@/public/orange-tractor.jpg";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Products | Eckert Equipment",
    description: "All of our products on one page",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={SplashPic}
                title="All Products"
            />
            <ProductRow category="Natural" />
            <ProductRow category="Synthetic" />
            <ProductRow category="Aerator" />
            <ProductRow category="Debris Blower" />
        </div>
    );
}
