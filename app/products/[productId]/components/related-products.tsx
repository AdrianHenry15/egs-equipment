import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { getRelatedProducts } from "@/lib/products/helpers/get-related-products";
import { getProductBrandImage } from "@/lib/products/helpers/get-product-brand-image";
import { EquipmentBrand } from "@/lib/types/brands";
import ProductCard from "../../components/product-card";

interface RelatedProductsProps {
    productId: string;
}

export default function RelatedProducts({ productId }: RelatedProductsProps) {
    const related = getRelatedProducts(productId);

    if (!related.length) return null;

    return (
        <section
            className="
            w-full
            bg-gray-100 
            py-14
        "
        >
            <div className="mx-auto max-w-7xl px-4">
                <h2
                    className="
                    mb-6 text-2xl font-semibold
                    text-gray-900 
                "
                >
                    Related Products
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {related.map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </section>
    );
}
