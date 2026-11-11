/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, FieldErrors } from "react-hook-form";

interface IInputProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    defaultValue?: string;
    control: any;
    errors?: FieldErrors;
    errorRequiredText?: string;
    errorPatternText?: string;
}

const Input = ({
    inputName,
    control,
    errors,
    errorRequiredText,
    errorPatternText,
    placeholder,
    defaultValue,
}: IInputProps) => {
    return (
        <Controller
            name={inputName}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <div>
                    <input
                        {...field}
                        className="my-2 w-full rounded-sm border-2 border-input bg-background p-2 text-foreground shadow-md placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                        type="text"
                        placeholder={placeholder}
                    />
                    {errors && errors[inputName] && errors[inputName]?.type === "required" && (
                        <p className="ml-4 text-sm text-red-700 [.dark_&]:text-red-300">{errorRequiredText}</p>
                    )}
                    {errors && errors[inputName] && errors[inputName]?.type === "pattern" && (
                        <p className="ml-4 text-sm text-red-700 [.dark_&]:text-red-300">{errorPatternText}</p>
                    )}
                </div>
            )}
        ></Controller>
    );
};

export default Input;
