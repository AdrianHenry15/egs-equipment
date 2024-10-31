// src/store/useProductStore.ts

import { create } from "zustand";
import {
    ProductType,
    MainCategory,
    EquipmentBrand,
    Clients,
    GolfSportsTurfItems,
    MowersItems,
    SyntheticTurfItems,
} from "@/lib/types";
import {
    AeratorProducts,
    DebrisBlowerProducts,
    GolfSportsTurfProducts,
    SyntheticTurfProducts,
} from "@/lib/products";

interface ProductState {
    products: ProductType[];
    filteredProducts: ProductType[];
    isLoading: boolean;
    error: string | null;

    // Filter states
    selectedMainCategory: MainCategory | null;
    selectedSubCategory: GolfSportsTurfItems | MowersItems | SyntheticTurfItems | null;
    selectedBrand: EquipmentBrand | null;

    // Actions
    // fetchProducts: () => void;
    filterByMainCategory: (category: MainCategory) => void;
    filterBySubCategory: (
        subCategory: GolfSportsTurfItems | MowersItems | SyntheticTurfItems
    ) => void;
    filterByBrand: (brand: EquipmentBrand) => void;
    filterByClient: (client: Clients) => void;
    resetFilters: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [
        ...GolfSportsTurfProducts,
        ...SyntheticTurfProducts,
        ...AeratorProducts,
        ...DebrisBlowerProducts,
    ],
    filteredProducts: [],
    isLoading: false,
    error: null,

    selectedMainCategory: null,
    selectedSubCategory: null,
    selectedBrand: null,
    selectedClient: null,

    // fetchProducts: async () => {
    //     set({ isLoading: true, error: null });
    //     try {
    //         const response = await axios.get<ProductType[]>("/api/products");
    //         set({ products: response.data, filteredProducts: response.data, isLoading: false });
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     } catch (error: unknown) {
    //         set({ error: "Failed to fetch products", isLoading: false });
    //     }
    // },

    filterByMainCategory: (category) =>
        set((state) => ({
            selectedMainCategory: category,
            selectedSubCategory: null,
            filteredProducts: state.products.filter((product) => product.mainCategory === category),
        })),

    filterBySubCategory: (subCategory) =>
        set((state) => ({
            selectedSubCategory: subCategory,
            filteredProducts: state.products.filter(
                (product) => product.subCategory === subCategory
            ),
        })),

    filterByBrand: (brand) =>
        set((state) => ({
            selectedBrand: brand,
            filteredProducts: state.products.filter((product) => product.brand === brand),
        })),

    filterByClient: (client) =>
        set((state) => ({
            selectedClient: client,
            filteredProducts: state.products.filter((product) => product.usedBy === client),
        })),

    resetFilters: () =>
        set((state) => ({
            selectedMainCategory: null,
            selectedSubCategory: null,
            selectedBrand: null,
            selectedClient: null,
            filteredProducts: state.products,
        })),
}));
