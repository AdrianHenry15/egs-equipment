import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactBar = () => {
    return (
        <div className="flex items-center justify-center w-full z-[100] sticky top-[81px] bg-white/95 py-2 lg:items-center lg:px-12">
            {/* Phone Number on Large Screens */}
            <Link
                className="bg-white justify-center mx-4 items-center py-1 text-green-700 border-black border-2 rounded-full whitespace-nowrap my-1 w-1/2 hidden lg:flex lg:w-[200px] lg:my-0 lg:px-4"
                href="tel:4076297968"
            >
                <button className="flex items-center">
                    <FaPhone className="mr-2" />
                    <p className="text-sm">(407) 629-7968</p>
                </button>
            </Link>
            {/* Phone Number on Small Screens */}
            <Link
                className="bg-white flex justify-center mx-4 p-2 items-center text-green-700 border-black border-2 rounded-full whitespace-nowrap my-1 w-min lg:hidden"
                href="tel:4076297968"
            >
                <button className="flex items-center">
                    <FaPhone />
                    {/* <p className="text-sm">(407) 629-7968</p> */}
                </button>
            </Link>
            {/* Email on Large Screens */}
            <Link
                className="whitespace-nowrap justify-center mx-4 py-1 border-black border-[1px] rounded-full bg-green-700 my-1 w-1/2 hidden lg:flex lg:w-[200px] lg:my-0 lg:px-4"
                href="/contact"
            >
                Contact Us
            </Link>
            {/* Email on Small Screens */}
            <Link
                className="whitespace-nowrap flex justify-center mx-4 p-2 border-black border-[1px] rounded-full bg-green-700 my-1 w-min lg:hidden"
                href="/contact"
            >
                <button className="flex items-center">
                    <MdEmail size={20} />
                    {/* <p className="text-sm">(407) 629-7968</p> */}
                </button>
            </Link>
        </div>
    );
};

export default ContactBar;
