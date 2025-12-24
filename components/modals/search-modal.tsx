"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Fuse, { IFuseOptions } from "fuse.js";
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

export default function SearchModal({
    placeholder = "Search products...",
}: {
    placeholder?: string;
}) {
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

    // Autofocus when modal opens
    useEffect(() => {
        const id = setTimeout(() => inputRef.current?.focus(), 50);
        return () => clearTimeout(id);
    }, []);

    const filteredResults = useMemo(() => {
        let base = results;

        if (filters.category) {
            base = base.filter((p) => p.mainCategory === filters.category);
        }

        if (filters.brand) {
            base = base.filter((p) => p.brand === filters.brand);
        }

        return base;
    }, [results, filters]);

    const handleSearch = (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            setSelectedIndex(0);
            return;
        }

        const searchResults = fuse.search(value).map((r) => r.item);
        setResults(searchResults);
        setSelectedIndex(0);
    };

    const navigate = (product: ProductType) => {
        closeModal();
        router.push(`/products/${product.id}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!filteredResults.length) return;

        switch (e.key) {
            case "Enter":
                navigate(filteredResults[selectedIndex]);
                break;
            case "ArrowDown":
                setSelectedIndex((i) => Math.min(i + 1, filteredResults.length - 1));
                break;
            case "ArrowUp":
                setSelectedIndex((i) => Math.max(i - 1, 0));
                break;
            case "Escape":
                closeModal();
                break;
        }
    };

    return (
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl bg-white p-4 shadow-2xl">
            {/* Search Input */}
            <div className="relative">
                <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-black focus:outline-none focus:ring focus:ring-green-700"
                />
            </div>

            {/* Filters */}
            {results.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 text-sm">
                    <button
                        onClick={() =>
                            setFilters((f) => ({
                                ...f,
                                category: f.category ? null : "Golf & Sports Turf",
                            }))
                        }
                        className={`px-3 py-1 rounded-full border ${
                            filters.category ? "bg-green-700 text-white" : "bg-gray-100"
                        }`}
                    >
                        Golf
                    </button>

                    <button
                        onClick={() =>
                            setFilters((f) => ({
                                ...f,
                                brand: f.brand ? null : "SISIS",
                            }))
                        }
                        className={`px-3 py-1 rounded-full border ${
                            filters.brand ? "bg-green-700 text-white" : "bg-gray-100"
                        }`}
                    >
                        SISIS
                    </button>
                </div>
            )}

            {/* Results */}
            <div className="mt-3 max-h-[60vh] overflow-auto rounded-lg border">
                {filteredResults.length === 0 && query && (
                    <div className="px-4 py-6 text-sm text-gray-500">No products found.</div>
                )}

                {filteredResults.map((product, index) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={() => navigate(product)}
                    >
                        <div
                            className={`px-4 py-2 cursor-pointer ${
                                selectedIndex === index ? "bg-gray-100" : ""
                            }`}
                            onMouseEnter={() => setSelectedIndex(index)}
                        >
                            <div className="font-medium">{product.name}</div>
                            {(product.brand || product.mainCategory) && (
                                <div className="text-xs text-gray-500">
                                    {[product.brand, product.mainCategory]
                                        .filter(Boolean)
                                        .join(" • ")}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
