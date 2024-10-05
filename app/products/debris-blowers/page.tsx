import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Debris Blowers | Eckert Equipment",
    description: "Clear The Clutter, Unleash The Clean",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function DebrisBlowersProductPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Debris Blowers Product Page
        </div>
    );
}
