import Link from "next/link";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const SocialsCard = () => {
    return (
        <div className="flex items-center gap-2" role="group" aria-label="EGS Equipment social links">
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/EGSturf/"
                aria-label="EGS Equipment Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
                <AiFillFacebook size={20} aria-hidden="true" />
            </Link>

            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/egsequipment?igsh=MWhubzJoaGZiaWsybA%3D%3D&utm_source=qr"
                aria-label="EGS Equipment Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
                <AiOutlineInstagram size={20} aria-hidden="true" />
            </Link>
        </div>
    );
};

export default SocialsCard;
