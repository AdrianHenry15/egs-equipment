"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import backgroundImg from "@/public/logos/canon-logo.png";
import PromoRow from "@/components/promo-row";

const FinanceOptions: React.FC = () => {
    return (
        <motion.div
            className="min-h-screen w-full bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex w-full flex-col bg-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Image
                    src={backgroundImg}
                    alt="Canon Financial Services"
                    className="mx-auto mt-10 h-auto w-52 object-contain"
                />

                <h2 className="flex w-full items-center justify-center p-10 text-center text-4xl font-semibold text-foreground">
                    Financial Options with Canon
                </h2>

                <hr className="mx-10 border-border" />

                <PromoRow
                    title="Flexible Leasing Options"
                    description="Canon Financial offers a range of leasing solutions that allow you to manage your cash flow while accessing the latest equipment and technology. Whether you're looking for short-term or long-term leases, we provide customizable plans that align with your business needs."
                />

                <PromoRow
                    dark
                    title="Competitive Financing Rates"
                    description="Our financing solutions come with competitive rates, helping businesses of all sizes make strategic investments in Canon’s high-quality products without breaking the bank. Explore low-interest rates, deferred payment options, and custom payment plans designed to support your financial goals."
                />

                <PromoRow
                    title="Specialized Business Solutions"
                    description="From startups to established corporations, Canon Financial crafts solutions tailored to your industry and budget. We work closely with you to understand your business objectives, ensuring you have the financial support to stay competitive in today’s marketplace."
                />
            </motion.div>

            <div className="flex items-center justify-center bg-muted p-4">
                <Link
                    className="flex items-center justify-center rounded-lg bg-primary px-10 py-2 text-primary-foreground transition-colors duration-300 ease-in-out hover:bg-primary/90"
                    href="/contact"
                >
                    Contact Us
                </Link>
            </div>
        </motion.div>
    );
};

export default FinanceOptions;
