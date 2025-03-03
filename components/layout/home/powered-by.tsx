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
        <section className="flex flex-col justify-center items-center bg-white px-6 py-20 lg:px-10 lg:py-48">
            <motion.h2
                className="text-black text-3xl lg:text-5xl font-bold pb-6 lg:pb-10 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                EGS Equipment is Powered By:
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Howardson Companies */}
                <motion.div
                    className="flex flex-col items-center p-4 lg:p-10"
                    variants={itemVariants}
                >
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Image
                            src={HowardsonLogo}
                            alt="Howardson - Leader in Turf Care Equipment"
                            priority
                            width={350} // Optimized size
                            height={65}
                            quality={85}
                            placeholder="blur"
                        />
                    </motion.div>
                    <div className="flex justify-center items-center gap-6 mt-6">
                        {[DennisLogo, SISISLogo, SynProLogo].map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                            >
                                <Image
                                    className="w-[60px] md:w-auto" // Slightly reduced size
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                    {[HarodLogo, BuffaloLogo, PitchmarkLogo].map((logo, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                            <Image
                                src={logo}
                                alt={`Brand Logo ${index + 4}`}
                                width={130} // Slightly reduced width for optimization
                                height={65}
                                quality={85}
                                placeholder="blur"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default PoweredBy;
