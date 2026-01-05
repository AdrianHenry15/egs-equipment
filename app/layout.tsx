import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import ModalRoot from "@/components/modals/modal-root";
import { ThemeProvider } from "next-themes";
import GlobalOptionsWidget from "./components/global-options-widget";
import CookieConsentCard from "@/components/cookie-consent-card";
import Script from "next/script";

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
    title: "Home | EGS Equipment",
    description: "Flawless Greens, Expert Care",
    icons: {
        icon: "/logos/egs-swoosh.png",
        shortcut: "/logos/egs-swoosh.png",
        apple: "/logos/egs-swoosh.png",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    {/* Google reCAPTCHA v3 */}
                    {/* <Script
                        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                        strategy="afterInteractive"
                    /> */}
                    <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem disableTransitionOnChange>
                        <Toaster />
                        <Navbar />
                        {children}
                        <ModalRoot />
                        <CookieConsentCard />
                        <SanityLive />
                        {(await draftMode()).isEnabled && <VisualEditing />}
                        <GlobalOptionsWidget />
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
