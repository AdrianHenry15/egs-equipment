"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { allProducts } from "@/lib/products/list/product-list";
import { ProductType } from "@/lib/types/product";

const products = allProducts;

const fuseOptions = {
    includeScore: true,
    threshold: 0.3,
    keys: ["name"],
};

const SearchBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ProductType[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);

    const fuse = useMemo(() => new Fuse(products, fuseOptions), []);

    // Autofocus input when modal opens
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        if (open) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim()) {
            const searchResults = fuse.search(value);
            setResults(searchResults.map((r) => r.item));
            setSelectedIndex(-1);
        } else {
            setResults([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const target = results[selectedIndex] ?? results[0];
            if (target) {
                window.location.href = `/products/${target.id}`;
                setOpen(false);
            }
        }

        if (e.key === "ArrowDown") {
            setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        }

        if (e.key === "ArrowUp") {
            setSelectedIndex((i) => Math.max(i - 1, -1));
        }
    };

    const handleSelect = (product: ProductType) => {
        setOpen(false);
        window.location.href = `/products/${product.id}`;
    };

    return (
        <>
            {/* Trigger */}
            <button
                onClick={() => setOpen(true)}
                aria-label="Open search"
                className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
                <AiOutlineSearch className="text-xl text-gray-700" />
            </button>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="fixed z-50 top-24 left-1/2 w-[90%] max-w-xl -translate-x-1/2 rounded-xl bg-white p-4 shadow-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="relative">
                                <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search products..."
                                    value={query}
                                    onChange={handleSearch}
                                    onKeyDown={handleKeyDown}
                                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-black focus:outline-none focus:ring focus:ring-green-700"
                                />
                            </div>

                            {results.length > 0 && (
                                <div className="mt-2 max-h-60 overflow-auto rounded-lg border">
                                    {results.map((product, index) => (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.id}`}
                                            onClick={() => handleSelect(product)}
                                        >
                                            <div
                                                className={`px-4 py-2 cursor-pointer ${
                                                    selectedIndex === index ? "bg-gray-100" : ""
                                                }`}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                            >
                                                {product.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SearchBar;
