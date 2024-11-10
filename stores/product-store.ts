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
} from "@/lib/products/product-list";

interface ProductState {
    products: ProductType[];
    filteredProducts: ProductType[];
    isLoading: boolean;
    error: string | null;

    // Filter states
    selectedMainCategory: MainCategory | null;
    selectedSubCategory: GolfSportsTurfItems | MowersItems | SyntheticTurfItems | null;
    selectedBrand: EquipmentBrand | null;
    selectedClient: Clients | null;

    // Actions
    filterByMainCategory: (category: MainCategory) => void;
    filterBySubCategory: (
        subCategory: GolfSportsTurfItems | MowersItems | SyntheticTurfItems
    ) => void;
    filterByBrand: (brand: EquipmentBrand) => void;
    filterByClient: (client: Clients) => void;
    resetFilters: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: [
        ...GolfSportsTurfProducts,
        ...SyntheticTurfProducts,
        ...AeratorProducts,
        ...DebrisBlowerProducts,
    ],
    filteredProducts: [
        ...GolfSportsTurfProducts,
        ...SyntheticTurfProducts,
        ...AeratorProducts,
        ...DebrisBlowerProducts,
    ],
    isLoading: false,
    error: null,

    selectedMainCategory: null,
    selectedSubCategory: null,
    selectedBrand: null,
    selectedClient: null,

    filterByMainCategory: (category) => {
        set({ selectedMainCategory: category, selectedSubCategory: null });
        set((state) => ({
            filteredProducts: state.products.filter(
                (product) =>
                    (!category || product.mainCategory === category) &&
                    (!state.selectedSubCategory ||
                        product.subCategory === state.selectedSubCategory) &&
                    (!state.selectedBrand || product.brand === state.selectedBrand) &&
                    (!state.selectedClient || product.usedBy === state.selectedClient)
            ),
        }));
    },

    filterBySubCategory: (subCategory) => {
        set({ selectedSubCategory: subCategory });
        set((state) => ({
            filteredProducts: state.products.filter(
                (product) =>
                    (!state.selectedMainCategory ||
                        product.mainCategory === state.selectedMainCategory) &&
                    (!subCategory || product.subCategory === subCategory) &&
                    (!state.selectedBrand || product.brand === state.selectedBrand) &&
                    (!state.selectedClient || product.usedBy === state.selectedClient)
            ),
        }));
    },

    filterByBrand: (brand) => {
        set({ selectedBrand: brand });
        set((state) => ({
            filteredProducts: state.products.filter(
                (product) =>
                    (!state.selectedMainCategory ||
                        product.mainCategory === state.selectedMainCategory) &&
                    (!state.selectedSubCategory ||
                        product.subCategory === state.selectedSubCategory) &&
                    (!brand || product.brand === brand) &&
                    (!state.selectedClient || product.usedBy === state.selectedClient)
            ),
        }));
    },

    filterByClient: (client) => {
        set({ selectedClient: client });
        set((state) => ({
            filteredProducts: state.products.filter(
                (product) =>
                    (!state.selectedMainCategory ||
                        product.mainCategory === state.selectedMainCategory) &&
                    (!state.selectedSubCategory ||
                        product.subCategory === state.selectedSubCategory) &&
                    (!state.selectedBrand || product.brand === state.selectedBrand) &&
                    (!client || product.usedBy === client)
            ),
        }));
    },

    resetFilters: () => {
        set({
            selectedMainCategory: null,
            selectedSubCategory: null,
            selectedBrand: null,
            selectedClient: null,
            filteredProducts: get().products,
        });
    },
}));
