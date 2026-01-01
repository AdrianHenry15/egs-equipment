import Product from "@/app/products/[productId]/components/product";

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
        <div className="flex relative flex-col items-center w-full">
            <Product productId={productId} />
        </div>
    );
}
