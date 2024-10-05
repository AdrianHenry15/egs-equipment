import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Natural | Eckert Equipment",
    description: "Nurture Nature, One Lawn at a Time!",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function NaturalProductPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Natural Product Page
        </div>
    );
}
