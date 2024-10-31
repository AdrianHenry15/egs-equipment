"use client";

export default function SkeletonLoader() {
    return (
        <div className="bg-gray-200 border border-gray-300 rounded-lg shadow animate-pulse">
            <div className="h-48 bg-gray-300 rounded-t-lg"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
            </div>
        </div>
    );
}
