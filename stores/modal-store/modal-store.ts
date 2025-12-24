import { create } from "zustand";
import {
    ConfirmModalPayload,
    LinkConfirmationPayload,
    SearchModalPayload,
    SuccessModalPayload,
} from "./modal-types";

export type ModalPayloadMap = {
    confirmation: ConfirmModalPayload;
    success: SuccessModalPayload;
    sign_in: undefined;
    sign_up: undefined;
    link_confirmation: LinkConfirmationPayload;
    search: SearchModalPayload;
};

export type ModalType = keyof ModalPayloadMap | null;

interface ModalState<T extends ModalType = ModalType> {
    type: T;
    isOpen: boolean;
    loading: boolean;
    payload: T extends keyof ModalPayloadMap ? ModalPayloadMap[T] : undefined;

    openModal: <K extends keyof ModalPayloadMap>(type: K, payload?: ModalPayloadMap[K]) => void;

    closeModal: () => void;
    setLoading: (loading: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    type: null,
    isOpen: false,
    loading: false,
    payload: undefined,

    openModal: (type, payload) =>
        set({
            type,
            isOpen: true,
            loading: false,
            payload,
        }),

    closeModal: () =>
        set({
            type: null,
            isOpen: false,
            loading: false,
            payload: undefined,
        }),

    setLoading: (loading) => set({ loading }),
}));
