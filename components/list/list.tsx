interface ListProps {
    children: React.ReactNode;
}

export default function List({ children }: ListProps) {
    return (
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {children}
        </div>
    );
}
