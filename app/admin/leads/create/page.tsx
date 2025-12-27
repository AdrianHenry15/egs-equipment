import LeadForm from "./components/leads-form";
import LeadCsvDropzone from "./components/lead-csv-dropzone";
import { bulkCreateLeadsAction, createLeadAction } from "./actions";

export default function CreateLeadPage() {
    return (
        <div className="space-y-8 max-w-xl">
            <LeadForm onSubmit={createLeadAction} />
            <LeadCsvDropzone onParsed={bulkCreateLeadsAction} />
        </div>
    );
}
