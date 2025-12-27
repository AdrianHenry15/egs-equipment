"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* -------------------------------- */
/* Base styles */
/* -------------------------------- */

const baseInputStyles =
    "w-full rounded-md border px-3 py-2 text-sm " +
    "bg-white text-gray-900 border-gray-300 " +
    "focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 " +
    "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700";

/* -------------------------------- */
/* Field */
/* -------------------------------- */

export function Field({
    label,
    required,
    error,
    children,
    description,
}: {
    label: string;
    required?: boolean;
    error?: string | undefined;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium text-gray-800 dark:text-gray-200">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </span>

            {children}

            {description && !error && (
                <span className="text-xs text-gray-500 dark:text-gray-400">{description}</span>
            )}

            {error && <span className="text-xs text-red-600 dark:text-red-500">{error}</span>}
        </label>
    );
}

/* -------------------------------- */
/* Input */
/* -------------------------------- */

export const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(baseInputStyles, className)} {...props} />;
});

/* -------------------------------- */
/* Select */
/* -------------------------------- */

export const Select = React.forwardRef<
    HTMLSelectElement,
    React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
    return (
        <select ref={ref} className={cn(baseInputStyles, className)} {...props}>
            {children}
        </select>
    );
});

/* -------------------------------- */
/* Textarea */
/* -------------------------------- */

export const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(baseInputStyles, className)} {...props} />;
});
