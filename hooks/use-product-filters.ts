"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateUrl = (params: Record<string, string | null>) => {
        const next = new URLSearchParams(searchParams.toString());

        Object.entries(params).forEach(([key, value]) => {
            if (value) next.set(key, value);
            else next.delete(key);
        });

        router.push(`/products?${next.toString().toLowerCase()}`, { scroll: false });
    };

    const resetUrl = () => {
        router.push(`/products`, { scroll: false });
    };

    return { updateUrl, resetUrl };
}
