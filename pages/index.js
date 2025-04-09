import EventList from "../components/events/EventList";
import connectDb from "../utils/connect-mdb"
import Head from "next/head";

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Event Scheduler</title>
                <meta name="description" content="Schedule your upcoming events." />
            </Head>
            <EventList events={props.events} />
        </>
    );
}

// Pregenerating data for EventList every 10 seconds.
export async function getStaticProps() {
    // fetching data from database
    const [closeConnection, collection] = await connectDb();
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