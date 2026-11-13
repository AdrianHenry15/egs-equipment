import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How EGS Equipment handles website inquiries and privacy preferences.",
    alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
    return (
        <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-14 leading-relaxed text-foreground sm:py-20">
            <header className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
                <p>
                    Eckert Golf Sales, Inc. (EGS Equipment) handles customer inquiries submitted through eckertgolf.com
                    and is the contact for privacy questions about those submissions. Third Generation Studios develops
                    and maintains the website for EGS Equipment.
                </p>
            </header>
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Information you submit</h2>
                <p>
                    When you submit a contact or parts request, EGS Equipment receives the name, email address, phone
                    number, and comments you provide. Parts requests may also include a company name, shipping address,
                    equipment model, serial number, and part numbers. Share only what is relevant to your request.
                    Please do not enter payment card numbers or passwords.
                </p>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">How inquiries are used</h2>
                <p>
                    EGS uses this information to respond to your inquiry, identify the equipment or parts you need, and
                    follow up about your request.
                </p>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Service providers and external websites</h2>
                <p>
                    EmailJS processes the information you submit to deliver your message to EGS. Hosting services may
                    receive technical information, such as an IP address and requested page, when you visit the site.
                    Manufacturer, financing, and social media links may take you to websites with their own privacy
                    notices.
                </p>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Website preferences</h2>
                <p>
                    The site uses local browser storage to remember your privacy choice and light or dark theme. You can
                    change your privacy choices through Cookie preferences in the site settings or clear them in your
                    browser.
                </p>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Privacy questions</h2>
                <p>
                    <Link href="/contact" className="font-medium text-primary underline underline-offset-4">
                        Contact EGS Equipment
                    </Link>{" "}
                    to ask about this notice or request access to, correction of, or deletion of information you
                    submitted. You can also call (407) 629-7968.
                </p>
            </section>
        </main>
    );
}
