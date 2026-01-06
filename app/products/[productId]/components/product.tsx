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

const COLOR_MAP: Record<string, string> = {
    white: "#ffffff",
    black: "#000000",
    yellow: "#facc15",
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#22c55e",
    orange: "#f97316",
    purple: "#a855f7",
    pink: "#ec4899",
    gray: "#9ca3af",
    grey: "#9ca3af",
};

interface IProductProps {
    productId: string;
}

const Product = ({ productId }: IProductProps) => {
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
        return <p className="text-center text-black">Product not found.</p>;
    }

    const specBlock = product.details.specifications;

    const renderColorDots = (colors: string[]) => (
        <div className="mt-1 flex flex-wrap gap-2">
            {colors.map((color, idx) => {
                const hex = COLOR_MAP[color.toLowerCase().trim()];

                return (
                    <div
                        key={`${color}-${idx}`}
                        title={color}
                        className="h-5 w-5 rounded-full border border-gray-400"
                        style={{
                            backgroundColor: hex ?? color, // fallback if hex not mapped
                        }}
                    />
                );
            })}
        </div>
    );

    const renderGridItem = (label: string, value?: string) => {
        if (!value) return null;

        return (
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-black">{label}</span>
                <hr className="my-1 border-gray-300" />
                <span className="text-sm text-black">{value}</span>
            </div>
        );
    };

    const renderSpecRow = (label: string, value?: string) =>
        value ? (
            <div className="mt-1 flex text-sm">
                <span className="font-semibold text-black">{label}:</span>
                <span className="ml-2 text-black">{value}</span>
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
                        <ul className="list-disc ml-5 text-sm text-black">
                            {data.inclusions.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-black">{data.inclusions}</p>
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
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {renderGridItem("Natural Grass", data.grass)}
            {renderGridItem("Compatibility", data.compatibility)}
            {renderGridItem("Ready To Use", data.ready_to_use)}
            {renderGridItem("Size", data.size)}
            {renderGridItem("Coverage", data.coverage)}

            {data.colors && data.colors.length > 0 && (
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-black">Colors</span>
                    <hr className="my-1 border-gray-300" />
                    {renderColorDots(data.colors)}
                </div>
            )}
        </div>
    );

    /* ---------------------------- */
    /* LINE MARKER MACHINE */
    /* ---------------------------- */
    const renderMachineSpecs = (data: LineMarkerMachineSpecificationsType) => (
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {renderGridItem("Capacity", data.capacity)}
            {renderGridItem("Line Width", data.line_width)}
            {renderGridItem("Weight", data.weight)}
            {renderGridItem("Battery", data.battery)}
            {renderGridItem("Chassis", data.chassis)}
            {renderGridItem("Low Maintenance", data.low_maintenance)}
            {renderGridItem("Usage", data.usage)}
            {renderGridItem("Made in Britain", data.made_in_britain)}
        </div>
    );

    /* ---------------------------- */
    /* LINE MARKER ACCESSORY */
    /* ---------------------------- */
    const renderAccessorySpecs = (data: LineMarkerAccessorySpecificationsType) => (
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {renderGridItem("Length", data.length)}
            {renderGridItem("Width", data.width)}
            {renderGridItem("Height", data.height)}
            {renderGridItem("Weight", data.weight)}
            {renderGridItem("Size", data.size)}
            {renderGridItem("Capacity", data.capacity)}
            {renderGridItem("Compatibility", data.compatability)}

            {data.colors && data.colors.length > 0 && (
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-black">Colors</span>
                    <hr className="my-1 border-gray-300" />
                    {renderColorDots(data.colors)}
                </div>
            )}

            {data.package_item && data.package_item.length > 0 && (
                <div className="flex flex-col lg:col-span-3">
                    <span className="text-sm font-semibold text-black">Package Contents</span>
                    <hr className="my-1 border-gray-300" />

                    <ul className="mt-1 space-y-1 text-sm text-black">
                        {data.package_item.map((item, idx) => (
                            <li key={idx}>
                                <span className="font-semibold">
                                    {item.quantity}× {item.name}
                                </span>
                                {item.description && <span className="ml-1">— {item.description}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    const hasRenderableSpecs = (data: unknown): boolean => {
        if (!data || typeof data !== "object") return false;

        return Object.values(data).some((value) => {
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === "object" && value !== null) return Object.values(value).some(Boolean);
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

                {specBlock.type === "goals" && <p className="text-sm text-black">Goal specifications coming soon.</p>}
            </div>
        );
    };

    return (
        <div className="w-full bg-gray-100 pb-10">
            <div className="flex flex-col gap-8 p-6 xl:flex-row">
                <Link className="flex w-min" href="/products">
                    <ChevronLeftIcon color="black" className="w-10 p-2" />
                </Link>

                <div className="xl:w-1/2 flex justify-center">
                    <ImageScroller images={product.images} alt={product.name} />
                </div>

                <div className="xl:w-1/2">
                    <h1 className="text-3xl font-bold text-black">{product.name}</h1>

                    <p className="mt-2 text-lg text-black">{product.description}</p>

                    {product.details.specs_description && (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-black">Description</h2>
                            <p className="mt-2 text-black">{product.details.specs_description}</p>
                        </div>
                    )}

                    {product.details.features?.length ? (
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-black">Features</h2>
                            <ul className="ml-5 mt-2 list-disc text-sm text-black">
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
