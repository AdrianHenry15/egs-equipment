import FilterSidebar from "./filter/filter-sidebar";
import MobileSidebarFilter from "./filter/mobile-sidebar-filter";
import ProductList from "./product-list";

export default function ProductsClient() {
    return (
        <main className="relative flex w-full flex-col bg-background text-foreground">
            <div className="flex w-full bg-background">
                <MobileSidebarFilter />
                <FilterSidebar />
                <ProductList />
            </div>
        </main>
    );
}
