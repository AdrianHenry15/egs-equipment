"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// Logos
import HowardsonLogo from "@/public/logos/howardson-logo.png";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarodLogo from "@/public/logos/harod-sport-logo.png";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";
import BuffaloLogo from "@/public/logos/buffalo-turbine.webp";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const PoweredBy = () => {
    return (
        <section className="flex flex-col items-center bg-white px-4 py-16 sm:py-20 md:py-24 lg:py-32 w-full">
            {/* Title */}
            <motion.h2
                className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                EGS Equipment is Powered By:
            </motion.h2>

            {/* Logos Container */}
            <motion.div
                className="flex flex-col items-center w-full gap-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Howardson Companies */}
                <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Image
                            src={HowardsonLogo}
                            alt="Howardson - Leader in Turf Care Equipment"
                            width={300}
                            height={55}
                            quality={85}
                            placeholder="blur"
                        />
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[DennisLogo, SISISLogo, SynProLogo].map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                variants={itemVariants}
                                className="w-16 md:w-20"
                            >
                                <Image
                                    src={logo}
                                    alt={`Brand Logo ${index + 1}`}
                                    width={80}
                                    height={80}
                                    quality={85}
                                    placeholder="blur"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Other Logos */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6"
                    variants={containerVariants}
                >
                    {[HarodLogo, BuffaloLogo, PitchmarkLogo].map((logo, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            variants={itemVariants}
                        >
                            <Image
                                src={logo}
                                alt={`Brand Logo ${index + 4}`}
                                width={120}
                                height={60}
                                quality={85}
                                placeholder="blur"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PoweredBy;
