import { Metadata } from "next";
import ProductsClient from "./components/product-client";

export const metadata: Metadata = {
    title: "Products | EGS Equipment",
    description: "All of our products on one page",
};

export default async function ProductsPage() {
    return <ProductsClient />;
}
