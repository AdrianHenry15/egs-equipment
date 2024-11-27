"use client";

import Image from "next/image";
import React from "react";

import {
    GolfSportsTurfProducts,
    SyntheticTurfProducts,
    AeratorProducts,
    DebrisBlowerProducts,
} from "@/lib/products/product-list";

interface IProductProps {
    productId: string;
}

const Product = (props: IProductProps) => {
    // Props
    const { productId } = props;

    const AllProducts = [
        ...SyntheticTurfProducts,
        ...GolfSportsTurfProducts,
        ...AeratorProducts,
        ...DebrisBlowerProducts,
    ];

    const product = AllProducts.find((p) => p.id === productId);

    if (!product) return <p>Product not found.</p>;

    // Render Functions
    // const renderArrowSelector = () => {
    //     const ArrowClass =
    //         "hover:text-white text-gray-500 hover:scale-125 duration-300 transition-all ease-in-out cursor-pointer";
    //     return (
    //         <div className="flex mb-40 w-min bg-zinc-600 py-1 px-6 rounded-full mt-4 border-zinc-500 border">
    //             <BsArrowLeft className={ArrowClass} size={25} />
    //             <p className="vorder border white flex items-center justtify-center mx-6" />
    //             <BsArrowRight className={ArrowClass} size={25} />
    //         </div>
    //     );
    // };

    // const renderProductVariantSelector = () => {
    //     return (
    //         <div className="flex items-center justify-center">
    //             <Image
    //                 src={product.image}
    //                 alt={product.name}
    //                 width={100}
    //                 height={100}
    //                 className="flex border-2 border-green-500 shadow-zinc-700 shadow-lg"
    //             />
    //         </div>
    //     );
    // };

    return (
        <div className="flex flex-col relative w-full border border-zinc-200 bg-white rounded-lg">
            <div className="flex flex-col relative p-6">
                {/* PICTURE */}
                <div className="flex flex-col justify-center items-center relative my-10 xl:my-0 xl:p-40">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={700}
                        className="flex border border-white shadow-zinc-700 shadow-lg"
                    />
                    {/* {renderArrowSelector()}
                    {renderProductVariantSelector()} */}
                </div>
                <div className="flex flex-col relative pb-6 ">
                    {/* TITLE */}
                    <h5 className="text-black text-start text-3xl lg:text-6xl">{product.name}</h5>
                    <p className="text-gray-400 ml-2 text-start text-lg">{product.description}</p>
                </div>
                <hr />
                {/* Specs Description */}
                <div className="flex flex-col my-4">
                    <h5 className="text-black text-xl">Description</h5>
                    <p className="text-gray-500 text-sm">
                        {product.equipment_details.specs_description}
                    </p>
                </div>
                {/* Features */}
                <div className="flex flex-col my-4">
                    <div className="flex flex-col">
                        <h5 className="text-black text-xl">Features</h5>
                        <ul>
                            {product.equipment_details.features.map((item, index) => {
                                return (
                                    <li key={index} className="text-gray-500 text-sm">
                                        - {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/* Specifications */}
                <div className="flex flex-col border p-4 border-black rounded-lg">
                    <h5 className="text-xl text-black">Specifications</h5>
                    {/* Model */}
                    <div className="flex items-center text-sm">
                        <h5 className="text-black">Model:</h5>
                        <p className="text-gray-500 ml-1">
                            {product.equipment_details.specifications.model}
                        </p>
                    </div>
                    {/* Code */}
                    <div className="flex items-center text-sm">
                        <h5 className="text-black">Code:</h5>
                        <p className="text-gray-500 ml-1">
                            {product.equipment_details.specifications.code}
                        </p>
                    </div>
                    {/* Code */}
                    <div className="flex items-center text-sm">
                        <h5 className="text-black">Working Width:</h5>
                        <p className="text-gray-500 ml-1">
                            {product.equipment_details.specifications.cutting?.working_width}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
