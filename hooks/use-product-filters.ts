"use client";

import { useRouter, useSearchParams } from "next/navigation";

function normalizeValue(value: string) {
    return value.toLowerCase().trim();
}

export function useProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateUrl = (params: Record<string, string | null>) => {
        const next = new URLSearchParams(searchParams.toString());

        Object.entries(params).forEach(([key, value]) => {
            if (value) next.set(key, normalizeValue(value));
            else next.delete(key);
        });

        router.push(`/products?${next.toString()}`, { scroll: false });
    };

    const resetUrl = () => {
        router.push("/products", { scroll: false });
    };

    return { updateUrl, resetUrl };
}
