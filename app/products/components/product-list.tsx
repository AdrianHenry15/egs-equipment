import Link from "next/link";
import ProductCard from "./product-card";
import { allProducts } from "@/lib/products/list/product-list";

export type CatalogSearchParams = Record<string, string | string[] | undefined>;

const PAGE_SIZE = 24;

export default function ProductList({ searchParams }: { searchParams: CatalogSearchParams }) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(searchParams)) {
        if (Array.isArray(value)) {
            value.forEach((entry) => params.append(key, entry));
        } else if (value !== undefined) {
            params.set(key, value);
        }
    }

    const category = params.get("category");
    const brand = params.get("brand");
    const tag = params.get("tag");
    const client = params.get("client");

    const filterLabel = (tag ?? brand ?? category ?? client ?? "All equipment")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const filtered = allProducts.filter((product) => {
        if (category && product.mainCategory !== category) return false;
        if (brand && product.brand !== brand) return false;
        if (client && product.usedBy !== client) return false;
        if (tag && !product.tags.some((productTag) => productTag === tag)) return false;
        return true;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const requestedPage = Number(params.get("page"));
    const page = Number.isInteger(requestedPage) ? Math.min(totalPages, Math.max(1, requestedPage)) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const visibleProducts = filtered.slice(offset, offset + PAGE_SIZE);

    const pageHref = (pageNumber: number) => {
        const next = new URLSearchParams(params);
        if (pageNumber === 1) next.delete("page");
        else next.set("page", String(pageNumber));
        const query = next.toString();
        return query ? `/products?${query}` : "/products";
    };

    return (
        <section className="min-w-0 flex-1 px-5 py-8 sm:px-8">
            <header className="mb-6">
                <h2 className="text-3xl font-semibold tracking-tight">{filterLabel}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    {filtered.length} {filtered.length === 1 ? "product" : "products"}
                </p>
            </header>

            {visibleProducts.length ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-border bg-card p-8 text-card-foreground">
                    <p>No products match your filters.</p>
                    <Link href="/products" className="mt-3 inline-block font-semibold text-primary underline">
                        View all equipment
                    </Link>
                </div>
            )}

            {totalPages > 1 && (
                <nav
                    aria-label="Catalog pages"
                    className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm"
                >
                    <span className="text-muted-foreground">
                        Page {page} of {totalPages}
                    </span>
                    <div className="flex gap-4 font-semibold text-primary">
                        {page > 1 && <Link href={pageHref(page - 1)}>Previous</Link>}
                        {page < totalPages && <Link href={pageHref(page + 1)}>Next</Link>}
                    </div>
                </nav>
            )}
        </section>
    );
}
