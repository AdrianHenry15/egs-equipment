import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";

const ContactBar = () => {
    return (
        <div className="flex items-center w-full z-[100] sticky top-[81px] bg-white/95 py-2 justify-center flex-col md:px-12 md:flex-row">
            {/* Phone */}
            <Link
                className="bg-white flex justify-center mx-4 items-center px-4 py-1 text-green-700 border-black border-2 rounded-full whitespace-nowrap"
                href="tel:4076297968"
            >
                <button className="flex items-center">
                    <FaPhone className="mr-2" />
                    <p className="text-sm">(407) 629-7968</p>
                </button>
            </Link>

            {/* Email */}
            <Link
                className="w-min whitespace-nowrap flex justify-center mx-4 px-4 py-1 border-black border-[1px] rounded-full bg-green-700"
                href="/contact"
            >
                Contact Us
            </Link>
        </div>
    );
};

export default ContactBar;
