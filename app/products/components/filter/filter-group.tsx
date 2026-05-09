"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckSquare, FiChevronDown, FiSquare } from "react-icons/fi";

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
    collapsed: {
        opacity: 0,
        y: -4,
    },

    open: {
        opacity: 1,
        y: 0,
    },
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
        <section className="mt-4 border-b border-border pb-4">
            {/* Header */}
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                className="flex w-full items-center justify-between text-left text-sm font-semibold text-card-foreground transition hover:text-primary"
            >
                <span>{title}</span>

                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground"
                >
                    <FiChevronDown />
                </motion.span>
            </button>

            {/* Options */}
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
                            aria-pressed={isSelected}
                            onClick={() => onChange(isSelected ? null : option.value)}
                            className={`
                                flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition
                                ${
                                    isSelected
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }
                            `}
                        >
                            {isSelected ? (
                                <FiCheckSquare className="h-4 w-4 text-primary" />
                            ) : (
                                <FiSquare className="h-4 w-4 text-muted-foreground" />
                            )}

                            <span className="text-sm font-medium">{option.label}</span>
                        </motion.button>
                    );
                })}
            </motion.div>
        </section>
    );
}
