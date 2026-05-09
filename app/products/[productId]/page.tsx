import type { Metadata } from "next";
import Product from "@/app/products/[productId]/components/product";
import RelatedProducts from "./components/related-products";
import { allProducts } from "@/lib/products/list/product-list";
import { StaticImageData } from "next/image";

interface ProductPageProps {
    params: Promise<{
        productId: string;
    }>;
}

const getMetadataImageUrl = (image?: string | StaticImageData): string | undefined => {
    if (!image) return undefined;

    return typeof image === "string" ? image : image.src;
};

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
    const { productId } = await props.params;

    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found.",
        };
    }

    const title = `${product.name} | EGS Equipment`;
    const description =
        product.description?.slice(0, 160) ?? `Learn more about ${product.name} from EGS Equipment Solutions.`;

    const image = getMetadataImageUrl(product.images?.[0]);

    return {
        title,
        description,

        keywords: [
            product.name,
            product.brand,
            product.mainCategory,
            ...(product.tags ?? []),
            "EGS Equipment",
            "Industrial Equipment",
        ],

        openGraph: {
            title,
            description,
            type: "website",
            images: image
                ? [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt: product.name,
                      },
                  ]
                : [],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : [],
        },

        alternates: {
            canonical: `/products/${product.id}`,
        },
    };
}
export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
        <div className="flex relative flex-col items-center w-full">
            <Product productId={productId} />
            <RelatedProducts productId={productId} />
        </div>
    );
}
