"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProductsMenuItems } from "@/lib/constants";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { useProductFilters } from "@/hooks/use-product-filters";
import { MainCategory } from "@/lib/types/categories";

interface IProductsNavMenuProps {
    setProductsMenuOpen: () => void;
}

const ProductsNavMenu = ({ setProductsMenuOpen }: IProductsNavMenuProps) => {
    const menuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const { updateUrl } = useProductFilters();

    const onProductsNavMenuClick = (title: MainCategory) => {
        setProductsMenuOpen();

        updateUrl({
            category: title,
            subcategory: null,
            brand: null,
        });
    };

    return (
        <motion.div
            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
        >
            <ul className="flex flex-col">
                {ProductsMenuItems.map((item) => (
                    <Link
                        onClick={() => onProductsNavMenuClick(item.value as MainCategory)}
                        href={item.link}
                        key={item.title}
                        className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    >
                        <li className="text-black">{item.title}</li>
                        <BiChevronRight className="text-black" size={20} />
                    </Link>
                ))}
            </ul>
        </motion.div>
    );
};

export default ProductsNavMenu;
