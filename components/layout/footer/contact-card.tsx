import Link from "next/link";
import React from "react";

const ContactCard = () => {
    return (
        <div className="flex w-full flex-1 flex-col items-start justify-start py-10 md:py-0 md:text-left">
            <div className="flex w-full flex-1 flex-col text-sm">
                <Link
                    href="/contact-us"
                    className="pb-4 text-2xl font-semibold tracking-wide text-card-foreground transition hover:text-primary"
                >
                    Contact Us
                </Link>

                <div className="w-full space-y-6">
                    <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                        5415 Lake Howell Road #190
                        <br />
                        Winter Park, FL 32792
                    </address>

                    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                        <div>
                            <span className="font-medium text-card-foreground">Office:</span>{" "}
                            <Link
                                className="transition hover:text-primary hover:underline underline-offset-4"
                                href="tel:+14076297968"
                            >
                                (407) 629-7968
                            </Link>
                        </div>

                        <div>
                            <span className="font-medium text-card-foreground">Sales:</span>{" "}
                            <Link
                                className="break-all transition hover:text-primary hover:underline underline-offset-4"
                                href="mailto:david.okamoto@eckertgolf.com"
                            >
                                david.okamoto@eckertgolf.com
                            </Link>
                        </div>

                        <div>
                            <span className="font-medium text-card-foreground">Other Inquiries:</span>{" "}
                            <Link
                                className="break-all transition hover:text-primary hover:underline underline-offset-4"
                                href="mailto:frank.eckert@eckertgolf.com"
                            >
                                frank.eckert@eckertgolf.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
