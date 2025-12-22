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
            <html lang="en">
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Toaster />
                    <Navbar />
                    {/* <ContactBar /> */}
                    <Suspense fallback={<Loader />}>{children}</Suspense>
                    <SanityLive />
                    {(await draftMode()).isEnabled && <VisualEditing />}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
