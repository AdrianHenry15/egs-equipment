"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Logo from "@/public/logos/EGS1.png";
import Button from "../button";
import Textarea from "./textarea";
import Input from "./input";
import { useModalStore } from "@/stores/modal-store/modal-store";

const ContactForm = () => {
    const [inputClicked, setInputClicked] = useState(false);
    const { openModal, setLoading, closeModal } = useModalStore();

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm({
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
                },
                PUBLIC_KEY,
            );

            toast.success("Your estimate has been submitted successfully!");

            closeModal();
            openModal("success", {
                title: "Request Submitted",
                message: "Someone from our team will be in touch shortly.",
            });
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
            <div className="flex w-11/12 flex-col rounded-2xl border-2 border-border bg-card p-6 shadow-lg md:w-162.5">
                {/* LOGO */}
                <div className="my-10 flex justify-center">
                    <Image loading="eager" width={150} src={Logo} alt="logo-icon" />
                </div>

                {/* FORM */}
                <form className="w-full self-center md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    {/* FIRST NAME */}
                    <Input
                        inputName={"firstName"}
                        inputLabel={"First Name"}
                        placeholder={"First Name*"}
                        control={control}
                        errors={errors}
                        errorPatternText="First Name is required."
                    />

                    {/* LAST NAME */}
                    <Input
                        inputName={"lastName"}
                        inputLabel={"Last Name"}
                        placeholder={"Last Name*"}
                        control={control}
                        errorPatternText="Last Name is required."
                    />

                    {/* PHONE NUMBER */}
                    <Input
                        inputName={"phone"}
                        inputLabel={"Phone Number"}
                        placeholder={"Phone Number*"}
                        control={control}
                        errors={errors}
                        errorPatternText={"Phone Number is not valid."}
                    />

                    {/* EMAIL */}
                    <Input
                        inputName={"email"}
                        inputLabel={"Email"}
                        placeholder={"Email*"}
                        control={control}
                        errors={errors}
                        errorRequiredText={"Email is Required."}
                        errorPatternText={"Email is not valid."}
                    />

                    {/* COMMENT */}
                    <Textarea inputName={"comment"} inputLabel={"Comment"} placeholder={"Comment"} control={control} />

                    <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                        <Button
                            onClick={() => setInputClicked(true)}
                            submit
                            name="Submit Request"
                            className="w-full justify-center"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
