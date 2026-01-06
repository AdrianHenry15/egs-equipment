"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/splash/splash-ocity.png";

const HomeSplash = () => {
    return (
        <section className="relative w-full h-105 md:h-[75vh] text-white">
            {/* Background */}
            <Image
                src={HeroImage}
                alt="Eckert Equipment"
                fill
                priority
                className="object-cover object-bottom xl:object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex items-end h-full px-6 pb-10 md:pb-14">
                <div className="max-w-xl space-y-2">
                    {/* Headline */}
                    <h1 className="text-2xl font-extrabold tracking-wide text-amber-400">Eckert Equipment</h1>

                    {/* Description */}
                    <p className="text-base md:text-lg font-medium text-gray-200 leading-relaxed">
                        Professional maintenance and sports field equipment for grounds teams, athletic facilities, and
                        turf professionals.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-3">
                        <Link
                            href="tel:15551234567"
                            className="
                                inline-flex items-center justify-center
                                h-11 px-6
                                text-sm md:text-base font-semibold
                                bg-green-600 text-black rounded-md
                                hover:bg-green-500 transition
                                shadow-md
                            "
                        >
                            Call Now
                        </Link>

                        <Link
                            href="/contact"
                            className="
                                inline-flex items-center justify-center
                                h-11 px-6
                                text-sm md:text-base font-semibold
                                bg-blue-500 rounded-md
                                hover:bg-blue-800 hover:text-black transition
                            "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSplash;
