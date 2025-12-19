import HomeSplash from "@/app/components/home-splash";
import PoweredBy from "@/app/components/powered-by";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <HomeSplash />
            <PoweredBy />
        </div>
    );
}
