import { allProducts } from "@/lib/products/list/product-list";
import { ProductType } from "@/lib/types/product";

export function getRelatedProducts(productId: string, limit = 4): ProductType[] {
    const current = allProducts.find((p) => p.id === productId);
    if (!current) return [];

    return allProducts
        .filter((p) => p.id !== productId)
        .map((p) => {
            let score = 0;

            if (p.mainCategory === current.mainCategory) score += 3;
            if (p.brand === current.brand) score += 2;

            const sharedTags = p.tags?.filter((tag) => current.tags?.includes(tag)).length || 0;
            score += sharedTags;

            return { product: p, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.product);
}
