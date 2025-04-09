import EventDetail from "../../components/events/EventDetail";
import { ObjectId } from "mongodb";
import Head from "next/head";
import connectDb from "../../utils/connect-mdb";

function EventDetails(props) {
    return (
        <>
            <Head>
                <title>{props.eventDetail.title}</title>
                <meta name="description" content={props.eventDetail.description} />
            </Head>

            <EventDetail
                image={props.eventDetail.image}
                title={props.eventDetail.title}
                address={props.eventDetail.address}
                description={props.eventDetail.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const [closeConnection, collection] = await connectDb();
    const events = await collection.find({}, { _id: 1 }).toArray();
    await closeConnection();

    return {
        fallback: "blocking",
        paths: events.map((event) =>
            ({ params: { eventId: event._id.toString() }, })
        ),
    }
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId.toString();

    const [closeConnection, collection] = await connectDb();
    const selectedEvent = await collection.findOne({
        _id: new ObjectId(eventId), // <TODO> refactor new statement
    });
    await closeConnection();

    return {
        props: {
            eventDetail: {
                id: selectedEvent._id.toString(),
                image: selectedEvent.image,
                title: selectedEvent.title,
                address: selectedEvent.address,
                description: selectedEvent.description,

            }
        }
    };
}

export default EventDetails;