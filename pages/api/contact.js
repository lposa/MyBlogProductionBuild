import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid Input" });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_pass}@${process.env.mongodb_clustername}.7g7jl.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            res.status(500).json({ message: "Could not connect to DB" });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection("messages").insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            res.status(500).json({ message: "Could not add data" });
            return;
        }

        client.close();

        res.status(201).json({ message: "Success!!!", message: newMessage });
    }
}

export default handler;