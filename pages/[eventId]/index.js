import EventDetail from "../../components/events/EventDetail";

function EventDetails(props) {
    return (
        <EventDetail
            image="1"
            title="2"
            address="3"
            description="4"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    eventId: "1"
                }
            },
            {
                params: {
                    eventId: "2"
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    return {
        props: {
            eventDetail: {
                image: "1",
                title: "2",
                address: "3",
                description: "4"
            }
        }
    };
}

export default EventDetails;