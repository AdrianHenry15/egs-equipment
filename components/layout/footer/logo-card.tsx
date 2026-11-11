import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logos/EGS1.png";

const LogoCard = () => {
    return (
        <Link href="/" className="inline-flex rounded-lg bg-white px-3 py-2 ring-1 ring-border">
            <Image className="h-auto w-52 object-contain" src={Logo} alt="EGS Equipment home" />
        </Link>
    );
};

export default LogoCard;
