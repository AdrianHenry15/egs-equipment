import { Metadata } from "next";

import Splash from "@/components/splash";
import SplashPic from "@/public/orange-tractor.jpg";
import ProductRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Products | EGS Equipment",
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
            <ProductRow
                brandLogos={["Syn-Pro"]}
                title="Engineered for Excellence – The Perfect Turf, Every Time."
                category="Synthetic"
            />
            <ProductRow
                brandLogos={["SISIS", "Dennis", "Eastman"]}
                title="Naturally Strong, Perfectly Green – Equipment Built for Your Turf."
                category="Natural"
            />
            <ProductRow
                title="Revitalize Your Turf – Aerators for Healthier, Greener Lawns."
                brandLogos={["SISIS"]}
                category="Aerator"
            />
            <ProductRow
                className="pb-48"
                title="Clear the Way – Power-Packed Debris Blowers for a Pristine Lawn."
                brandLogos={["Buffalo Turbine"]}
                category="Debris Blower"
            />
        </div>
    );
}
