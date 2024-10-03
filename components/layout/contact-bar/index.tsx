import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactBar = () => {
    return (
        <ul className="flex items-center w-full z-40 sticky top-[75px] bg-white py-4 justify-evenly">
            <Link className="mr-4" href="tel:4076297968">
                <button className="bg-white flex items-center px-4 py-1 text-emerald-600 border-black border-2 rounded-full">
                    <FaPhone className="mr-2" />
                    <p>(407) 629-7968</p>
                </button>
            </Link>
            <Link href="email:frank.eckert@eckertgolf.com">
                <button className="rounded-full py-1 px-4 bg-emerald-600 flex items-center">
                    <MdEmail className="mr-2" />
                    <p>frank.eckert@eckertgolf.com</p>
                </button>
            </Link>
        </ul>
    );
};

export default ContactBar;
