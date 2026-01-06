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

export function formatEventDateRange(startDate: string, endDate?: string) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (!end || start.toDateString() === end.toDateString()) {
        // Single-day event
        return start.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();

    if (sameMonth) {
        // January 19–22, 2026
        return `${start.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        })}–${end.getDate()}, ${start.getFullYear()}`;
    }

    // January 30 – February 2, 2026
    return `${start.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    })} – ${end.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })}`;
}
