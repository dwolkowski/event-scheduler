import { MongoClient } from "mongodb";

export default async function connectDb() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const collection = db.collection("events");

    const closeConnection = async () => {
        await client.close();
    };

    return[ closeConnection, collection];
}