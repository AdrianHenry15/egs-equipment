"use client";

import { AeratorProducts } from "@/lib/products/list/natural-turf/aerators";
import { DebrisBlowerProducts } from "@/lib/products/list/debris-blowers";
import { SyntheticTurfProducts } from "@/lib/products/list/synthetic-turf";
import { MowerProducts } from "@/lib/products/list/natural-turf/mowers";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/lib/products/list/product-list";

interface IProductProps {
    productId: string;
}

const Product = ({ productId }: IProductProps) => {
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
        return <p className="text-center text-gray-500">Product not found.</p>;
    }

    const specs = product.details.specifications;

    const renderSpecification = (title: string, value?: string) =>
        value ? (
            <div className="mt-1 flex text-sm">
                <span className="font-semibold text-black">{title}:</span>
                <span className="ml-2 text-gray-500">{value}</span>
            </div>
        ) : null;

    const renderDimensions = () => {
        const d = specs.dimensions;
        if (!d) return null;

        return (
            <div className="m-2">
                <h5 className="text-xl text-black">Dimensions</h5>
                <ul className="ml-4 text-sm text-gray-500">
                    {d.height && renderSpecification("Height", d.height)}
                    {d.width && renderSpecification("Width", d.width)}
                    {d.length && renderSpecification("Length", d.length)}
                    {d.altHeight && renderSpecification("Alt Height", d.altHeight)}
                    {d.altWidth && renderSpecification("Alt Width", d.altWidth)}
                    {d.altLength && renderSpecification("Alt Length", d.altLength)}
                    {d.tire_size && renderSpecification("Tire Size", d.tire_size)}
                </ul>
                <hr />
            </div>
        );
    };

    const renderInclusions = () => {
        const inclusions = specs.inclusions;
        if (!inclusions) return null;

        return (
            <div className="mt-2">
                <h5 className="text-xl font-semibold text-black">Inclusions</h5>
                {Array.isArray(inclusions) ? (
                    <ul className="text-sm text-gray-500">
                        {inclusions.map((i, idx) => (
                            <li key={idx}>– {i}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">{inclusions}</p>
                )}
            </div>
        );
    };

    return (
        <div className="w-full rounded-lg border border-gray-200 bg-gray-100">
            <div className="flex flex-col gap-8 p-6 xl:flex-row">
                <Link href="/products">
                    <ChevronLeftIcon className="w-10 rounded-full p-2 hover:bg-black/25" />
                </Link>

                {/* Image */}
                <div className="xl:w-1/2 flex justify-center">
                    {product.images[0] && (
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={600}
                            height={400}
                            className="rounded-lg border shadow-lg"
                        />
                    )}
                </div>

                {/* Details */}
                <div className="xl:w-1/2">
                    <h1 className="text-3xl font-bold text-black">{product.name}</h1>

                    <p className="mt-2 text-lg text-gray-600">{product.description}</p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-black">Description</h2>
                        <p className="mt-2 text-gray-500">{product.details.specs_description}</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-black">Features</h2>
                        <ul className="ml-5 mt-2 list-disc text-sm text-gray-500">
                            {product.details.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 rounded-lg border border-black bg-white p-4">
                        <h2 className="text-xl font-semibold text-black">Specifications</h2>

                        {renderSpecification("Model", specs.model)}
                        {renderSpecification("Code", specs.code)}
                        {renderSpecification("Action", specs.action)}
                        {renderSpecification("Depth", specs.depth)}
                        {renderSpecification("Power Source Output", specs.power_source_output)}
                        {renderSpecification("Recommended Tractor", specs.recommended_tractor)}

                        {renderDimensions()}
                        {renderInclusions()}

                        {renderSpecification("Weight", specs.weight)}
                        {renderSpecification("Alt Weight", specs.altWeight)}
                        {renderSpecification(
                            "Minimum Tractor Requirement",
                            specs.minimum_tractor_requirement,
                        )}
                        {renderSpecification("Drive System", specs.drive_system)}
                        {renderSpecification("Final Drive", specs.final_drive)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
