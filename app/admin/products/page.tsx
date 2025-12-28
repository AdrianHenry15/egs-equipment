import { sanityReadClient } from "@/sanity/lib/client";
import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import { Products } from "@/sanity.types";
import Link from "next/link";
import { productsQuery } from "@/sanity/queries/products";

export default async function ProductsPage() {
    const products: Products[] = await sanityReadClient.fetch(productsQuery);

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Products</h1>
                    <p className="text-sm text-gray-500">Manage products</p>
                </div>

                <Link
                    href="/admin/products/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create Product
                </Link>
            </div>

            {/* Empty State */}
            {(!products || products.length === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No products yet</p>
                    <p className="text-sm">
                        Products will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {products && products.length > 0 && (
                <List>
                    {products.map((product) => (
                        <ListItem
                            key={product._id}
                            title={product.name ?? "Untitled Product"}
                            description={product.description}
                            meta={`${product.brand ?? "No Brand"} • ${product.popular ? "Popular" : "Regular"}`}
                            href={`/admin/products/${product._id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
