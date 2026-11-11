import Link from "next/link";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border bg-card text-card-foreground">
            <div className="mx-auto grid w-full max-w-7xl gap-x-10 gap-y-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <LogoCard />
                </div>
                <FooterMenu />
                <ContactCard />
            </div>

            <div className="border-t border-border">
                <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-4 sm:px-8">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} EGS Equipment</p>
                        {/* <Link
                            href="https://www.thirdgenerationstudios.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                        >
                            Website by Third Generation Studios
                        </Link> */}
                    </div>
                    <SocialsCard />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
