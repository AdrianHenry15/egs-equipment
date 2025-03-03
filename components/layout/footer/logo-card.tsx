import Image from "next/image";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

import Logo from "@/public/logos/EGS1.png";

const LogoCard = () => {
    return (
        <span className="flex flex-col justify-center items-center my-4 border-b-[1px] border-zinc-900 border-b-1 pt-10 pb-16 md:flex-1 md:border-none md:justify-start">
            <div className="flex flex-col items-center md:rounded-2xl md:p-10">
                <span className="mb-2 pl-10">
                    <Image loading="eager" className="w-[200px]" src={Logo} alt="logo" />
                </span>
                <span className="flex items-center text-xs text-zinc-500">
                    <FaRegCopyright className="mx-2" />
                    2025 EGS Equipment
                </span>
            </div>
        </span>
    );
};

export default LogoCard;
