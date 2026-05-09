"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import backgroundImg from "@/public/grass-img.jpg";
import PromoRow from "@/components/promo-row";

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
            className="min-h-screen w-full bg-background"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div
                className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg md:h-125"
                variants={fadeIn}
            >
                <Image
                    src={backgroundImg}
                    alt="Jumbotron Background"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover object-center opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-b from-foreground/50 to-foreground/80 px-6 text-center text-background">
                    <motion.h1 className="text-3xl font-extrabold drop-shadow-lg md:text-5xl" variants={fadeIn}>
                        The Story of EGS Equipment
                    </motion.h1>

                    <motion.p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl" variants={fadeIn}>
                        Serving turf and landscaping needs across the United States for over 25 years with quality
                        machinery and expertise.
                    </motion.p>
                </div>
            </motion.div>

            <motion.section className="flex flex-col items-center px-6 py-16 md:px-12" variants={staggerContainer}>
                <motion.h2 className="text-center text-4xl font-bold text-foreground md:text-5xl" variants={fadeIn}>
                    About EGS Equipment
                </motion.h2>

                <motion.div className="mt-4 mb-10 h-1 w-16 bg-primary" variants={fadeIn} />

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

            <div className="flex items-center justify-center bg-background p-4">
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

export default About;
