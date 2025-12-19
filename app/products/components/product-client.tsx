import FilterSidebar from "./filter/filter-sidebar";
import MobileSidebarFilter from "./filter/mobile-sidebar-filter";
import ProductList from "./product-list";

export default function ProductsClient() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <div className="flex bg-white">
                <MobileSidebarFilter />
                <FilterSidebar />
                <ProductList />
            </div>
        </div>
    );
}
