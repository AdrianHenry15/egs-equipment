import { sanityReadClient } from "@/sanity/lib/client";
import EditProductForm from "./components/edit-product-form";
import { productsQuery } from "@/sanity/queries/products";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await sanityReadClient.fetch(productsQuery, {
        id,
    });
    const initialValues = {
        name: product.name ?? "",
        slug: {
            current: product.slug?.current ?? "",
        },
        description: product.description ?? "",
        mainCategory: product.mainCategory ?? "",
        brand: product.brand ?? "",
        tags: product.tags ?? [],
        image: product.image ?? null,
        details: product.details ?? null,
        manual: product.manual ?? null,
        usedBy: product.usedBy ?? "",
        popular: typeof product.popular === "boolean" ? product.popular : null,
    };

    return <EditProductForm id={id} initialValues={initialValues} />;
}
