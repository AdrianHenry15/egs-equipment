import type { Metadata } from "next";
import PoweredBy from "@/app/components/powered-by";
import FeaturedProducts from "./components/featured-products/featured-products";
import FeaturedEvents from "./components/featured-events/featured-events";
import EquipmentDirectory from "./components/equipment-directory";
import HomeSplash from "./components/home-splash";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

export default function Home() {
    return (
        <main className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
            <HomeSplash />
            <EquipmentDirectory />

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
