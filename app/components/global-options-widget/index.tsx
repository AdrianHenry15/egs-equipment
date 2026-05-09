"use client";

import { useState } from "react";
import { BiCog } from "react-icons/bi";
import OptionsPanel from "./options-panel";

export default function GlobalOptionsWidget() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Backdrop */}
            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}

            {/* Widget */}
            <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2">
                {/* Options Panel */}
                {open && <OptionsPanel />}

                {/* Floating Button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Global options"
                    className="
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        bg-primary
                        text-primary-foreground
                        shadow-lg
                        transition-all
                        hover:shadow-xl
                        hover:bg-primary/90
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-ring
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-background
                    "
                >
                    <BiCog size={22} className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
                </button>
            </div>
        </>
    );
}
