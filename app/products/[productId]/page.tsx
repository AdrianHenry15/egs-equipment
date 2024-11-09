import Product from "@/components/layout/products-page/product-by-id/product";

export default function ProductPage({ params }: { params: { productId: string } }) {
    return (
        <div className="flex relative flex-col bg-zinc-800 items-center p-4 w-full">
            <Product productId={params.productId} />
        </div>
    );
}
