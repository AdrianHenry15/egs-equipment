import Link from "next/link";

const contactLink = "break-words underline-offset-4 transition-colors hover:text-primary hover:underline";

const ContactCard = () => {
    return (
        <section className="min-w-0" aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className="text-base font-semibold">
                <Link href="/contact" className="underline-offset-4 hover:text-primary hover:underline">
                    Contact Us
                </Link>
            </h2>

            <address className="mt-4 text-sm leading-relaxed not-italic text-muted-foreground">
                5415 Lake Howell Road #190
                <br />
                Winter Park, FL 32792
            </address>

            <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div>
                    <dt className="inline font-medium text-card-foreground">Office</dt>{" "}
                    <dd className="inline">
                        <a className={contactLink} href="tel:+14076297968">
                            (407) 629-7968
                        </a>
                    </dd>
                </div>
                <div>
                    <dt className="inline font-medium text-card-foreground">Sales</dt>{" "}
                    <dd className="inline">
                        <a className={contactLink} href="mailto:david.okamoto@eckertgolf.com">
                            david.okamoto@eckertgolf.com
                        </a>
                    </dd>
                </div>
                <div>
                    <dt className="inline font-medium text-card-foreground">Other Inquiries</dt>{" "}
                    <dd className="inline">
                        <a className={contactLink} href="mailto:frank.eckert@eckertgolf.com">
                            frank.eckert@eckertgolf.com
                        </a>
                    </dd>
                </div>
            </dl>
        </section>
    );
};

export default ContactCard;
