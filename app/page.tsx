import Splash from "@/components/splash";
import FieldPic from "@/public/machine-2.jpg";
import ProductRow from "../components/products/product-row";
import HomeSplash from "@/components/layout/home/home-splash";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <HomeSplash />
            {/* <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={FieldPic}
                title="EGS Equipment"
            /> */}
            {/* <ProductRow
                brandLogos={["Syn-Pro"]}
                className="pt-24"
                title="Precision tools for perfect Synthetic Turf"
                category="Synthetic"
            />
            <ProductRow
                brandLogos={["SISIS", "Dennis", "Eastman"]}
                title="Expert equipment for thriving Natural Grass."
                category="Natural"
            />
            <ProductRow
                brandLogos={["SISIS"]}
                title="Aerators that breathe life into your lawn."
                category="Aerator"
            />
            <ProductRow
                className="pb-48"
                brandLogos={["Buffalo Turbine"]}
                title="Debris blowers that clear the way for a pristine landscape."
                category="Debris Blower"
            /> */}
        </div>
    );
}
