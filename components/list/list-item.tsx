import Image from "next/image";
import Link from "next/link";

interface ListItemProps {
    image?: string;
    title: string;
    description?: string | undefined;
    meta?: string | undefined;
    href: string | undefined;
}

export default function ListItem({ image, title, description, meta, href }: ListItemProps) {
    return (
        <Link
            href={href ?? "#"}
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition cursor-pointer"
        >
            {/* Left image / avatar */}
            {image ? (
                <Image
                    src={image}
                    alt=""
                    className="h-12 w-12 rounded-md object-cover bg-gray-200"
                />
            ) : (
                <div className="h-12 w-12 rounded-md bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium">
                    {title.charAt(0)}
                </div>
            )}

            {/* Main content */}
            <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-gray-900 dark:text-gray-100">{title}</p>
                {description && (
                    <p className="truncate text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                )}
            </div>

            {/* Right meta */}
            {meta && <div className="text-sm text-gray-500 whitespace-nowrap">{meta}</div>}
        </Link>
    );
}
