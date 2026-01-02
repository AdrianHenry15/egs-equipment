"use client";

import { IoFilterOutline } from "react-icons/io5";
import { ProductFilterContent } from "./product-filter-content";

export default function FilterSidebar() {
    return (
        <aside className="hidden min-w-72 flex-col border-r border-gray-200 bg-white p-4 lg:flex">
            <div className="mb-4 flex items-center space-x-2">
                <IoFilterOutline color="black" size={20} />
                <h2 className="text-xl font-semibold text-black">Filters</h2>
            </div>

            <ProductFilterContent />
        </aside>
    );
}
