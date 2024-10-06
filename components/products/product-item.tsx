import Image from "next/image";
import React from "react";
import Link from "next/link";

import SISISLogo from "@/public/logos/sisis.webp";
import BuffaloTurbineLogo from "@/public/logos/buffalo-turbine.webp";
import DennisLogo from "@/public/logos/dennis.webp";
import SynProLogo from "@/public/logos/synpro.webp";

import { EquipmentBrand, ProductType } from "@/lib/types";

interface ProductItemProps {
    product: ProductType;
}

const ProductItem = (props: ProductItemProps) => {
    // Props
    const { product } = props;

    // Functions
    const getProductBrandImage = (brand: EquipmentBrand) => {
        if (brand === "SISIS") {
            return SISISLogo;
        } else if (brand === "Buffalo Turbine") {
            return BuffaloTurbineLogo;
        } else if (brand === "Dennis") {
            return DennisLogo;
        } else if (brand === "Syn-Pro") {
            return SynProLogo;
        } else {
            return "";
        }
    };

    return (
        <Link
            href={`/products/${product.id}`}
            className="relative items-center my-24 justify-center flex flex-col px-12 flex-shrink-0 w-[400px] h-[280px] rounded-md border-white"
        >
            <div className="flex w-[300px] min-h-[170px] relative">
                <Image
                    className="object-cover opacity-75 flex rounded-md hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
                    width={400}
                    height={400}
                    src={product.image}
                    alt={product.name}
                />
                <Image
                    src={getProductBrandImage(product.equipment_details.brand)}
                    alt="brand-logo"
                    className="flex absolute left-2 bottom-2 w-16 sm:w-24"
                />
            </div>
            {/* PRODUCT TAB */}
            <div className="flex flex-col bottom-0 items-start p-1 text-xs w-full rounded-full whitespace-nowrap">
                <p className="flex text-white font-semibold mr-2 ml-1">{product.name}</p>
                <p className="flex text-zinc-400 font-semibold mr-2 ml-1">{product.description}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
