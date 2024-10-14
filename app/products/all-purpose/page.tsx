import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Purpose | Eckert Equipment",
    description: "For everything you need for freshness",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function AllPurposeProductPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            All Purpose Product Page
        </div>
    );
}
