"use client";

import { useModalStore } from "@/stores/modal-store/modal-store";
import ConfirmationModal from "./confirmation-modal";
import SuccessModal from "./success-modal";
import LinkConfirmationModal from "./link-confirmation";
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("./search-modal"), {
    loading: () => (
        <p role="status" className="rounded-lg bg-card p-4 text-card-foreground">
            Loading search…
        </p>
    ),
});

export default function ModalRoot() {
    const { type, isOpen, closeModal } = useModalStore();

    if (!isOpen || !type) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-20 sm:py-24" role="presentation">
            <button
                type="button"
                aria-label="Close modal"
                className="absolute inset-0 cursor-default bg-brand-black/60 backdrop-blur-sm"
                onClick={closeModal}
            />

            <div className="relative z-10 flex w-full justify-center" onClick={(event) => event.stopPropagation()}>
                {type === "confirmation" && <ConfirmationModal />}
                {type === "success" && <SuccessModal />}
                {type === "link_confirmation" && <LinkConfirmationModal />}
                {type === "search" && <SearchModal />}
            </div>
        </div>
    );
}
