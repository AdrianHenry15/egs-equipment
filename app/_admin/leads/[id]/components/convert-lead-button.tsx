"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { convertLeadToClientAction } from "../../actions";

export default function ConvertLeadButton({ leadId }: { leadId: string }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    function handleConvert() {
        startTransition(async () => {
            const { clientId } = await convertLeadToClientAction(leadId);
            router.push(`/admin/clients/${clientId}`);
        });
    }

    return (
        <button
            onClick={handleConvert}
            disabled={isPending}
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-500 disabled:opacity-50"
        >
            {isPending ? "Converting..." : "Convert to Client"}
        </button>
    );
}
