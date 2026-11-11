import { createEventAction } from "../actions";
import EventForm from "./components/event-form";

export default function CreateEventPage() {
    return (
        <div className="space-y-8 max-w-xl">
            <EventForm onSubmit={createEventAction} />
        </div>
    );
}
