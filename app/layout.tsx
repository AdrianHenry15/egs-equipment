import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Loader } from "@/components/loader";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactBar from "@/components/layout/contact-bar";

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
        // icon: {
        //     url: "/logos/EGS1.png",
        //     type: "image/png",
        //     sizes: "128x128",
        // },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster />
                <Navbar />
                <ContactBar />
                <Suspense fallback={<Loader />}>{children}</Suspense>
                <Footer />
            </body>
        </html>
    );
}
