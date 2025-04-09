import EventList from "../components/events/EventList";
import connectDb from "../utils/connect-mdb"

function HomePage(props) {
    return (
        <EventList events={props.events} />
    );
}

// Pregenerating data for EventList every 10 seconds.
export async function getStaticProps() {
    // fetching data from database
    const [ closeConnection, collection ] = await connectDb();
    const events = await collection.find().toArray();
    await closeConnection();

    return {
        props: {
            events: events.map(event => ({
                title: event.title,
                image: event.image,
                address: event.address,
                id: event._id.toString(),
            }))
        },
        revalidate: 10
    };
}

export default HomePage;