import Image from "next/image";
import Link from "next/link";

export default function SfmaFlyerSection() {
    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16">
            {/* Card wrapper MUST be relative */}
            {/* Background layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/flyers/egs_sfma.jpg"
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover scale-125 blur-xl opacity-60"
                />
            </div>
            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
                {/* Foreground content */}
                <div className="relative z-10">
                    {/* Image */}
                    <div className="px-4 py-10">
                        <div className="mx-auto w-full max-w-5xl">
                            <Image
                                src="/flyers/egs_sfma.jpg"
                                alt="SFMA 2026 Conference – Dennis & SISIS"
                                width={1600}
                                height={900}
                                priority
                                className="h-auto w-full rounded-xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 bg-white/90 px-6 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">SFMA 2026 Conference & Exhibition</h2>
                            <p className="mt-1 text-sm text-slate-600">January 19–22 · Fort Worth Convention Center</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white">
                                Stand 105
                            </span>

                            <Link
                                target="_blank"
                                href="https://www.sportsfieldmanagement.org/conference/"
                                className="
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    transition
                                    hover:border-slate-400
                                    hover:bg-slate-50
                                "
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
