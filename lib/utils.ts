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

function parseLocalDate(dateString: string): Date {
    if (!dateString) {
        throw new Error("parseLocalDate: dateString is required");
    }

    const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);

    if (!match) {
        throw new Error(`parseLocalDate: Invalid date format "${dateString}"`);
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
        throw new Error(`parseLocalDate: Invalid date values "${dateString}"`);
    }

    return new Date(year, month - 1, day);
}

export function formatEventDateRange(startDate: string, endDate?: string) {
    const start = parseLocalDate(startDate);
    const end = endDate ? parseLocalDate(endDate) : null;

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
