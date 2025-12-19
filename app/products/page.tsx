import { Metadata } from "next";
import ProductsClient from "./components/product-client";

export const metadata: Metadata = {
    title: "Products | EGS Equipment",
    description: "All of our products on one page",
    icons: {
        icon: "/logos/placeholder.webp",
    },
};

export default async function ProductsPage() {
    return <ProductsClient />;
}
