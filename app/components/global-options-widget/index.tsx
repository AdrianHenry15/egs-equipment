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
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
                {/* Options Panel */}
                {open && <OptionsPanel />}

                {/* Floating Button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Global options"
                    className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:shadow-xl transition"
                >
                    <BiCog size={22} className={`transition ${open ? "rotate-90" : ""}`} />
                </button>
            </div>
        </>
    );
}
