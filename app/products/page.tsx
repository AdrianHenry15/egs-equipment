import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | Eckert Equipment",
    description: "All of our products on one page",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default function ProductsPage() {
    return <div className="flex flex-col justify-between relative w-full">Products Page</div>;
}
