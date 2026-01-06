import { Tag } from "@/lib/types/categories";
import { ProductType } from "@/lib/types/product";

export function filterProducts(
    products: ProductType[],
    filters: {
        category?: string | null;
        tag?: Tag | Tag[] | null;
        brand?: string | null;
    },
) {
    return products.filter((p) => {
        // Category (single, exclusive)
        if (filters.category && p.mainCategory !== filters.category) {
            return false;
        }

        // Tags (AND logic)
        if (filters.tag) {
            const tags = Array.isArray(filters.tag) ? filters.tag : [filters.tag];

            if (!tags.every((tag) => p.tags.includes(tag))) {
                return false;
            }
        }

        // Brand (single)
        if (filters.brand && p.brand !== filters.brand) {
            return false;
        }

        return true;
    });
}
