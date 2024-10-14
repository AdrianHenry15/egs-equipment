// emailService.ts
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import toast from "react-hot-toast";

type TemplateParams = {
    [key: string]: string;
};

const sendEmail = (
    serviceId: string,
    templateId: string,
    templateParams: TemplateParams,
    publicKey: string
): Promise<{ success: boolean; response?: EmailJSResponseStatus; error?: unknown }> => {
    return emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response: EmailJSResponseStatus) => {
            toast.success("Your estimate has been submitted successfully!");
            return { success: true, response };
        },
        (error: unknown) => {
            toast.error("There was an error submitting your estimate. Please try again.");
            return { success: false, error };
        }
    );
};

export default sendEmail;
