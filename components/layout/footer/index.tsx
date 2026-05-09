"use client";

import Link from "next/link";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        <footer className="flex w-full flex-col justify-center border-t border-border bg-card text-card-foreground">
            {/* MAIN FOOTER CONTENT */}
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:justify-between">
                <LogoCard />

                <div className="flex flex-col gap-10 md:w-1/2 md:flex-row md:justify-end">
                    <FooterMenu />
                    <ContactCard />
                </div>
            </div>

            {/* SOCIALS */}
            <div className="border-t border-border">
                <div className="mx-auto w-full max-w-7xl px-4 py-6">
                    <SocialsCard />
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-border">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-4 text-center">
                    <Link
                        href="https://www.thirdgenerationstudios.com/"
                        target="_blank"
                        className="text-xs text-muted-foreground transition hover:text-primary"
                    >
                        Third Generation Studios.
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
