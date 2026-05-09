"use client";

import { Loader } from "@/components/loader";

const Loading = () => {
    return (
        <div
            className="
        absolute inset-0 z-loading
        flex h-full w-full
        items-center justify-center
        bg-background/80
        backdrop-blur-sm
      "
        >
            <div
                className="
          flex flex-col items-center justify-center
          gap-3
          rounded-card border border-border
          bg-card px-6 py-5
          shadow-elevated
        "
            >
                <Loader />

                <p
                    className="
            text-sm font-medium
            tracking-wide
            text-muted-foreground
          "
                >
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;
