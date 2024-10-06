"use client";

import React from "react";
import { motion } from "framer-motion";

import ProductItem from "./product-item";
import { ProductType } from "@/lib/types";
import { Category } from "@/lib/constants";
import { Products } from "@/lib/products";
import Link from "next/link";

interface IProductRowProps {
    category: Category;
    className?: string;
}

const ProductRow = (props: IProductRowProps) => {
    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };
    const { category } = props;
    const CategoryName = category.toLowerCase().replace(/-/g, " ");

    return (
        <div
            className={`${props.className} w-full bg-cyan-800 text-white relative border-y border-white shadow-lg overflow-x-hidden`}
        >
            <Link
                href={`/products/${CategoryName}`}
                className="text-4xl mb-24 z-50 font-semibold cursor-pointer text-white absolute mt-6 ml-6"
            >
                {category ?? "All Products"}
            </Link>
            <div className="flex items-center overflow-x-auto overflow-y-hidden h-[29rem] space-x-6 px-6">
                {Products.map((product: ProductType) => (
                    <motion.div
                        key={product.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }} // Trigger when 30% of the component is visible
                        transition={{ duration: 0.8, delay: 0.1 }} // Adjust delay for staggered effect
                    >
                        <div className={`flex-shrink-0`}>
                            <ProductItem product={product} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductRow;
