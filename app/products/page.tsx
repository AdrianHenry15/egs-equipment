import { Metadata } from "next";

import Splash from "@/components/splash";
import SplashPic from "@/public/splash/splash-usa-baseball.png";
import ProductList from "@/components/layout/products-page/product-list";
import FilterSidebar from "@/components/layout/products-page/filter-sidebar";
import MobileSidebarFilter from "@/components/layout/products-page/mobile-sidebar-filter";

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
                link2="/parts-form"
                link_title_2="Parts & Services"
                img={SplashPic}
                title="Products"
            />
            <div className="flex bg-white">
                <MobileSidebarFilter />
                <FilterSidebar />
                <ProductList />
            </div>
        </div>
    );
}
