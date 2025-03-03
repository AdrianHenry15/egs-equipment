import Link from "next/link";
import React from "react";

const ContactCard = () => {
    return (
        <div className="flex flex-1 flex-col justify-start items-start w-full py-10 md:py-0 md:text-left">
            <div className="flex flex-col text-xs w-full flex-1">
                <Link href={"/contact-us"} className="font-light tracking-wider text-2xl pb-4">
                    Contact Us
                </Link>
                <div className="w-full">
                    <address className="text-gray-400 pb-4">
                        5415 Lake Howell Road #190 Winter Park, FL 32792
                    </address>
                    <div className="flex flex-col text-gray-400">
                        <span className="pb-4">
                            <label className="text-white">Office: </label>
                            <Link className="hover:underline underline-offset-2" href="tel:">
                                (407) 629-7968
                            </Link>
                        </span>
                        <span className="pb-4">
                            <label className="text-white">Sales: </label>
                            <Link
                                className="hover:underline underline-offset-2"
                                href="email:david.okamoto@eckertgolf.com"
                            >
                                david.okamoto@eckertgolf.com
                            </Link>
                        </span>
                        <span className="pb-4">
                            <label className="text-white">Other Inquiries: </label>
                            <Link
                                className="hover:underline underline-offset-2"
                                href="email:frank.eckert@eckertgolf.com"
                            >
                                frank.eckert@eckertgolf.com
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
