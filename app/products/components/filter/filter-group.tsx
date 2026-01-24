"use client";

import { useState } from "react";
import { FiCheckSquare, FiChevronDown, FiSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
    collapsed: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
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

export type FilterOption = {
    label: string;
    value: string;
};

interface FilterGroupProps {
    title: string;
    options: FilterOption[];
    selectedOption: string | null;
    onChange: (option: string | null) => void;
    defaultOpen?: boolean;
}

export default function FilterGroup({
    title,
    options,
    selectedOption,
    onChange,
    defaultOpen = true,
}: FilterGroupProps) {
    const [open, setOpen] = useState(defaultOpen);

    if (!options.length) return null;

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

            {/* ALWAYS MOUNTED — ONLY ANIMATING STATE */}
            <motion.div
                initial={false}
                animate={open ? "open" : "collapsed"}
                variants={containerVariants}
                className="mt-2 space-y-1 overflow-hidden pl-1"
            >
                {options.map((option) => {
                    const isSelected = selectedOption === option.value;

                    return (
                        <motion.button
                            key={`${option.value}-${option.label}`}
                            variants={itemVariants}
                            type="button"
                            onClick={() => onChange(isSelected ? null : option.value)}
                            className="flex items-center gap-2 rounded px-1 py-0.5 text-left hover:bg-gray-100"
                            aria-pressed={isSelected}
                        >
                            {isSelected ? (
                                <FiCheckSquare className="h-4 w-4 text-black" />
                            ) : (
                                <FiSquare className="h-4 w-4 text-black" />
                            )}
                            <span className="text-sm text-black">{option.label}</span>
                        </motion.button>
                    );
                })}
            </motion.div>
        </section>
    );
}
