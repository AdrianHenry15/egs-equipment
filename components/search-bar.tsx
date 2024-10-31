"use client";

import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    AeratorProducts,
    DebrisBlowerProducts,
    NaturalProducts,
    SyntheticProducts,
} from "@/lib/products";
import { ProductType } from "@/lib/types";

const products = [
    ...SyntheticProducts,
    ...NaturalProducts,
    ...AeratorProducts,
    ...DebrisBlowerProducts,
];

const fuseOptions = {
    includeScore: true,
    threshold: 0.3,
    keys: ["name"],
};

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ProductType[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1); // Track the selected index

    const fuse = useMemo(() => new Fuse(products, fuseOptions), []);

    // Variants for animation
    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);

        if (searchTerm.trim() !== "") {
            const searchResults = fuse.search(searchTerm);
            setResults(searchResults.map((result) => result.item));
            setSelectedIndex(-1); // Reset selected index when search query changes
        } else {
            setResults([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (selectedIndex >= 0 && selectedIndex < results.length) {
                // Navigate to the selected product if there is one
                const selectedProduct = results[selectedIndex];
                window.location.href = `/products/${selectedProduct.id}`;
            } else if (query.trim() !== "") {
                // Navigate to the first result if there are results but none are selected
                const firstResult = results[0];
                if (firstResult) {
                    window.location.href = `/products/${firstResult.id}`;
                }
            }
        } else if (e.key === "ArrowDown") {
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prev) => Math.max(prev - 1, -1));
        }
    };

    const handleItemClick = (product: ProductType) => {
        setQuery(product.name); // Update input value to clicked product name
        setResults([]); // Clear results after selection
        window.location.href = `/products/${product.id}`; // Navigate to product page
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }} // Trigger when 10% of the component is visible
            transition={{ duration: 0.2, delay: 0.1 }} // Adjust delay for staggered effect
            className="relative my-4 w-[300px] md:w-[400px]"
        >
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown} // Add key down event
                className="w-[90%] text-black p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <AiOutlineSearch className="absolute left-4 top-4 text-gray-500" />

            {results.length > 0 && (
                <div className="border border-gray-300 absolute w-full bg-white text-black rounded-lg mt-1 max-h-40 overflow-auto">
                    {results.map((product, index) => (
                        <Link
                            onClick={() => handleItemClick(product)}
                            key={product.id}
                            href={`/products/${product.id}`}
                        >
                            <div
                                className={`flex justify-between items-center py-2 px-4 cursor-pointer ${
                                    selectedIndex === index ? "bg-gray-100" : ""
                                }`} // Highlight selected item
                                onMouseEnter={() => setSelectedIndex(index)} // Highlight on hover
                            >
                                <span>{product.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default SearchBar;
