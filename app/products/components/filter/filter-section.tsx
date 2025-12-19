interface FilterSectionProps {
    title: string;
    options: string[];
    selected: string | null;
    onSelect: (value: string) => void;
}

function FilterSection({ title, options, selected, onSelect }: FilterSectionProps) {
    return (
        <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onSelect(option)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        selected === option ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
export default FilterSection;
