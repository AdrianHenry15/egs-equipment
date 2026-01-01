import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getRecaptchaToken = async () => {
    if (!(window as any).grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
    }

    return await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: "submit_estimate",
    });
};
