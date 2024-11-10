import Image from "next/image";
import React from "react";
import Logo from "@/public/logos/EGS1.png";

interface IPromoRowProps {
    title: string;
    description: string;
    dark?: boolean;
}

const PromoRow: React.FC<IPromoRowProps> = ({ title, description, dark }) => {
    return (
        <section
            className={`${
                dark ? "bg-black text-white" : ""
            } flex flex-col items-center w-full px-6 py-16 md:px-8 md:py-20`}
        >
            {/* Title */}
            <h5
                className={`${
                    dark ? "text-white" : "text-gray-800"
                } text-2xl md:text-4xl text-center font-semibold mb-4`}
            >
                {title}
            </h5>

            {/* Description */}
            <p
                className={`${
                    dark ? "text-white" : "text-gray-800"
                } text-base md:text-lg text-center text-gray-700 max-w-2xl leading-relaxed`}
            >
                {description}
            </p>

            {/* Logo */}
            <div className="mt-8 md:mt-10">
                <Image
                    src={Logo}
                    alt="Eckert Golf Sales Logo"
                    width={80}
                    height={80}
                    className=""
                />
            </div>
        </section>
    );
};

export default PromoRow;
