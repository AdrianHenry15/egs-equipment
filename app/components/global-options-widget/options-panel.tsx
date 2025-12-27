import { OrganizationSwitcher } from "@clerk/nextjs";

const OptionsPanel = () => {
    return (
        <div className="w-64 rounded-xl border bg-white shadow-xl p-3 space-y-3">
            <div className="text-xs font-semibold text-gray-500 uppercase">Organization</div>

            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: "w-full",
                        organizationSwitcherTrigger:
                            "w-full justify-between rounded-md border px-3 py-2 text-sm",
                        organizationSwitcherPopoverCard: "rounded-xl shadow-2xl",
                    },
                }}
            />

            {/* Future options go here */}
            {/* Theme toggle, admin shortcuts, etc. */}
        </div>
    );
};

export default OptionsPanel;
