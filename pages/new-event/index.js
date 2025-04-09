import { useRouter } from "next/router";
import NewEventForm from "../../components/events/NewEventForm";


function EventPage() {
    const router = useRouter();

    async function addEventHandler(eventData) {
        // Internal API
        const response = await fetch("/api/new-event", {
            method: "POST",
            body: JSON.stringify(eventData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = await response.json();
        console.log(responseData);

        router.push("/");
    }

    return (
        <NewEventForm onAddEvent={addEventHandler} />
    );
}

export default EventPage;   