"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Logo from "@/public/logos/EGS1.png";
import Button from "../button";
import Textarea from "./textarea";
import Input from "./input";
import { Loader } from "../loader";
import { useModalStore } from "@/stores/modal-store/modal-store";

const PartsForm = () => {
    const { openModal, closeModal } = useModalStore();

    const [loading, setLoading] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;

    const { handleSubmit, getValues, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            machine: "",
            serialNumber: "",
            partsNumbers: "",
            comment: "",
            companyName: "",
            shippingAddress: "",
        },
    });

    const sendEstimate = async () => {
        setLoading(true);

        const formValues = getValues();

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    ...formValues,
                },
                PUBLIC_KEY,
            );

            toast.success("Your parts request was submitted. Our team will be in touch.");

            closeModal();
        } catch (error) {
            toast.error("There was an error submitting your request. Please try again.");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = () => {
        openModal("confirmation", {
            title: "Confirm Submission",
            message: "Please confirm that all the information entered is correct before submitting.",
            confirmLabel: "Submit Request",
            cancelLabel: "Cancel",
            onConfirm: sendEstimate,
        });
    };

    return (
        <section className="relative flex w-full flex-col items-center bg-background py-20 shadow-inner md:px-4">
            {loading ? <Loader /> : null}

            <h2 className="mb-8 text-2xl font-semibold text-foreground">Request parts or service</h2>

            {/* FORM CONTAINER */}
            <div className="flex w-11/12 flex-col rounded-2xl border-2 border-border bg-card p-6 shadow-lg md:w-162.5">
                {/* LOGO */}
                <div className="my-10 flex justify-center">
                    <Image loading="eager" width={150} src={Logo} alt="logo-icon" />
                </div>

                {/* FORM */}
                <form className="w-full self-center md:w-2/3" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-lg font-semibold text-foreground">Contact Info</h5>

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

                    {/* COMPANY NAME */}
                    <Input
                        inputName={"companyName"}
                        autoComplete="organization"
                        inputLabel={"Company Name"}
                        placeholder={"Company Name"}
                        control={control}
                    />

                    {/* Shipping Address */}
                    <Input
                        inputName={"shippingAddress"}
                        autoComplete="shipping street-address"
                        inputLabel={"Shipping Address"}
                        placeholder={"Shipping Address"}
                        control={control}
                    />

                    <hr className="my-4 border-border" />

                    <h5 className="text-md font-semibold text-foreground">Machine Info</h5>

                    {/* Machine */}
                    <Input
                        inputName={"machine"}
                        inputLabel={"Machine"}
                        placeholder={"Machine/Model"}
                        control={control}
                    />

                    {/* Serial Number */}
                    <Input
                        inputName={"serialNumber"}
                        inputLabel={"Serial Number"}
                        placeholder={"Serial Number"}
                        control={control}
                    />

                    {/* Parts Numbers */}
                    <Textarea
                        inputName={"partsNumbers"}
                        inputLabel={"Parts Numbers"}
                        placeholder={"Parts Numbers"}
                        control={control}
                    />

                    <hr className="my-2 border-border" />

                    {/* Comments/Extra Details */}
                    <Textarea
                        inputName={"comment"}
                        inputLabel={"Comment"}
                        placeholder={"Comments/Extra Details"}
                        control={control}
                    />

                    <p className="mt-3 text-sm text-muted-foreground">
                        We use your information to respond to this request. See our{" "}
                        <Link href="/privacy" className="font-medium text-primary underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    <div className="my-10">
                        <Button submit name="Submit Request" className="w-full justify-center" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PartsForm;
