import FinanceOptions from "@/components/layout/finance-options";
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
        <div className="flex w-full relative bg-white justify-center items-center">
            <FinanceOptions />
        </div>
    );
}
