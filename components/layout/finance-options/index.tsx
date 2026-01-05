"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImg from "@/public/logos/canon-logo.png";
import PromoRow from "@/components/promo-row";
import Link from "next/link";

const FinanceOptions: React.FC = () => {
    return (
        <motion.div
            className="min-h-screen bg-black w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Jumbotron Header */}
            <div className="relative w-full h-96 md:h-125 bg-black overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={backgroundImg}
                    alt="Canon Financial Solutions"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    priority
                    className="opacity-90"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
                    <motion.h1
                        className="text-3xl md:text-5xl font-extrabold"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Canon Financial Services
                    </motion.h1>
                    <motion.p
                        className="mt-2 text-lg md:text-xl max-w-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Empowering businesses with flexible financial solutions to achieve their growth goals.
                    </motion.p>
                </div>
            </div>

            <motion.div
                className="flex w-full flex-col bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h5 className="text-4xl font-semibold flex w-full items-center text-center justify-center p-10 text-black">
                    Financial Options with Canon
                </h5>
                <hr className="border-black mx-10" />

                {/* Promo Rows with Motion Effects */}
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
            <div className="flex justify-center items-center p-4 bg-gray-100">
                <Link
                    className="py-2 px-10 justify-center items-center flex bg-green-600 hover:bg-green-500/50 transition-colors ease-in-out duration-300 rounded-lg"
                    href={"/contact"}
                >
                    Contact Us
                </Link>
            </div>
        </motion.div>
    );
};

export default FinanceOptions;
