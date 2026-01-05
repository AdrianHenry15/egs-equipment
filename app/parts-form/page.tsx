import PartsForm from "@/components/forms/parts-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Parts & Services | EGS Equipment",
    description: "Genuine replacement parts, expert service, and dependable support to keep your equipment working.",
};

export default function PartsServicesPage() {
    return (
        <section className="relative w-full bg-gray-50 py-20 px-6">
            <div className="mx-auto max-w-4xl text-left mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Parts & Service Support</h1>

                <p className="mt-4 text-lg text-gray-600">
                    Keep your equipment running at peak performance with genuine parts, professional service, and
                    knowledgeable support from the EGS team.
                </p>

                <div className="mt-6 text-sm text-gray-500">
                    Replacement Parts • Maintenance • Repairs • Technical Assistance
                </div>
            </div>

            <div className="flex justify-center">
                <PartsForm />
            </div>
        </section>
    );
}
