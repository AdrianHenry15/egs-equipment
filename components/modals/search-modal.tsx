"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse, { IFuseOptions } from "fuse.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

import { allProducts } from "@/lib/products/list/product-list";
import { ProductType } from "@/lib/types/product";
import { useModalStore } from "@/stores/modal-store/modal-store";

type FilterState = {
    category: string | null;
    brand: string | null;
};

const fuseOptions: IFuseOptions<ProductType> = {
    threshold: 0.3,
    keys: ["name"],
};

export default function SearchModal({ placeholder = "Search products..." }: { placeholder?: string }) {
    const router = useRouter();
    const { closeModal } = useModalStore();
    const inputRef = useRef<HTMLInputElement>(null);

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ProductType[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [filters, setFilters] = useState<FilterState>({
        category: null,
        brand: null,
    });

    const fuse = useMemo(() => new Fuse(allProducts, fuseOptions), []);

    useEffect(() => {
        const id = window.setTimeout(() => inputRef.current?.focus(), 50);
        return () => window.clearTimeout(id);
    }, []);

    const filteredResults = useMemo(() => {
        return results.filter((product) => {
            if (filters.category && product.mainCategory !== filters.category) {
                return false;
            }

            if (filters.brand && product.brand !== filters.brand) {
                return false;
            }

            return true;
        });
    }, [results, filters]);

    const handleSearch = (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            setSelectedIndex(0);
            return;
        }

        setResults(fuse.search(value).map((result) => result.item));
        setSelectedIndex(0);
    };

    const navigateToProduct = (product: ProductType) => {
        closeModal();
        router.push(`/products/${product.id}`);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            closeModal();
            return;
        }

        if (!filteredResults.length) return;

        if (event.key === "Enter") {
            const product = filteredResults[selectedIndex];

            if (product) {
                navigateToProduct(product);
            }

            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            setSelectedIndex((index) => Math.min(index + 1, filteredResults.length - 1));
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            setSelectedIndex((index) => Math.max(index - 1, 0));
        }
    };

    const getProductImage = (product: ProductType) => {
        const image = product.images?.[0];

        if (!image) return null;

        return typeof image === "string" ? image : image.src;
    };

    return (
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl sm:max-w-lg md:max-w-xl">
            <div className="relative">
                <AiOutlineSearch className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(event) => handleSearch(event.target.value)}
                    onKeyDown={handleKeyDown}
                    className="h-11 w-full rounded-xl border border-input bg-background pr-3 pl-10 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                />
            </div>

            {results.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <button
                        type="button"
                        onClick={() =>
                            setFilters((filter) => ({
                                ...filter,
                                category: filter.category ? null : "Golf & Sports Turf",
                            }))
                        }
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                            filters.category
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                        Golf
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setFilters((filter) => ({
                                ...filter,
                                brand: filter.brand ? null : "SISIS",
                            }))
                        }
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                            filters.brand
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                        SISIS
                    </button>
                </div>
            )}

            <div className="mt-3 max-h-[60vh] overflow-auto rounded-xl border border-border bg-background">
                {filteredResults.length === 0 && query && (
                    <div className="px-4 py-6 text-sm text-muted-foreground">No products found.</div>
                )}

                {filteredResults.map((product, index) => {
                    const imageSrc = getProductImage(product);
                    const isSelected = selectedIndex === index;

                    return (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            onClick={(event) => {
                                event.preventDefault();
                                navigateToProduct(product);
                            }}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition ${
                                isSelected ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                            }`}
                        >
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-card">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={product.name}
                                        fill
                                        sizes="48px"
                                        className="object-contain"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                                        No image
                                    </div>
                                )}
                            </div>

                            <div className="min-w-0">
                                <div className="truncate text-sm font-medium text-foreground">{product.name}</div>

                                {(product.brand || product.mainCategory) && (
                                    <div className="truncate text-xs text-muted-foreground">
                                        {[product.brand, product.mainCategory].filter(Boolean).join(" • ")}
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
