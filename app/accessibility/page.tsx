import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Accessibility",
    description: "Get help using the EGS Equipment website or report an accessibility issue.",
    alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
    return (
        <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-14 leading-relaxed text-foreground sm:py-20">
            <h1 className="text-4xl font-bold tracking-tight">Accessibility</h1>
            <p>
                If you have difficulty browsing equipment, finding product information, or submitting a request on this
                website, contact EGS Equipment for assistance. Third Generation Studios maintains this website and
                supports technical accessibility fixes for EGS Equipment.
            </p>
            <h2 className="text-xl font-semibold">Request assistance</h2>
            <ul className="list-disc space-y-2 pl-5">
                <li>
                    Call{" "}
                    <a href="tel:+14076297968" className="font-medium text-primary underline underline-offset-4">
                        (407) 629-7968
                    </a>
                </li>
                <li>
                    Use the{" "}
                    <Link href="/contact" className="font-medium text-primary underline underline-offset-4">
                        contact form
                    </Link>
                </li>
            </ul>
            <p>
                If a product sheet or manual is difficult to use, tell us the product name and the information you need.
                We can help you find the relevant details.
            </p>
            <h2 className="text-xl font-semibold">Report a website barrier</h2>
            <p>
                Use the contact options above and mention that your message is about website accessibility. You can
                return to this page from Website settings or the footer on any public page.
            </p>
            <p>
                Include the page address and describe what you were trying to do. If you are comfortable sharing your
                browser or assistive technology, that information can help us investigate.
            </p>
        </main>
    );
}
