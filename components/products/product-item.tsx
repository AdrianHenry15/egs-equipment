import Image from "next/image";
import React from "react";
import Link from "next/link";

import { ProductType } from "@/lib/types";

interface ProductItemProps {
    product: ProductType;
}

const ProductItem = (props: ProductItemProps) => {
    // Props
    const { product } = props;

    return (
        <Link
            href={`/products/${product.id}`}
            className="relative items-center my-24 justify-center flex flex-col px-12 flex-shrink-0 w-[400px] h-[280px] rounded-md border-white"
        >
            <div className="flex w-[300px] h-[170px] relative">
                <Image
                    className="object-cover opacity-75  flex rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                    width={400}
                    height={400}
                    src={product.image}
                    alt={product.name}
                />
            </div>
            {/* PRODUCT TAB */}
            <div className="flex flex-col bottom-0 items-start p-1 text-xs w-full rounded-full whitespace-nowrap">
                <p className="flex text-white font-semibold mr-2 ml-1">{product.name}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
