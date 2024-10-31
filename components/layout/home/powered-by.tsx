import Image from "next/image";
import React from "react";

// Logos
import HowardsonLogo from "@/public/logos/howardson-logo.png";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarodLogo from "@/public/logos/harod-sport-logo.png";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";

const PoweredBy = () => {
    return (
        <section className="flex flex-col justify-center w-full items-center bg-white px-6 py-20 lg:px-10 lg:py-48">
            <h2 className="text-black text-3xl lg:text-5xl font-bold pb-6 lg:pb-10 text-center">
                EGS Equipment is Powered By:
            </h2>
            <div className="flex flex-wrap items-center w-full justify-center gap-8">
                {/* Howardson Companies */}
                <div className="flex flex-col items-center mb-6 w-full p-4 lg:p-16">
                    <Image
                        src={HowardsonLogo}
                        alt="Howardson - Leader in Turf Care Equipment"
                        priority
                        width={400}
                        height={75}
                    />
                    <div className="flex justify-around w-full gap-6 mt-6">
                        <Image
                            src={DennisLogo}
                            alt="Dennis - Precision Turf Mowers"
                            width={125}
                            // height={40}
                        />
                        <Image
                            src={SISISLogo}
                            alt="SISIS - Turf Maintenance Tools"
                            width={125}
                            // height={40}
                        />
                        <Image
                            src={SynProLogo}
                            alt="Syn-Pro - Synthetic Turf Equipment"
                            width={125}
                            // height={40}
                        />
                    </div>
                </div>
                {/* Other Logos */}
                <div className="flex items-center w-full justify-around">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto p-10 lg:p-16">
                        <Image
                            src={HarodLogo}
                            alt="Harod Sport - Premium Sports Equipment"
                            width={150}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto p-10 lg:p-16">
                        <Image
                            src={PitchmarkLogo}
                            alt="Pitchmark - Field Marking Solutions"
                            width={150}
                            height={75}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PoweredBy;
