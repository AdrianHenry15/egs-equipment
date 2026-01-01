import { useState } from "react";
import { FiCheckSquare, FiChevronDown, FiSquare } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    collapsed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.04,
        },
    },
} as const;

const itemVariants = {
    collapsed: { opacity: 0, y: -4 },
    open: { opacity: 1, y: 0 },
} as const;

export default function FilterGroup({
    title,
    options = [],
    selectedOption,
    onChange,
    defaultOpen = true,
}: {
    title: string;
    options: string[];
    selectedOption: string | null;
    onChange: (option: string | null) => void;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);

    if (!options.length) {
        return null; // or render "No filters available"
    }

    return (
        <section className="mt-4">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between text-sm font-semibold text-black"
                aria-expanded={open}
            >
                {title}
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={containerVariants}
                        className="overflow-hidden mt-2 pl-1 space-y-1"
                    >
                        {options.map((option) => (
                            <motion.button
                                key={option}
                                variants={itemVariants}
                                type="button"
                                onClick={() => onChange(selectedOption === option ? null : option)}
                                className="
                                    flex items-center gap-2 text-left
                                    hover:bg-gray-100 rounded px-1 py-0.5
                                "
                                aria-pressed={selectedOption === option}
                            >
                                {selectedOption === option ? (
                                    <FiCheckSquare className="w-4 h-4 text-black" />
                                ) : (
                                    <FiSquare className="w-4 h-4 text-black" />
                                )}
                                <span className="text-sm text-black">{option}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
