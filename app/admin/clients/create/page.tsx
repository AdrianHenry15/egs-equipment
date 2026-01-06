import { createClientAction } from "../actions";
import ClientForm from "./components/client-form";

export default function CreateClientPage() {
    return (
        <div className="space-y-8 max-w-xl">
            <ClientForm onSubmit={createClientAction} />
        </div>
    );
}
