"use client";

import { IoFilterOutline } from "react-icons/io5";

import { ProductFilterContent } from "./product-filter-content";

export default function FilterSidebar() {
    return (
        <aside className="hidden min-w-72 flex-col border-r border-border bg-card p-4 text-card-foreground lg:flex">
            <div className="mb-4 flex items-center space-x-2 border-b border-border pb-4">
                <IoFilterOutline size={20} className="text-muted-foreground" />

                <h2 className="text-xl font-semibold text-card-foreground">Filters</h2>
            </div>

            <ProductFilterContent />
        </aside>
    );
}
