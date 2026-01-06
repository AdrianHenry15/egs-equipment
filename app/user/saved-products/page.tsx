import { sanityReadClient } from "@/sanity/lib/client";
import { getUserSavedProductsQuery } from "@/sanity/queries/user-saves";
import Link from "next/link";

export default async function SavedProductsPage() {
    const saves = await sanityReadClient.fetch(getUserSavedProductsQuery);

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                    Saved Products
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Products users have bookmarked for later.
                </p>
            </header>

            {/* Empty State */}
            {(!saves || saves.length === 0) && (
                <div className="rounded-xl border border-dashed border-emerald-200 dark:border-emerald-900 bg-white dark:bg-gray-950 py-20 text-center">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        No saved products yet
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        Saved items will appear here once users start bookmarking products.
                    </p>
                </div>
            )}

            {/* Grid */}
            {saves && saves.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {saves.map((save: any, index: number) => (
                        <div
                            key={`${save._id}-${index}`}
                            className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm transition hover:shadow-md"
                        >
                            {/* Accent */}
                            <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-linear-to-r from-emerald-500 to-yellow-400" />

                            {/* Content */}
                            <div className="flex h-full flex-col justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                        {save.product?.name ?? "Unknown Product"}
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Saved by user
                                        <span className="ml-1 font-mono text-xs text-gray-400">
                                            {save.clerkId}
                                        </span>
                                    </p>

                                    {save.product?.brand && (
                                        <p className="mt-2 inline-flex items-center rounded-md bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                                            {save.product.brand}
                                        </p>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">
                                        {new Date(save.createdAt).toLocaleDateString()}
                                    </span>

                                    {save.product?._id && (
                                        <Link
                                            href={`/admin/products/${save.product._id}`}
                                            className="text-sm font-medium text-emerald-700 hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300"
                                        >
                                            View product →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
