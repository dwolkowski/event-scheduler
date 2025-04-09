import { MongoClient } from "mongodb";

// api/new-event
export default async function handler(req, res){
    if(req.method === "POST" ){
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://dwolkowski:<password>@v1-testing-cluster.meq1td3.mongodb.net/EventsApp?retryWrites=true&w=majority&appName=V1-Testing-Cluster");
        const db = client.db();
        
        const eventsCollection = db.collection("events");

        const result = await eventsCollection.insertOne(data);

        client.close();

        res.status(201).json({message: "Successfully added into db!"});
    }
}