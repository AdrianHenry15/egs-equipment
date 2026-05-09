import Link from "next/link";
import React from "react";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const SocialsCard = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center py-2">
            <h5 className="mb-8 text-xl font-semibold tracking-wide text-card-foreground">Connect With Us</h5>

            <div className="flex items-center justify-center gap-6">
                <Link
                    target="_blank"
                    href="https://www.facebook.com/EGSturf/"
                    aria-label="EGS Equipment Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition duration-300 ease-in-out hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                >
                    <AiFillFacebook size={24} />
                </Link>

                <Link
                    target="_blank"
                    href="https://www.instagram.com/egsturf?igsh=MWhubzJoaGZiaWsybA%3D%3D&utm_source=qr"
                    aria-label="EGS Equipment Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition duration-300 ease-in-out hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                >
                    <AiOutlineInstagram size={24} />
                </Link>
            </div>
        </div>
    );
};

export default SocialsCard;
