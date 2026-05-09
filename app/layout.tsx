import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ModalRoot from "@/components/modals/modal-root";
import CookieConsentCard from "@/components/cookie-consent-card";
import GlobalOptionsWidget from "@/app/components/global-options-widget";
import { SanityLive } from "@/sanity/lib/live";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://egsequipment.com"),
    title: {
        default: "EGS Equipment",
        template: "%s | EGS Equipment",
    },
    description:
        "Professional turf, sports field, and grounds equipment solutions for flawless greens and expert care.",
    applicationName: "EGS Equipment",
    keywords: [
        "EGS Equipment",
        "sports turf equipment",
        "grounds equipment",
        "golf course equipment",
        "field maintenance equipment",
        "turf care",
    ],
    authors: [{ name: "EGS Equipment" }],
    creator: "EGS Equipment",
    publisher: "EGS Equipment",
    icons: {
        icon: "/logos/egs-swoosh.png",
        shortcut: "/logos/egs-swoosh.png",
        apple: "/logos/egs-swoosh.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "EGS Equipment",
        title: "EGS Equipment",
        description:
            "Professional turf, sports field, and grounds equipment solutions for flawless greens and expert care.",
        images: [
            {
                url: "/logos/egs-swoosh.png",
                width: 1200,
                height: 630,
                alt: "EGS Equipment",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "EGS Equipment",
        description:
            "Professional turf, sports field, and grounds equipment solutions for flawless greens and expert care.",
        images: ["/logos/egs-swoosh.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isDraftMode = (await draftMode()).isEnabled;

    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
                >
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Toaster />
                        <Navbar />
                        {children}
                        <ModalRoot />
                        <CookieConsentCard />
                        <SanityLive />
                        {isDraftMode && <VisualEditing />}
                        <GlobalOptionsWidget />
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
