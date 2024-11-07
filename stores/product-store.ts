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
        applyFilters();
    },

    filterBySubCategory: (subCategory) => {
        set({ selectedSubCategory: subCategory });
        applyFilters();
    },

    filterByBrand: (brand) => {
        set({ selectedBrand: brand });
        applyFilters();
    },

    filterByClient: (client) => {
        set({ selectedClient: client });
        applyFilters();
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

// Helper function to apply filters based on active states
const applyFilters = () => {
    const { products, selectedMainCategory, selectedSubCategory, selectedBrand, selectedClient } =
        useProductStore.getState();

    const filtered = products.filter((product) => {
        return (
            (!selectedMainCategory || product.mainCategory === selectedMainCategory) &&
            (!selectedSubCategory || product.subCategory === selectedSubCategory) &&
            (!selectedBrand || product.brand === selectedBrand) &&
            (!selectedClient || product.usedBy === selectedClient)
        );
    });

    useProductStore.setState({ filteredProducts: filtered });
};
