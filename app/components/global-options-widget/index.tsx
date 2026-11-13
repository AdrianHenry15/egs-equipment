"use client";

import { useRef, useState } from "react";
import { BiCog } from "react-icons/bi";
import OptionsPanel from "./options-panel";

export default function GlobalOptionsWidget() {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            {/* Backdrop */}
            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}

            {/* Widget */}
            <div
                className="fixed right-4 bottom-4 z-50 flex flex-col-reverse items-end gap-2"
                onKeyDown={(event) => {
                    if (event.key === "Escape" && open) {
                        setOpen(false);
                        triggerRef.current?.focus();
                    }
                }}
            >
                {/* Floating Button */}
                <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Website settings"
                    aria-expanded={open}
                    aria-controls="website-settings-panel"
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
                    <BiCog
                        aria-hidden="true"
                        size={22}
                        className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                    />
                </button>
                <div id="website-settings-panel" hidden={!open}>
                    {open && <OptionsPanel close={() => setOpen(false)} />}
                </div>
            </div>
        </>
    );
}
