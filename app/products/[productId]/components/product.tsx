"use client";

import { AeratorProducts } from "@/lib/products/list/aerators";
import { DebrisBlowerProducts } from "@/lib/products/list/debris-blowers";
import { GolfSportsTurfProducts } from "@/lib/products/list/golf-sports-turf";
import { SyntheticTurfProducts } from "@/lib/products/list/synthetic-turf";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProductProps {
    productId: string;
}

const Product = ({ productId }: IProductProps) => {
    // Combine all products
    const AllProducts = [
        ...SyntheticTurfProducts,
        ...GolfSportsTurfProducts,
        ...AeratorProducts,
        ...DebrisBlowerProducts,
    ];

    // Find the product by ID
    const product = AllProducts.find((p) => p.id === productId);

    if (!product) return <p className="text-center text-gray-500">Product not found.</p>;

    // Helper to render specifications
    const renderSpecification = (title: string, specification?: string) =>
        specification ? (
            <div className="flex items-center text-sm mt-1">
                <h5 className="font-semibold text-black">{title}:</h5>
                <p className="ml-2 text-gray-500">{specification}</p>
            </div>
        ) : null;

    const renderDimensions = () => {
        const dimensions = product.equipment_details.specifications.dimensions;

        // Check if any dimension property exists
        if (
            !(
                dimensions?.altHeight ||
                dimensions?.altLength ||
                dimensions?.altWidth ||
                dimensions?.height ||
                dimensions?.length ||
                dimensions?.tire_size ||
                dimensions?.width
            )
        ) {
            return null;
        }

        return (
            <div className="flex flex-col m-2">
                <h5 className="text-xl text-black">Dimensions</h5>
                <ul className="text-sm text-gray-500 ml-4">
                    {dimensions.altHeight && (
                        <li>{renderSpecification("Alt Height", dimensions.altHeight)}</li>
                    )}
                    {dimensions.altLength && (
                        <li>{renderSpecification("Alt Length", dimensions.altLength)}</li>
                    )}
                    {dimensions.altWidth && (
                        <li>{renderSpecification("Alt Width", dimensions.altWidth)}</li>
                    )}
                    {dimensions.height && (
                        <li>{renderSpecification("Height", dimensions.height)}</li>
                    )}
                    {dimensions.length && (
                        <li>{renderSpecification("Length", dimensions.length)}</li>
                    )}
                    {dimensions.width && <li>{renderSpecification("Width", dimensions.width)}</li>}
                    {dimensions.tire_size && (
                        <li>{renderSpecification("Tire Size", dimensions.tire_size)}</li>
                    )}
                </ul>
                <hr />
            </div>
        );
    };

    const renderInclusions = () => {
        // Inclusions can be a string or string[]
        const inclusions = product.equipment_details.specifications.inclusions;

        // If no inclusions exist, do not render anything
        if (!inclusions || (Array.isArray(inclusions) && inclusions.length === 0)) {
            return null;
        }

        return (
            <div className="flex flex-col">
                <h5 className="text-xl font-semibold text-black">Inclusions</h5>
                {typeof inclusions === "string" ? (
                    <p className="text-sm text-gray-500">{inclusions}</p>
                ) : (
                    <ul className="space-y-1 text-sm text-gray-500">
                        {inclusions.map((inclusion, index) => (
                            <li key={index}>- {inclusion}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    const renderEngine = () => {
        const engine = product.equipment_details.specifications.engine;

        // Check if any dimension property exists
        if (
            !(
                engine?.engine ||
                engine?.engine_petrol ||
                engine?.power_unit_requirement ||
                engine?.tractor_power_requirement
            )
        ) {
            return null;
        }

        return (
            <div className="flex flex-col m-2">
                <h5 className="text-xl text-black">Engine</h5>
                <ul className="text-sm text-gray-500 ml-4">
                    {engine.engine && <li>{renderSpecification("Alt Height", engine.engine)}</li>}
                    {engine.engine_petrol && (
                        <li>{renderSpecification("Alt Length", engine.engine_petrol)}</li>
                    )}
                    {engine.power_unit_requirement && (
                        <li>{renderSpecification("Alt Width", engine.power_unit_requirement)}</li>
                    )}
                    {engine.tractor_power_requirement && (
                        <li>{renderSpecification("Height", engine.tractor_power_requirement)}</li>
                    )}
                </ul>
                <hr />
            </div>
        );
    };

    const renderBrushes = () => {
        const brushes = product.equipment_details.specifications.brushes;

        // Check if any dimension property exists
        if (
            !(
                brushes?.brushes ||
                brushes?.number_of_brushes ||
                brushes?.oscillating_brush ||
                brushes?.rear_brush
            )
        ) {
            return null;
        }

        return (
            <div className="flex flex-col m-2">
                <h5 className="text-xl text-black">Engine</h5>
                <ul className="text-sm text-gray-500 ml-4">
                    {brushes.brushes && (
                        <li>{renderSpecification("Alt Height", brushes.brushes)}</li>
                    )}
                    {brushes.number_of_brushes && (
                        <li>{renderSpecification("Alt Length", brushes.number_of_brushes)}</li>
                    )}
                    {brushes.oscillating_brush && (
                        <li>{renderSpecification("Alt Width", brushes.oscillating_brush)}</li>
                    )}
                    {brushes.rear_brush && (
                        <li>{renderSpecification("Height", brushes.rear_brush)}</li>
                    )}
                </ul>
            </div>
        );
    };

    const renderCuttingSpecifications = () => {
        const cutting = product.equipment_details.specifications.cutting;

        // Check if any dimension property exists
        if (
            !(
                cutting?.cutter_performance ||
                cutting?.cutting_width ||
                cutting?.cylinder ||
                cutting?.height_of_cut ||
                cutting?.working_depth ||
                cutting?.working_width
            )
        ) {
            return null;
        }

        return (
            <div className="flex flex-col m-2">
                <h5 className="text-xl text-black">Brushes</h5>
                <ul className="text-sm text-gray-500 ml-4">
                    {cutting.cutter_performance && (
                        <li>{renderSpecification("Alt Height", cutting.cutter_performance)}</li>
                    )}
                    {cutting.cutting_width && (
                        <li>{renderSpecification("Alt Length", cutting.cutting_width)}</li>
                    )}
                    {cutting.cylinder && (
                        <li>{renderSpecification("Alt Width", cutting.cylinder)}</li>
                    )}
                    {cutting.height_of_cut && (
                        <li>{renderSpecification("Height", cutting.height_of_cut)}</li>
                    )}
                    {cutting.working_depth && (
                        <li>{renderSpecification("Height", cutting.working_depth)}</li>
                    )}
                    {cutting.working_width && (
                        <li>{renderSpecification("Height", cutting.working_width)}</li>
                    )}
                </ul>
                <hr />
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full border border-gray-200 bg-gray-100 rounded-lg">
            <div className="p-6 flex flex-col xl:flex-row gap-8">
                <Link href={"/products"}>
                    <ChevronLeftIcon
                        className="w-10 transition-all ease-in-out duration-300 rounded-full p-2 hover:bg-black/25 hover:scale-110 "
                        color="black"
                    />
                </Link>
                {/* Product Image */}
                <div className="flex flex-col items-center xl:w-1/2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="border border-gray-300 shadow-lg rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col xl:w-1/2">
                    {/* Title and Description */}
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-black">
                            {product.name}
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">{product.description}</p>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-black">Description</h2>
                        <p className="mt-2 text-gray-500">
                            {product.equipment_details.specs_description}
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-black">Features</h2>
                        <ul className="mt-2 list-disc pl-5 text-gray-500 text-sm">
                            {product.equipment_details.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    <div className="p-4 border  border-black rounded-lg bg-white">
                        <h2 className="text-xl font-semibold text-black">Specifications</h2>
                        <div className="flex flex-col ml-2">
                            {renderSpecification(
                                "Model",
                                product.equipment_details.specifications.model
                            )}
                            {renderSpecification(
                                "Code",
                                product.equipment_details.specifications.code
                            )}
                            {renderSpecification(
                                "Action",
                                product.equipment_details.specifications.action
                            )}
                            {renderSpecification(
                                "Depth",
                                product.equipment_details.specifications.depth
                            )}
                            {renderSpecification(
                                "Power Source Output",
                                product.equipment_details.specifications.power_source_output
                            )}
                            {renderSpecification(
                                "Recommended Tractor",
                                product.equipment_details.specifications.recommended_tractor
                            )}
                            {/* Dimensions */}
                            {renderDimensions()}

                            {renderSpecification(
                                "Operating Width",
                                product.equipment_details.specifications.operating_width
                            )}

                            {renderInclusions()}

                            {renderSpecification(
                                "Exclusions",
                                product.equipment_details.specifications.exclusions
                            )}
                            {renderSpecification(
                                "Weight",
                                product.equipment_details.specifications.weight
                            )}
                            {renderSpecification(
                                "Alternative Weight",
                                product.equipment_details.specifications.altWeight
                            )}
                            {renderSpecification(
                                "Minimum Tractor Requirement",
                                product.equipment_details.specifications.minimum_tractor_requirement
                            )}
                            {renderEngine()}
                            {renderBrushes()}
                            {renderCuttingSpecifications()}
                            {renderSpecification(
                                "Drive System",
                                product.equipment_details.specifications.drive_system
                            )}
                            {renderSpecification(
                                "Final Drive",
                                product.equipment_details.specifications.final_drive
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
