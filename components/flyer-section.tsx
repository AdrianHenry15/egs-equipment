import Image from "next/image";
import Link from "next/link";

export default function FlyerSection() {
    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/flyers/gcsaa.jpg"
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover scale-125 blur-xl opacity-60"
                />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative z-10">
                    <div className="px-4 py-10">
                        <div className="mx-auto w-full max-w-5xl">
                            <Image
                                src="/flyers/gcsaa.jpg"
                                alt="2026 GCSAA Conference & Trade Show"
                                width={1600}
                                height={900}
                                priority
                                className="h-auto w-full rounded-xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-card/90 px-6 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-card-foreground">
                                2026 GCSAA Conference & Trade Show
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground">February 2-5 · Orlando Florida</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                                Booth 1349
                            </span>

                            <Link
                                target="_blank"
                                href="https://www.sportsfieldmanagement.org/conference/"
                                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
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
