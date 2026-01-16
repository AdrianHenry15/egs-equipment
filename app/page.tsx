import PoweredBy from "@/app/components/powered-by";
import FeaturedProducts from "./components/featured-products/featured-products";
import FeaturedEvents from "./components/featured-events/featured-events";
import FlyerSection from "@/components/flyer-section";
import HomeSplash from "./components/home-splash";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <FlyerSection />
            <HomeSplash />
            <PoweredBy />
            <FeaturedProducts />
            <FeaturedEvents />
        </div>
    );
}
