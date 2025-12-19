import { useProductQuery } from "@/hooks/use-product-query";
import { ProductType } from "@/lib/types/product";

export function filterProducts(products: ProductType[], query: ReturnType<typeof useProductQuery>) {
    return products.filter((p) => {
        if (query.category && p.mainCategory !== query.category) return false;
        if (query.subCategory && p.subCategory !== query.subCategory) return false;
        if (query.brand && p.brand !== query.brand) return false;
        return true;
    });
}
