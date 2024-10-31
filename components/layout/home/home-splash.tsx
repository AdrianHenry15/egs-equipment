"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import Logo from "@/public/logos/EGS1.png";

import "swiper/css";
import { SplashImages } from "@/lib/splash-images";

const HomeSplash = () => {
    return (
        <div className="w-full self-center text-white md:h-screen">
            <div className="w-full md:h-full">
                <Swiper
                    modules={[A11y, Autoplay]}
                    centeredSlides={true}
                    className="w-full h-full"
                    navigation
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                >
                    {SplashImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="hidden absolute w-full bg-gradient-to-r from-black h-screen z-30 md:flex"></div>
                            <div className="flex justify-center relative items-center self-center w-full md:h-full">
                                <Image
                                    className="object-cover w-full h-[200px] md:w-full md:h-full"
                                    src={img}
                                    alt="splash-img"
                                />
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    className="left-0 bottom-0 w-[100px] absolute md:hidden"
                                />
                            </div>

                            <div className="w-full z-50 top-[45%] p-4 left-10 hidden flex-col md:flex md:absolute md:top-[35%] md:p-8">
                                <span>
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        className="w-48 py-2 hidden md:flex"
                                    />
                                </span>
                                <h1 className="text-white text-[30px] md:text-5xl">
                                    EGS Equipment
                                </h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSplash;
