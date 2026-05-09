"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

import { ProductsMenuItems } from "@/lib/constants";
import { useProductFilters } from "@/hooks/use-product-filters";
import { MainCategory } from "@/lib/types/categories";

interface IProductsNavMenuProps {
    setProductsMenuOpen: () => void;
}

const ProductsNavMenu = ({ setProductsMenuOpen }: IProductsNavMenuProps) => {
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
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
            className="absolute top-full left-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card py-2 text-card-foreground shadow-xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <ul className="flex flex-col">
                {ProductsMenuItems.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={item.link}
                            onClick={() => onProductsNavMenuClick(item.value as MainCategory)}
                            className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
                        >
                            <span>{item.title}</span>

                            <BiChevronRight size={20} className="transition group-hover:translate-x-0.5" />
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ProductsNavMenu;
