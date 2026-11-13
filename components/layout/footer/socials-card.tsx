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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-brand-gold hover:text-brand-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
                <AiFillFacebook size={20} aria-hidden="true" />
            </Link>

            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/egsequipment?igsh=MWhubzJoaGZiaWsybA%3D%3D&utm_source=qr"
                aria-label="EGS Equipment Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-brand-gold hover:text-brand-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
                <AiOutlineInstagram size={20} aria-hidden="true" />
            </Link>
        </div>
    );
};

export default SocialsCard;
