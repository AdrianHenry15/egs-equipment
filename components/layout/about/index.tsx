import React from "react";
import Image from "next/image";
import backgroundImg from "@/public/grass-img.jpg"; // Example background image
import PromoRow from "@/components/promo-row";

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            {/* Jumbotron Header */}
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-md">
                <Image
                    src={backgroundImg}
                    alt="Jumbotron Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className="opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">The Story of EGS Equipment</h1>
                    <p className="mt-2 text-lg md:text-xl max-w-2xl">
                        Serving turf and landscaping needs all over the United States of America for
                        over 20 years with quality machinery and expertise.
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col">
                <h5 className="text-5xl font-semibold flex w-full items-center text-center justify-center py-10 text-black">
                    About EGS Equipment
                </h5>
                <hr className="border-black" />
                <PromoRow
                    description="Eckert Golf Sales has been operating in Florida for 20 years, starting
                        primarily as a provider for Florida golf course customers. Our mission has
                        always been to offer tailored solutions for maintaining fine turf, with
                        equipment for mowing, de-thatching, aerating, and slicing. Over the years,
                        we have expanded to meet the needs of additional industries, spending
                        significant time servicing synthetic turf, sports fields, and stadiums."
                    title={"Our Journey"}
                />
                <PromoRow
                    dark
                    title="Our Products"
                    description="We proudly represent top manufacturers and provide quality machinery from
                        brands such as SISIS, Buffalo Turbine, Eastman Industries, Ryan, Lely, and
                        Gandy. In addition, we offer engines and parts for our equipment, partnering
                        with reliable names like Kohler, Briggs & Stratton, Honda, Kubota, and
                        Subaru. Our Buffalo Turbine blowers are versatile, used not only for turf
                        care but also in industries requiring debris removal and dust suppression."
                />
                <PromoRow
                    title="Industries Served"
                    description="Our products cater to a variety of sectors beyond golf and turf, including
                        landscaping, road clearing and paving, recycling plants, and construction
                        sites. We take pride in providing the tools that help these industries
                        perform efficiently and effectively."
                />
            </div>
        </div>
    );
};

export default About;
