"use client";

import { useModalStore } from "@/stores/modal-store/modal-store";
import AuthModal from "./auth-modal";
import ConfirmationModal from "./confirmation-modal";
import SuccessModal from "./success-modal";
import LinkConfirmationModal from "./link-confirmation";
import SearchModal from "./search-modal";

export default function ModalRoot() {
    const { type, isOpen, closeModal } = useModalStore();

    if (!isOpen || !type) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />

            {/* Modal shell */}
            <div
                className="relative z-10 mt-16 sm:mt-24 w-full px-4 flex justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {type === "sign_in" && <AuthModal mode="sign_in" />}
                {type === "sign_up" && <AuthModal mode="sign_up" />}
                {type === "confirmation" && <ConfirmationModal />}
                {type === "success" && <SuccessModal />}
                {type === "link_confirmation" && <LinkConfirmationModal />}
                {type === "search" && <SearchModal />}
            </div>
        </div>
    );
}
