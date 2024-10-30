import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Finance Options | EGS Equipment",
    description: "Our finance options",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

// TODO: Canon Financial Services
//
export default function FinanceOptionsPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative w-full">
            Finance Options Page
        </div>
    );
}
