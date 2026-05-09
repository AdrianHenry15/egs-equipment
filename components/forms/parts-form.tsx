"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Logo from "@/public/logos/EGS1.png";
import Button from "../button";
import Textarea from "./textarea";
import Input from "./input";
import { Loader } from "../loader";
import { useModalStore } from "@/stores/modal-store/modal-store";

const PartsForm = () => {
    const pathname = usePathname();
    const { openModal, closeModal } = useModalStore();

    const [loading, setLoading] = useState(false);

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

            toast.success("Your request has been submitted successfully.");

            closeModal();
            openModal("success", {
                title: "Request Submitted",
                message: "Thank you for reaching out. Our team will review your request and get back to you shortly.",
            });
        } catch (error) {
            console.error("EMAIL FAILED:", error);
            toast.error("There was an error submitting your request. Please try again.");
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

            <h1 className="mb-10 animate-bounce text-3xl font-light text-foreground">
                {pathname === "/contact-us" ? "Contact Us" : "Request A Quote!"}
            </h1>

            {/* FORM CONTAINER */}
            <div className="flex w-11/12 flex-col rounded-2xl border-2 border-border bg-card p-6 shadow-lg md:w-162.5">
                {/* LOGO */}
                <div className="my-10 flex justify-center">
                    <Image loading="eager" width={150} src={Logo} alt="logo-icon" />
                </div>

                {/* FORM */}
                <form className="w-full self-center md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-lg font-semibold text-foreground">Contact Info</h5>

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

                    {/* COMPANY NAME */}
                    <Input
                        inputName={"companyName"}
                        inputLabel={"Company Name"}
                        placeholder={"Company Name*"}
                        control={control}
                        errors={errors}
                        errorRequiredText={"Company Name is Required."}
                        errorPatternText={"Company Name is not valid."}
                    />

                    {/* Shipping Address */}
                    <Input
                        inputName={"shippingAddress"}
                        inputLabel={"Shipping Address"}
                        placeholder={"Shipping Address*"}
                        control={control}
                        errors={errors}
                        errorRequiredText={"Shipping Address is Required."}
                        errorPatternText={"Shipping Address is not valid."}
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

                    <div className="my-10">
                        <Button submit name="Submit Request" className="w-full justify-center" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PartsForm;
