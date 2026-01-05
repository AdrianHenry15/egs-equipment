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
import { getRecaptchaToken } from "@/lib/utils";

const ContactForm = () => {
    const [inputClicked, setInputClicked] = useState(false);
    const { openModal, setLoading, closeModal } = useModalStore();

    // EMAIL JS
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

            const captchaToken = await getRecaptchaToken();
            console.log("reCAPTCHA token:", captchaToken);

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    templateParams,
                    captchaToken,
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

    //EMAIL JS
    const templateParams = {
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        phone: getValues("phone"),
        email: getValues("email"),
        comment: getValues("comment"),
    };

    return (
        <section className="flex flex-col bg-white items-center py-20 shadow-inner relative w-full md:px-4">
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-11/12 bg-zinc-100 p-6 rounded-2xl shadow-white shadow-lg border-2 md:w-162.5">
                {/* LOGO */}
                <div className="flex justify-center my-10">
                    <Image loading="eager" width={150} src={Logo} alt="logo-icon" />
                </div>
                {/* FORM */}
                <form className="self-center w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
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
                        ></Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
