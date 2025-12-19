"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import HowardsonLogo from "@/public/logos/howardson-logo.png";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarrodLogo from "@/public/logos/harrod-sport-logo.png";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";
import BuffaloLogo from "@/public/logos/buffalo-turbine.jpg";
import { EquipmentBrand } from "@/lib/types";
import Link from "next/link";

interface ILogos {
    src: StaticImageData;
    alt: string;
    brand: EquipmentBrand;
}

const logos: ILogos[] = [
    {
        src: HowardsonLogo,
        alt: "Howardson Group",
        brand: EquipmentBrand.HOWARDSONS,
    },
    {
        src: DennisLogo,
        alt: "Dennis Mowers",
        brand: EquipmentBrand.DENNIS,
    },
    {
        src: SISISLogo,
        alt: "SISIS",
        brand: EquipmentBrand.SISIS,
    },
    {
        src: SynProLogo,
        alt: "Syn-Pro",
        brand: EquipmentBrand.SYNPRO,
    },
    {
        src: HarrodLogo,
        alt: "Harrod Sport",
        brand: EquipmentBrand.HARROD_SPORTS,
    },
    {
        src: PitchmarkLogo,
        alt: "Pitchmark",
        brand: EquipmentBrand.PITCHMARK,
    },
    {
        src: BuffaloLogo,
        alt: "Buffalo Turbine",
        brand: EquipmentBrand.BUFFALO_TURBINE,
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export default function PoweredBy() {
    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-10 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Powered By
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                        Trusted Equipment From Our Partners
                    </h3>
                </div>

                {/* Logos */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12 items-center"
                >
                    {logos.map((logo) => (
                        <motion.li key={logo.alt} variants={item} className="flex justify-center">
                            <Link
                                href={`/products?brand=${logo.brand}`}
                                aria-label={`View ${logo.alt} equipment`}
                                className="group"
                            >
                                <div className="relative h-12 w-36 opacity-70 transition-all duration-300 group-hover:opacity-100">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
