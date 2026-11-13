import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import HowardsonLogo from "@/public/logos/howardson-logo.png";
import DennisLogo from "@/public/logos/dennis.webp";
import SISISLogo from "@/public/logos/sisis.webp";
import SynProLogo from "@/public/logos/synpro.webp";
import HarrodLogo from "@/public/logos/harrod-sport-logo.png";
import PitchmarkLogo from "@/public/logos/pitchmark-logo.png";
import BuffaloLogo from "@/public/logos/buffalo-turbine.jpg";
import { EquipmentBrand } from "@/lib/types/brands";

interface ILogos {
    src: StaticImageData;
    alt: string;
    brand: EquipmentBrand;
}

const logos: ILogos[] = [
    { src: HowardsonLogo, alt: "Howardson Group", brand: EquipmentBrand.HOWARDSONS },
    { src: DennisLogo, alt: "Dennis Mowers", brand: EquipmentBrand.DENNIS },
    { src: SISISLogo, alt: "SISIS", brand: EquipmentBrand.SISIS },
    { src: SynProLogo, alt: "Syn-Pro", brand: EquipmentBrand.SYNPRO },
    { src: HarrodLogo, alt: "Harrod Sport", brand: EquipmentBrand.HARROD_SPORT },
    { src: PitchmarkLogo, alt: "Pitchmark", brand: EquipmentBrand.PITCHMARK },
    { src: BuffaloLogo, alt: "Buffalo Turbine", brand: EquipmentBrand.BUFFALO_TURBINE },
];

export default function PoweredBy() {
    return (
        <section className="bg-background py-10 sm:py-12 text-foreground">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Shop by brand</h2>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
                    {logos.map((logo) => (
                        <li key={logo.alt}>
                            <Link
                                href={`/products?brand=${logo.brand}`}
                                aria-label={`View ${logo.alt} equipment`}
                                className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                                <div className="relative h-16 w-full rounded-lg border border-border bg-white transition-colors group-hover:border-ring">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        sizes="(max-width: 639px) 45vw, 155px"
                                        className="object-contain p-3"
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
