import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aerators | Eckert Equipment",
    description: "Breathe Life Into Your Lawn",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AeratorsProductPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Aerators Product Page
        </div>
    );
}
