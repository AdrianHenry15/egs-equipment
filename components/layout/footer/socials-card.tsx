import Link from "next/link";
import React from "react";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const SocialsCard = () => {
    return (
        <div className="flex flex-col justify-center w-full items-center py-10 border-y-[1px] border-zinc-900">
            <h5 className="text-xl mb-10">Connect With Us</h5>
            <div className="flex justify-evenly items-center w-full">
                <Link
                    className="hover:scale-125 transition-all duration-300 ease-in-out"
                    // target="_blank"
                    // href="https://www.facebook.com/britelightingllc"
                    href={""}
                >
                    <AiFillFacebook size={25} />
                </Link>
                <Link
                    // target="_blank"
                    // href="https://www.instagram.com/britelightingllc/"
                    href={""}
                >
                    <AiOutlineInstagram
                        className="hover:scale-125 transition-all duration-300 ease-in-out"
                        size={25}
                    />
                </Link>
            </div>
        </div>
    );
};

export default SocialsCard;
