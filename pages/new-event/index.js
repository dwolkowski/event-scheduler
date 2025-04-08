import NewEventForm from "../../components/events/NewEventForm";


function EventPage() {
    function addEventHandler() {

    }

    return (
        <NewEventForm onAddEvent={addEventHandler} />
    );
}

export default EventPage;   