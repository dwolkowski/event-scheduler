import EventList from "../components/events/EventList";

const DUMMY_EVENTS = [
    {
        id: "1",
        title: "[Wyspa słodowa]  Elegancka impreza",
        image: "https://zzm.wroc.pl/wp-content/uploads/2023/03/000150_Wyspa-Slodowa_7-scaled.jpg",
        address: "Wyspa Słodowa 7, 50-120 Wrocław",
        description: "Eleganckie studencke wieczorki, PWr zaprasza!",
    },
    {
        id: "2",
        title: "[PWr]  Oglądanie sera",
        image: "https://miejscawewroclawiu.pl/wp-content/uploads/2019/09/Zintegrowane_Centrum_Studenckie_Politechniki_Wroclawskiej_350709_Fotopolska-Eu.jpg",
        address: "Wybrzeże Stanisława Wyspiańskiego 23-25, 50-370 Wrocław",
        description: "Eleganckie oglądanie Politechnickiego sera!",
    },
    {
        id: "3",
        title: "[MOOD]  Nowoczesny bouldering",
        image: "https://wspinanie.pl/wp-content/uploads/2023/01/326909519_718653616321800_685069927400387611_n.jpg",
        address: "Stanisława Klimeckiego 14B, 30-706 Kraków",
        description: "Eleganckie wspinanie na MOOD boulderku!",
    }
];

function HomePage(props) {
    return (
        <EventList events={props.events} />
    );
}

// Pregenerating data for EventList every 10 seconds.
export async function getStaticProps() {
    // fetching data from database
    return {
        props: {
            events: DUMMY_EVENTS
        },
        revalidate: 10
    };
}

export default HomePage;