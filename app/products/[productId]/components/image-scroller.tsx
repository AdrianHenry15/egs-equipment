import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ImageScrollerProps {
    images: string[] | StaticImageData[];
    alt: string;
}

export function ImageScroller({ images, alt }: ImageScrollerProps) {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="flex h-96 w-full items-center justify-center rounded-lg border bg-gray-100 text-gray-400">
                No images available
            </div>
        );
    }

    const hasMultiple = images.length > 1;
    const image = images[index];

    return (
        <div className="flex w-full max-w-xl flex-col items-center gap-3">
            {/* IMAGE CONTAINER */}
            <div className="relative h-96 w-full overflow-hidden rounded-lg border bg-white shadow-lg">
                <Image
                    src={image ? image : ""}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                />

                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                            aria-label="Previous image"
                        >
                            <ChevronLeftIcon className="h-5 w-5 text-black" />
                        </button>

                        <button
                            type="button"
                            onClick={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                            aria-label="Next image"
                        >
                            <ChevronRightIcon className="h-5 w-5 text-black" />
                        </button>
                    </>
                )}
            </div>

            {/* PAGINATION DOTS */}
            {hasMultiple && (
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to image ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                                i === index ? "bg-black scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
