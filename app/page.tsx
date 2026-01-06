import HomeSplash from "@/app/components/home-splash";
import PoweredBy from "@/app/components/powered-by";
import FeaturedProducts from "./components/featured-products/featured-products";
import FeaturedEvents from "./components/featured-events/featured-events";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <HomeSplash />
            <PoweredBy />
            <FeaturedProducts />
            <FeaturedEvents />
        </div>
    );
}
