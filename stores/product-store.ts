import { create } from "zustand";
import axios from "axios";

import { ProductType } from "@/lib/types";

interface ProductState {
    products: ProductType[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    isLoading: false,
    error: null,
    fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get<ProductType[]>("/api/products");
            set({ products: response.data, isLoading: false });
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                set({
                    error: error.response.data.message || "Failed to fetch products",
                    isLoading: false,
                });
            } else {
                set({ error: "An unknown error occurred", isLoading: false });
            }
        }
    },
}));
