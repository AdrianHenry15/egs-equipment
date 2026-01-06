import { useProductQuery } from "@/hooks/use-product-query";
import { ProductType } from "@/lib/types/product";
import { isTag } from "@/lib/types/tags";

export function filterProducts(products: ProductType[], query: ReturnType<typeof useProductQuery>) {
    return products.filter((p) => {
        if (query.category && p.mainCategory !== query.category) return false;

        if (query.subCategory) {
            if (!isTag(query.subCategory)) return false;
            if (!p.tags.includes(query.subCategory)) return false;
        }

        if (query.brand && p.brand !== query.brand) return false;

        return true;
    });
}
