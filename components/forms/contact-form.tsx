/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Logo from "@/public/logos/EGS1.png";
import Button from "../button";
import Textarea from "./textarea";
import Input from "./input";
import ConfirmationModal from "../modals/confirmation-modal";
import SuccessModal from "../modals/success-modal";
import { Loader } from "../loader";

const ContactForm = () => {
    // SWITCH BETWEEN CONTACT AND ESTIMATE FORM | BOTH FORMS DO THE SAME THING FOR NOW
    const pathname = usePathname();

    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const onSubmit = (data: any) => {
        // open confirmation modal
        setIsOpen(true);
        console.log(data);
    };

    const confirmEstimate = () => {
        // EMAIL JS
        emailjs
            .send(SERVICE_ID as string, TEMPLATE_ID as string, templateParams, PUBLIC_KEY as string)
            .then(
                function (response) {
                    toast.success("Your estimate has been submitted successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    toast.error("There was an error submitting your estimate. Please try again.");
                    console.log("FAILED...", error);
                }
            );
        // close modal
        setIsOpen(false);
        setTimeout(() => {
            // open success modal
            setEstimateSuccess(true);
            setLoading(false);
        }, 1000);

        setLoading(true);
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
            {isOpen && (
                <ConfirmationModal
                    loading={loading}
                    confirmEstimate={confirmEstimate}
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                />
            )}
            {estimateSuccess && (
                <SuccessModal
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {loading ? <Loader /> : null}
            <h1 className="text-3xl text-black mb-10 font-light animate-bounce">{`${
                pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate!"
            }`}</h1>
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-11/12 bg-zinc-100 p-6 rounded-2xl shadow-white shadow-lg border-2 md:w-[650px]">
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
                    <Textarea
                        inputName={"comment"}
                        inputLabel={"Comment"}
                        placeholder={"Comment"}
                        control={control}
                    />
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
