import Image from "next/image";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

import Logo from "@/public/logos/EGS1.png";

const LogoCard = () => {
    return (
        <div className="my-4 flex flex-col items-center justify-center border-b border-border pt-10 pb-16 md:flex-1 md:items-start md:justify-start md:border-none">
            <div className="flex flex-col items-center md:items-start md:rounded-2xl md:p-6">
                <div className="mb-3">
                    <Image
                        loading="eager"
                        className="w-52 object-contain"
                        src={Logo}
                        alt="EGS Equipment logo"
                        priority
                    />
                </div>

                <div className="flex items-center text-xs text-muted-foreground">
                    <FaRegCopyright className="mr-2" />
                    <span>2026 EGS Equipment</span>
                </div>
            </div>
        </div>
    );
};

export default LogoCard;
