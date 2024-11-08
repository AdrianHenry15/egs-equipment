import HomeSplash from "@/components/layout/home/home-splash";
import PoweredBy from "@/components/layout/home/powered-by";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <HomeSplash />
            <PoweredBy />
        </div>
    );
}
