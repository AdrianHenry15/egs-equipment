export default function GridItem({
    title,
    subtitle,
    meta,
    onClick,
}: {
    title: string;
    subtitle?: string;
    meta?: string;
    onClick?: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
        >
            <h3 className="font-medium truncate">{title}</h3>
            {subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{subtitle}</p>
            )}
            {meta && <p className="text-xs mt-2 text-gray-400 dark:text-gray-500">{meta}</p>}
        </div>
    );
}
