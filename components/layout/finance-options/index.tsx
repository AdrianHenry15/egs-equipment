import React from "react";
import Image from "next/image";
import backgroundImg from "@/public/logos/canon-logo.png"; // New background image for financial theme
import PromoRow from "@/components/promo-row";

const FinanceOptions: React.FC = () => {
    return (
        <div className="min-h-screen bg-black w-full">
            {/* Jumbotron Header */}
            <div className="relative w-full h-96 md:h-[500px] bg-black overflow-hidden rounded-lg shadow-md">
                <Image
                    src={backgroundImg}
                    alt="Canon Financial Solutions"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    priority
                    className="opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Canon Financial Solutions</h1>
                    <p className="mt-2 text-lg md:text-xl max-w-2xl">
                        Empowering businesses with flexible financial solutions to achieve their
                        growth goals.
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col bg-white">
                <h5 className="text-4xl font-semibold flex w-full items-center text-center justify-center p-10 text-black">
                    Financial Options with Canon
                </h5>
                <hr className="border-black mx-10" />

                {/* Promo Rows */}
                <PromoRow
                    title="Flexible Leasing Options"
                    description="Canon Financial offers a range of leasing solutions that allow you to manage your cash flow while accessing the latest equipment and technology. Whether you're looking for short-term or long-term leases, we provide customizable plans that align with your business needs."
                />
                <PromoRow
                    dark
                    title="Competitive Financing Rates"
                    description="Our financing solutions come with competitive rates, helping businesses of all sizes make strategic investments in Canon’s high-quality products without breaking the bank. Explore low-interest rates, deferred payment options, and custom payment plans designed to support your financial goals."
                />
                <PromoRow
                    title="Specialized Business Solutions"
                    description="From startups to established corporations, Canon Financial crafts solutions tailored to your industry and budget. We work closely with you to understand your business objectives, ensuring you have the financial support to stay competitive in today’s marketplace."
                />
            </div>
        </div>
    );
};

export default FinanceOptions;
