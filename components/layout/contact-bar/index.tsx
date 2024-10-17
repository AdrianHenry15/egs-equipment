import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactBar = () => {
    return (
        <ul className="flex items-center w-full z-40 sticky top-[75px] bg-white py-2 justify-evenly flex-col md:flex-row">
            {/* Phone */}
            <Link className="w-full flex justify-center md:mb-0 md:mr-4" href="tel:4076297968">
                <button className="bg-white flex justify-center items-center px-4 py-1 text-green-600 border-black border-2 rounded-full whitespace-nowrap w-[75%] md:w-min">
                    <FaPhone className="mr-2" />
                    <p className="text-sm">(407) 629-7968</p>
                </button>
            </Link>

            {/* Email */}
            <Link className="w-full flex justify-center" href="email:frank.eckert@eckertgolf.com">
                <button className="rounded-full py-1 px-4 bg-green-600 flex justify-center items-center w-[75%] md:w-min">
                    <MdEmail className="mr-2" />
                    <p className="text-sm">frank.eckert@eckertgolf.com</p>
                </button>
            </Link>
        </ul>
    );
};

export default ContactBar;
