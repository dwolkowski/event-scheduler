import connectDb from "../../utils/connect-mdb"

export default async function handler(req, res){
    if(req.method === "POST" ){
        const data = req.body;

        const [ closeConnection, collection ] = await connectDb();
        const events = await collection.insertOne(data);
        await closeConnection();

        res.status(201).json({message: "Successfully added into db!"});
    }
}