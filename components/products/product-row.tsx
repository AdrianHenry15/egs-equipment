"use client";

import React from "react";
import { motion } from "framer-motion";

// Images
import SynProLogo from "@/public/logos/synpro.webp";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.webp";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";

import ProductItem from "./product-item";
import { EquipmentBrand, ProductType } from "@/lib/types";
import { Category } from "@/lib/types";
import {
    AeratorProducts,
    DebrisBlowerProducts,
    NaturalProducts,
    SyntheticProducts,
} from "@/lib/products";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface IProductRowProps {
    category: Category;
    brandLogos: EquipmentBrand[];
    title: string;
    brandFilter?: EquipmentBrand; // Optional brand prop
    className?: string;
}

const ProductRow = (props: IProductRowProps) => {
    const { category, brandFilter, className, title, brandLogos } = props;

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
        if (brandFilter) {
            products = products.filter(
                (product) => product.equipment_details.brand === brandFilter
            );
        }

        return products;
    };

    // Renders
    // Render brand logos using a switch case for specific brands
    const renderBrandLogos = () => {
        return brandLogos.map((logo, index) => {
            let logoImage;

            // Switch case to assign the appropriate logo image based on the brand
            switch (logo) {
                case "SISIS":
                    logoImage = SISISLogo;
                    break;
                case "Syn-Pro":
                    logoImage = SynProLogo;
                    break;
                case "Buffalo Turbine":
                    logoImage = BuffaloTurbineLogo;
                    break;
                case "Dennis":
                    logoImage = DennisLogo;
                    break;
                default:
                    return null; // Return null if no matching brand found (or add placeholder logic)
            }

            return (
                <div key={index} className="flex-shrink-0 p-4">
                    <Image
                        src={logoImage}
                        alt={`${logo} logo`}
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </div>
            );
        });
    };

    const products = getProductsByCategory();
    // const categoryName = category.toLowerCase().replace(/-/g, " "); // Formats category name

    return (
        <div
            className={`${className} w-full text-white relative border-y border-white shadow-lg overflow-hidden bg-white`}
        >
            <div className="flex flex-col justify-center items-center w-full py-24 md:py-48">
                {/* Description Title for specific category */}
                <h5 className="text-4xl flex items-center justify-center text-black w-full px-10 text-center font-semibold md:px-[300px]  ">
                    {title}
                </h5>
                {/* Equipment Brands */}
                <div className="flex items-center justify-center w-full">{renderBrandLogos()}</div>
            </div>

            {/* Products Swiper Carousel */}
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="flex items-center overflow-x-hidden overflow-y-hidden px-6"
                breakpoints={{
                    // For mobile screens smaller than 576px (very small mobile)
                    320: {
                        slidesPerView: 1,
                    },
                    // For mobile screens between 576px and 639px
                    576: {
                        slidesPerView: 1.5,
                    },
                    // When the window is 640px to 767px (small tablets or large mobile devices)
                    640: {
                        slidesPerView: 2,
                    },
                    // For screens between 768px and 1023px (medium to large tablets)
                    768: {
                        slidesPerView: 2.5,
                    },
                    // For screens between 1024px and 1279px (small desktops or laptops)
                    1024: {
                        slidesPerView: 3,
                    },
                    // For screens between 1280px and 1535px (larger desktops)
                    1280: {
                        slidesPerView: 4,
                    },
                    // For extra-large screens (1536px and up)
                    1536: {
                        slidesPerView: 4.5,
                    },
                }}
            >
                {products.map((product: ProductType) => (
                    <SwiperSlide key={product.id}>
                        <motion.div
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductRow;
