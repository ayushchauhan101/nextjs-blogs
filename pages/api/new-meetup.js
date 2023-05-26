//  domain/api/new-meetup
import { MongoClient } from "mongodb"

// only POST request trigger this route
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        // mongodb+srv://<username>:<password>@<cluster-name>.<region>.mongodb.net/<database-name>
        const client = await MongoClient.connect(`mongodb+srv://ayush:${process.env.mongoPassword}@cluster0.4vg9aiz.mongodb.net/meetups?retryWrites=true&w=majority`, { family: 4 })
        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message: 'Meetup inserted...' })
    }
}

export default handler