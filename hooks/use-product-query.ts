import { useSearchParams } from "next/navigation";

export function useProductQuery() {
    const params = useSearchParams();

    return {
        category: params.get("category"),
        subCategory: params.get("subcategory"),
        brand: params.get("brand"),
    };
}
