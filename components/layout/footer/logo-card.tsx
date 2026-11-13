import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logos/EGS1.png";

const LogoCard = () => {
    return (
        <Link
            href="/"
            className="flex min-h-28 w-76 max-w-full items-center justify-center rounded-xl px-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
        >
            <Image className="h-auto w-full max-w-64 object-contain" src={Logo} alt="EGS Equipment home" />
        </Link>
    );
};

export default LogoCard;
