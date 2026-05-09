import PoweredBy from "@/app/components/powered-by";
import FeaturedProducts from "./components/featured-products/featured-products";
import FeaturedEvents from "./components/featured-events/featured-events";
// import FlyerSection from "@/components/flyer-section";
import HomeSplash from "./components/home-splash";

export default function Home() {
    return (
        <main className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
            {/* <FlyerSection /> */}

            <HomeSplash />

            <section className="border-t border-border">
                <PoweredBy />
            </section>

            <section className="border-t border-border">
                <FeaturedProducts />
            </section>

            <section className="border-t border-border">
                <FeaturedEvents />
            </section>
        </main>
    );
}
