"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductItem from "./product-item";
import { EquipmentBrand, ProductType } from "@/lib/types";
import { Category } from "@/lib/types";
import {
    AeratorProducts,
    DebrisBlowerProducts,
    NaturalProducts,
    SyntheticProducts,
} from "@/lib/products";

interface IProductRowProps {
    category: Category;
    title?: string;
    brand?: EquipmentBrand; // Optional brand prop
    className?: string;
}

const ProductRow = (props: IProductRowProps) => {
    const { category, brand, className, title } = props;

    // Variants for animation
    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    // This function selects the appropriate products array based on the category and optional brand
    const getProductsByCategory = (): ProductType[] => {
        let products: ProductType[] = [];

        switch (category) {
            case "Aerator":
                products = AeratorProducts;
                break;
            case "Debris Blower":
                products = DebrisBlowerProducts;
                break;
            case "Natural":
                products = NaturalProducts;
                break;
            case "Synthetic":
                products = SyntheticProducts;
                break;
            default:
                return []; // Return an empty array if no matching category
        }

        // Filter by brand if provided
        if (brand) {
            products = products.filter((product) => product.equipment_details.brand === brand);
        }

        return products;
    };

    const products = getProductsByCategory();
    const categoryName = category.toLowerCase().replace(/-/g, " "); // Formats category name

    return (
        <div
            className={`${className} w-full bg-zinc-600 text-white relative border-y border-white shadow-lg overflow-x-hidden`}
        >
            {/* Category name as a link */}
            <Link
                href={`/products/${categoryName}`}
                className="text-4xl mb-24 z-50 cursor-pointer text-white absolute mt-6 ml-6"
            >
                {brand ? title : category}
            </Link>

            {/* Products carousel */}
            <div className="flex items-center overflow-x-auto overflow-y-hidden h-[29rem] space-x-6 px-6">
                {products.map((product: ProductType) => (
                    <motion.div
                        key={product.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the component is visible
                        transition={{ duration: 0.8, delay: 0.1 }} // Adjust delay for staggered effect
                    >
                        <div className="flex-shrink-0">
                            <ProductItem product={product} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductRow;
