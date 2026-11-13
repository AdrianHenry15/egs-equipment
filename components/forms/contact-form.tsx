"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Logo from "@/public/logos/EGS1.png";
import Button from "../button";
import Textarea from "./textarea";
import Input from "./input";
import { useModalStore } from "@/stores/modal-store/modal-store";

const ContactForm = ({ quoteProduct }: { quoteProduct: string | undefined }) => {
    const { openModal, setLoading, closeModal } = useModalStore();

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;

    const { handleSubmit, getValues, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            comment: "",
        },
    });

    const onSubmit = () => {
        openModal("confirmation", {
            title: "Confirm Your Request",
            message: "Confirm your request and someone from our team will contact you shortly.",
            confirmLabel: "Submit Request",
            cancelLabel: "Close",
            onConfirm: submitEstimate,
        });
    };

    const submitEstimate = async () => {
        try {
            setLoading(true);
            const formValues = getValues();

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    ...formValues,
                    comment: quoteProduct
                        ? [`Quote request for: ${quoteProduct}`, formValues.comment].filter(Boolean).join("\n\n")
                        : formValues.comment,
                },
                PUBLIC_KEY,
            );

            toast.success("Your request was submitted. Our team will be in touch.");

            closeModal();
        } catch (error) {
            toast.error("There was an error submitting your estimate. Please try again.");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative flex w-full flex-col items-center bg-background py-20 md:px-4">
            {/* FORM CONTAINER */}
            <div className="flex w-11/12 flex-col rounded-2xl border-2 border-border bg-card p-6 text-card-foreground shadow-lg md:w-162.5">
                {/* LOGO */}
                <div className="my-10 flex justify-center">
                    <Image loading="eager" width={150} src={Logo} alt="logo-icon" />
                </div>

                {/* FORM */}
                <form className="w-full self-center md:w-2/3" noValidate onSubmit={handleSubmit(onSubmit)}>
                    {quoteProduct && (
                        <p className="mb-4 rounded-md border border-border bg-muted p-3 text-sm font-semibold">
                            Quote request for {quoteProduct}
                        </p>
                    )}

                    <p className="mb-4 text-sm text-muted-foreground">Fields marked * are required.</p>

                    {/* FIRST NAME */}
                    <Input
                        inputName={"firstName"}
                        required
                        autoComplete="given-name"
                        inputLabel={"First Name"}
                        placeholder={"First Name"}
                        control={control}
                    />

                    {/* LAST NAME */}
                    <Input
                        inputName={"lastName"}
                        required
                        autoComplete="family-name"
                        inputLabel={"Last Name"}
                        placeholder={"Last Name"}
                        control={control}
                    />

                    {/* PHONE NUMBER */}
                    <Input
                        inputName={"phone"}
                        type="tel"
                        autoComplete="tel"
                        inputLabel={"Phone Number"}
                        placeholder={"Phone Number"}
                        control={control}
                    />

                    {/* EMAIL */}
                    <Input
                        inputName={"email"}
                        required
                        type="email"
                        autoComplete="email"
                        inputLabel={"Email"}
                        placeholder={"Email"}
                        control={control}
                    />

                    {/* COMMENT */}
                    <Textarea inputName={"comment"} inputLabel={"Comment"} placeholder={"Comment"} control={control} />

                    <p className="mt-3 text-sm text-muted-foreground">
                        We use your information to respond to this request. See our{" "}
                        <Link href="/privacy" className="font-medium text-primary underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    <div className="my-10">
                        <Button submit themed name="Submit Request" className="w-full justify-center" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
