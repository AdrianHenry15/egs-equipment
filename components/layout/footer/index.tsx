import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        <footer className="w-full border-t-4 border-brand-gold bg-brand-black text-white">
            <div className="mx-auto grid w-full max-w-7xl gap-x-10 gap-y-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <LogoCard />
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                        Equipment, parts, and support for golf courses and sports fields.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
                    >
                        Request a quote
                        <ArrowRightIcon className="size-4" aria-hidden="true" />
                    </Link>
                </div>
                <FooterMenu />
                <ContactCard />
            </div>

            <div className="border-t border-white/15">
                <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-4 sm:px-8">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
                        <p>© {new Date().getFullYear()} EGS Equipment</p>
                    </div>
                    <nav
                        aria-label="Website information"
                        className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75"
                    >
                        <Link href="/privacy" className="underline-offset-4 hover:text-brand-gold hover:underline">
                            Privacy Policy
                        </Link>
                        <Link
                            href="/accessibility"
                            className="underline-offset-4 hover:text-brand-gold hover:underline"
                        >
                            Accessibility
                        </Link>
                        <Link href="/site-map" className="underline-offset-4 hover:text-brand-gold hover:underline">
                            Sitemap
                        </Link>
                    </nav>
                    <SocialsCard />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
