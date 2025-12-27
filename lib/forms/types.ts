import { LeadPriority, LeadSource, LeadStatus } from "@/sanity/types";

export interface LeadFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    equipmentNeeds: string[];
    equipmentInterest: string[]; // product IDs
    message: string;
    source: LeadSource | "";
    status: LeadStatus;
    priority: LeadPriority | "";
}
