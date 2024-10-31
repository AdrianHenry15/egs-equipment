import Image from "next/image";
import React from "react";

// Logos
import HowardsonLogo from "@/public/logos/howardson-logo.png";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarodLogo from "@/public/logos/harod-sport-logo.png";

const PoweredBy = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white px-10 py-48">
            <h5 className="text-black text-5xl font-bold pb-10">EGS Equipment is Powered By:</h5>
            <div className="flex flex-col items-center justify-center lg:flex-row">
                {/* Howardson Companies */}
                <div className="flex flex-col items-center justify-center w-full my-10">
                    <Image src={HowardsonLogo} className="w-1/2" alt="howardson-logo" />
                    {/* Dennis, SISIS, Syn-Pro */}
                    <div className="flex items-center justify-between w-full">
                        <Image src={DennisLogo} alt="dennis-logo" className="w-24" />
                        <Image src={SISISLogo} alt="sisis-logo" className="w-24" />
                        <Image src={SynProLogo} alt="synpro-logo" className="w-24" />
                    </div>
                </div>
                <Image src={HarodLogo} alt="harod-logo" className="w-1/3" />
            </div>
        </div>
    );
};

export default PoweredBy;
