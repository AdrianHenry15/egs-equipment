"use client";

import React from "react";
import Link from "next/link";

import { MdCopyright } from "react-icons/md";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        // FULL CONTAINER
        <footer className="w-full bg-zinc-800 text-white flex flex-col justify-center px-4">
            {/* FOOTER MENU */}
            <div className="flex flex-col self-center w-full md:flex-row md:py-2">
                <LogoCard />
                <div className="flex flex-col md:flex-row md:w-1/2 md:self-center">
                    <FooterMenu />
                    <ContactCard />
                </div>
            </div>
            {/* SOCIALS  */}
            <SocialsCard />
            {/* CREATED BY */}
            <div className="flex items-center justify-center text-center self-center w-full py-2 text-xs">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xs mx-1 text-[10px]">Created by</p>
                    {/* THIRD GEN LOGO */}
                    <Link
                        className="flex items-center"
                        target="_blank"
                        href="https://www.thirdgenerationstudios.com/"
                    >
                        <MdCopyright size={8} className="mb-2 mr-1 text-white" />
                        <p className="text-zinc-500 text-[10px]">Third Generation Studios</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
