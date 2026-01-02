export function FeaturedProductSkeleton() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 animate-pulse flex flex-col">
            <div className="h-48 w-full bg-gray-200 rounded-lg mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
            <div className="h-10 bg-gray-300 rounded-md mt-auto" />
        </div>
    );
}
