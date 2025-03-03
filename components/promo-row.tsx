import React from "react";
import { motion } from "framer-motion";

interface IPromoRowProps {
    title: string;
    description: string;
    dark?: boolean;
}

const PromoRow: React.FC<IPromoRowProps> = ({ title, description, dark }) => {
    return (
        <motion.section
            className={`relative flex flex-col items-center w-full px-6 py-14 md:px-10 md:py-20 rounded-lg shadow-lg transition-all ${
                dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Title */}
            <h5 className="text-3xl md:text-4xl font-bold text-center">{title}</h5>
            <div className="w-14 h-1 bg-green-500 mt-4 mb-6"></div>

            {/* Description */}
            <p className="text-lg md:text-xl text-center leading-relaxed max-w-3xl">
                {description.split("\n\n").map((paragraph, index) => (
                    <span key={index} className="block mt-4">
                        {paragraph}
                    </span>
                ))}
            </p>
        </motion.section>
    );
};

export default PromoRow;
