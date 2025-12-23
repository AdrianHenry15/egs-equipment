export interface ConfirmModalPayload {
    title: string;
    message: string;
    confirmLabel: string;
    cancelLabel: string;
    onConfirm: () => Promise<void> | void;
}

export interface SuccessModalPayload {
    title: string;
    message: string;
}

export interface LinkConfirmationPayload {
    title: string;
    link: string;
    confirmLabel?: string;
    cancelLabel?: string;
}
