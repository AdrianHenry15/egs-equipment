import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Loader } from "@/components/loader";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import ModalRoot from "@/components/modals/modal-root";
import { ThemeProvider } from "next-themes";
import GlobalOptionsWidget from "./components/global-options-widget";
import CookieConsentModal from "@/components/modals/cookie-consent-modal";

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
                    <ThemeProvider
                        attribute={"class"}
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Toaster />
                        <Navbar />
                        {/* <ContactBar /> */}
                        <Suspense fallback={<Loader />}>{children}</Suspense>
                        <ModalRoot />
                        <CookieConsentModal />
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
