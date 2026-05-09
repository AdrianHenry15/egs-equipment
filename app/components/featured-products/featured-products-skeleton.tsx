export function FeaturedProductSkeleton() {
    return (
        <div className="flex animate-pulse flex-col rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="mb-4 h-48 w-full rounded-lg bg-muted" />

            <div className="mb-2 h-6 w-3/4 rounded bg-muted" />

            <div className="mb-2 h-4 w-full rounded bg-muted" />

            <div className="mb-4 h-4 w-5/6 rounded bg-muted" />

            <div className="mt-auto h-10 rounded-md bg-accent" />
        </div>
    );
}
