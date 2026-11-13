/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import { Controller } from "react-hook-form";

interface InputProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    control: any;
    type?: "text" | "email" | "tel";
    autoComplete?: string;
    required?: boolean;
}

export default function Input({
    inputName,
    inputLabel,
    placeholder,
    control,
    type = "text",
    autoComplete,
    required = false,
}: InputProps) {
    const id = useId();
    const errorId = `${id}-error`;

    return (
        <Controller
            name={inputName}
            control={control}
            rules={{
                validate: (value: string) => {
                    const text = value.trim();
                    if (!text) return !required || `${inputLabel} is required.`;
                    if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
                        return "Enter a valid email address.";
                    }
                    return true;
                },
            }}
            render={({ field, fieldState: { error } }) => (
                <div className="mb-4">
                    <label htmlFor={id} className="block text-sm font-medium text-foreground">
                        {inputLabel}
                        {required && <span aria-hidden="true"> *</span>}
                    </label>
                    <input
                        {...field}
                        id={id}
                        className="mt-1 w-full rounded-sm border-2 border-input bg-background p-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                        type={type}
                        autoComplete={autoComplete}
                        required={required}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? errorId : undefined}
                        placeholder={placeholder}
                    />
                    {error && (
                        <p id={errorId} role="alert" className="mt-1 text-sm text-red-700 [.dark_&]:text-red-300">
                            {error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
}
