"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { allProducts } from "@/lib/products/list/product-list";
import { ImageScroller } from "./image-scroller";
import {
    LineMarkerAccessorySpecificationsType,
    LineMarkerMachineSpecificationsType,
    LineMarkerPaintSpecificationsType,
    ProductSpecificationsType,
} from "@/lib/types/product";

interface IProductProps {
    productId: string;
}

const Product = ({ productId }: IProductProps) => {
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
        return <p className="text-center text-gray-500">Product not found.</p>;
    }

    const specBlock = product.details.specifications;

    const renderSpecRow = (label: string, value?: string) =>
        value ? (
            <div className="mt-1 flex text-sm">
                <span className="font-semibold text-black">{label}:</span>
                <span className="ml-2 text-gray-500">{value}</span>
            </div>
        ) : null;

    /* ---------------------------- */
    /* STANDARD SPECIFICATIONS */
    /* ---------------------------- */
    const renderStandardSpecs = (data: ProductSpecificationsType) => (
        <>
            {renderSpecRow("Model", data.model)}
            {renderSpecRow("Code", data.code)}
            {renderSpecRow("Action", data.action)}
            {renderSpecRow("Depth", data.depth)}
            {renderSpecRow("Power Source Output", data.power_source_output)}
            {renderSpecRow("Recommended Tractor", data.recommended_tractor)}

            {data.dimensions && (
                <div className="mt-4">
                    <h5 className="text-lg font-semibold text-black">Dimensions</h5>
                    {renderSpecRow("Height", data.dimensions.height)}
                    {renderSpecRow("Width", data.dimensions.width)}
                    {renderSpecRow("Length", data.dimensions.length)}
                    {renderSpecRow("Alt Height", data.dimensions.altHeight)}
                    {renderSpecRow("Alt Width", data.dimensions.altWidth)}
                    {renderSpecRow("Alt Length", data.dimensions.altLength)}
                    {renderSpecRow("Tire Size", data.dimensions.tire_size)}
                </div>
            )}

            {data.inclusions && (
                <div className="mt-4">
                    <h5 className="text-lg font-semibold text-black">Inclusions</h5>
                    {Array.isArray(data.inclusions) ? (
                        <ul className="list-disc ml-5 text-sm text-gray-500">
                            {data.inclusions.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500">{data.inclusions}</p>
                    )}
                </div>
            )}

            {renderSpecRow("Weight", data.weight)}
            {renderSpecRow("Alt Weight", data.altWeight)}
            {renderSpecRow("Minimum Tractor Requirement", data.minimum_tractor_requirement)}
            {renderSpecRow("Drive System", data.drive_system)}
            {renderSpecRow("Final Drive", data.final_drive)}
        </>
    );

    /* ---------------------------- */
    /* LINE MARKER PAINT */
    /* ---------------------------- */
    const renderPaintSpecs = (data: LineMarkerPaintSpecificationsType) => (
        <>
            {renderSpecRow("Natural Grass", data.natural_grass)}
            {renderSpecRow("Compatibility", data.compatibility)}
            {renderSpecRow("Ready To Use", data.ready_to_use)}
            {renderSpecRow("Size", data.size)}
            {renderSpecRow("Coverage", data.coverage)}
            {renderSpecRow("Colors", data.colors)}
        </>
    );

    /* ---------------------------- */
    /* LINE MARKER MACHINE */
    /* ---------------------------- */
    const renderMachineSpecs = (data: LineMarkerMachineSpecificationsType) => (
        <>
            {renderSpecRow("Capacity", data.capacity)}
            {renderSpecRow("Line Width", data.line_width)}
            {renderSpecRow("Weight", data.weight)}
            {renderSpecRow("Battery", data.battery)}
            {renderSpecRow("Chassis", data.chassis)}
            {renderSpecRow("Low Maintenance", data.low_maintenance)}
            {renderSpecRow("Usage", data.usage)}
            {renderSpecRow("Made in Britain", data.made_in_britain)}
        </>
    );

    /* ---------------------------- */
    /* LINE MARKER ACCESSORY */
    /* ---------------------------- */
    const renderAccessorySpecs = (data: LineMarkerAccessorySpecificationsType) => (
        <>
            {renderSpecRow("Length", data.length)}
            {renderSpecRow("Width", data.width)}
            {renderSpecRow("Height", data.height)}
            {renderSpecRow("Weight", data.weight)}

            {data.package_item && (
                <div className="mt-4">
                    <h5 className="text-lg font-semibold text-black">Package Contents</h5>
                    <p className="text-sm text-gray-500">
                        {data.package_item.quantity} × {data.package_item.name} (
                        {data.package_item.unit})
                    </p>
                    {data.package_item.description && (
                        <p className="text-sm text-gray-500">{data.package_item.description}</p>
                    )}
                </div>
            )}
        </>
    );

    const hasRenderableSpecs = (data: unknown): boolean => {
        if (!data || typeof data !== "object") return false;

        return Object.values(data).some((value) => {
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === "object" && value !== null)
                return Object.values(value).some(Boolean);
            return Boolean(value);
        });
    };

    const renderSpecifications = () => {
        if (!specBlock?.data || !hasRenderableSpecs(specBlock.data)) return null;

        return (
            <div className="mt-6 rounded-lg border border-black bg-white p-4">
                <h2 className="text-xl font-semibold text-black">Specifications</h2>

                {specBlock.type === "standard" && renderStandardSpecs(specBlock.data)}

                {specBlock.type === "line_marker_paint" && renderPaintSpecs(specBlock.data)}

                {specBlock.type === "line_marker_machine" && renderMachineSpecs(specBlock.data)}

                {specBlock.type === "line_marker_accessory" && renderAccessorySpecs(specBlock.data)}

                {specBlock.type === "goals" && (
                    <p className="text-sm text-gray-500">Goal specifications coming soon.</p>
                )}
            </div>
        );
    };

    return (
        <div className="w-full bg-gray-100 py-10">
            <div className="flex flex-col gap-8 p-6 xl:flex-row">
                <Link href="/products">
                    <ChevronLeftIcon className="w-10 rounded-full p-2 hover:bg-black/25" />
                </Link>

                <div className="xl:w-1/2 flex justify-center">
                    <ImageScroller images={product.images} alt={product.name} />
                </div>

                <div className="xl:w-1/2">
                    <h1 className="text-3xl font-bold text-black">{product.name}</h1>

                    <p className="mt-2 text-lg text-gray-600">{product.description}</p>

                    {product.details.specs_description && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-black">Description</h2>
                            <p className="mt-2 text-gray-500">
                                {product.details.specs_description}
                            </p>
                        </div>
                    )}

                    {product.details.features?.length ? (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-black">Features</h2>
                            <ul className="ml-5 mt-2 list-disc text-sm text-gray-500">
                                {product.details.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {renderSpecifications()}
                </div>
            </div>

            <div className="flex w-full justify-center pt-10">
                <Link
                    href="/contact"
                    className="w-[50%] rounded-lg bg-green-600 py-2 text-center font-semibold transition-colors hover:bg-green-700"
                >
                    Request Estimate
                </Link>
            </div>
        </div>
    );
};

export default Product;
