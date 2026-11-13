/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import { Controller } from "react-hook-form";

interface IInputProps {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    control: any;
}

const Textarea = ({ inputName, inputLabel, control, placeholder }: IInputProps) => {
    const id = useId();

    return (
        <Controller
            name={inputName}
            control={control}
            defaultValue={""}
            render={({ field }) => (
                <div className="mb-4">
                    <label htmlFor={id} className="block text-sm font-medium text-foreground">
                        {inputLabel}
                    </label>
                    <textarea
                        id={id}
                        className="mt-1 h-40 w-full rounded-sm border-2 border-input bg-background p-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                        placeholder={placeholder}
                        {...field}
                    />
                </div>
            )}
        ></Controller>
    );
};

export default Textarea;
