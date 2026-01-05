"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImg from "@/public/grass-img.jpg";
import PromoRow from "@/components/promo-row";
import Link from "next/link";

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } as const,
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } } as const,
};

const About: React.FC = () => {
    return (
        <motion.div
            className="min-h-screen w-full bg-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Jumbotron Header */}
            <motion.div
                className="relative w-full h-96 md:h-125 overflow-hidden rounded-lg shadow-lg"
                variants={fadeIn}
            >
                <Image
                    src={backgroundImg}
                    alt="Jumbotron Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className="opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80 flex flex-col items-center justify-center text-center text-white px-6">
                    <motion.h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg" variants={fadeIn}>
                        The Story of EGS Equipment
                    </motion.h1>
                    <motion.p className="mt-3 text-lg md:text-xl max-w-2xl leading-relaxed" variants={fadeIn}>
                        Serving turf and landscaping needs across the United States for over 25 years with quality
                        machinery and expertise.
                    </motion.p>
                </div>
            </motion.div>
            {/* About Section */}
            <motion.section className="flex flex-col items-center py-16 px-6 md:px-12" variants={staggerContainer}>
                <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center" variants={fadeIn}>
                    About EGS Equipment
                </motion.h2>
                <motion.div className="w-16 h-1 bg-green-600 mt-4 mb-10" variants={fadeIn} />

                {/* PromoRow Component */}
                <motion.div variants={fadeIn}>
                    <PromoRow
                        title="Our Journey"
                        description={`At Eckert Golf Sales (EGS Equipment), we are a leading provider of innovative turf renovation equipment, dedicated to serving the golf, sports field, and fine turf industries.\n\n
                        With a commitment to excellence, we offer a comprehensive range of advanced machinery designed to enhance turf quality. Our products deliver superior performance in aerating, dethatching, mowing, and soil cultivation—ensuring pristine conditions for all turf applications.\n\n
                        For over 25 years, EGS Equipment has been trusted by turf care professionals. We provide cutting-edge technology, durable designs, and exceptional customer support, working closely with clients to offer tailored solutions, training, and maintenance.\n\n
                        At EGS Equipment, we are more than just a supplier—we are a partner in achieving beautiful, long-lasting turf that stands the test of time.`}
                        dark
                    />
                </motion.div>
            </motion.section>
            <div className="flex justify-center items-center p-4 bg-white">
                <Link
                    className="py-2 px-10 justify-center items-center flex bg-green-600 hover:bg-green-800 transition-colors ease-in-out duration-300 rounded-lg"
                    href={"/contact"}
                >
                    Contact Us
                </Link>
            </div>{" "}
        </motion.div>
    );
};

export default About;
