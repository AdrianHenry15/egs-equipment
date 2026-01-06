"use client";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useModalStore } from "@/stores/modal-store/modal-store";
import type { ConfirmModalPayload } from "@/stores/modal-store/modal-types";

export default function ConfirmationModal() {
    const { type, isOpen, loading, payload, closeModal, setLoading } = useModalStore();

    // 🔑 Type narrowing (this is required)
    if (type !== "confirmation") return null;

    const confirm = payload as ConfirmModalPayload;

    async function handleConfirm() {
        try {
            setLoading(true);
            await confirm.onConfirm();
            closeModal();
        } catch (err) {
            console.error("Confirmation failed", err);
            setLoading(false);
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
                                <DialogTitle className="text-lg font-medium text-gray-900 border-b pb-2">
                                    {confirm.title ?? "Confirm Action"}
                                </DialogTitle>

                                <p className="my-4 text-sm text-gray-500">
                                    {confirm.message ??
                                        "Are you sure you want to continue with this action?"}
                                </p>

                                <div className="mt-4 flex justify-center gap-4">
                                    <button
                                        className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 disabled:opacity-50"
                                        onClick={handleConfirm}
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "Processing..."
                                            : (confirm.confirmLabel ?? "Confirm")}
                                    </button>

                                    <button
                                        className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                                        onClick={closeModal}
                                        disabled={loading}
                                    >
                                        {confirm.cancelLabel ?? "Cancel"}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
