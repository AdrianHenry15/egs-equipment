import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Synthetic Turf | Eckert Equipment",
    description: "Performance Meets Perfection",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function SyntheticProductPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Synthetic Turf Product Page
        </div>
    );
}
