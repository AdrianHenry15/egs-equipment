"use client";

import { useModalStore } from "@/stores/modals/modal-store";
import AuthModal from "./auth-modal";
import ConfirmationModal from "./confirmation-modal";
import SuccessModal from "./success-modal";
import LinkConfirmationModal from "./link-confirmation";

export default function ModalRoot() {
    const { type, isOpen } = useModalStore();

    if (!isOpen || !type) return null;

    return (
        <>
            {type === "sign_in" && <AuthModal mode="sign_in" />}
            {type === "sign_up" && <AuthModal mode="sign_up" />}
            {type === "confirmation" && <ConfirmationModal />}
            {type === "success" && <SuccessModal />}
            {type === "link_confirmation" && <LinkConfirmationModal />}
        </>
    );
}
