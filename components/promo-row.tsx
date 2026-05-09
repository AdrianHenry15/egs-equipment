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
            className={`relative flex w-full flex-col items-center rounded-lg px-6 py-14 transition-all md:px-10 md:py-20 ${
                dark ? "bg-foreground text-background" : "bg-muted text-foreground"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            {/* Title */}
            <h5 className="text-center text-3xl font-bold md:text-4xl">{title}</h5>

            <div className="mt-4 mb-6 h-1 w-14 bg-primary" />

            {/* Description */}
            <p className="max-w-3xl text-center text-lg leading-relaxed md:text-xl">
                {description.split("\n\n").map((paragraph, index) => (
                    <span key={index} className="mt-4 block">
                        {paragraph}
                    </span>
                ))}
            </p>
        </motion.section>
    );
};

export default PromoRow;
