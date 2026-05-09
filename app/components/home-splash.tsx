"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/splash/splash-ocity.png";

const HomeSplash = () => {
    return (
        <section className="relative h-105 w-full text-primary-foreground md:h-[75vh]">
            {/* Background */}
            <Image
                src={HeroImage}
                alt="Eckert Equipment"
                fill
                priority
                className="object-cover object-bottom xl:object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-black/85 via-brand-black/45 to-brand-black/20" />
            {/* Content */}
            <div className="relative z-10 flex h-full items-end px-6 pb-10 md:pb-14">
                <div className="max-w-xl space-y-3">
                    {/* Headline */}
                    <h1 className="text-3xl font-extrabold tracking-wide text-brand-gold drop-shadow-lg md:text-5xl">
                        Eckert Equipment
                    </h1>

                    {/* Description */}
                    <p className="text-base font-medium leading-relaxed text-white drop-shadow-md md:text-lg">
                        Professional maintenance and sports field equipment for grounds teams, athletic facilities, and
                        turf professionals.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-3">
                        <Link
                            href="tel:15551234567"
                            className="
                                inline-flex h-11 items-center justify-center
                                rounded-lg
                                bg-primary
                                px-6
                                text-sm
                                font-semibold
                                text-primary-foreground
                                shadow-md
                                transition
                                hover:bg-primary/90
                                md:text-base
                            "
                        >
                            Call Now
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-lg border border-brand-gold bg-brand-black/80 px-6 text-sm font-semibold text-brand-gold shadow-md backdrop-blur-sm transition hover:bg-brand-gold hover:text-brand-black md:text-base"
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
