import Head from "next/head"
import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Meetups organiser</title>
                <meta name='description' content="Add and view meetups with your friends" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

// will not fetch new data added after building and deploying
export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://ayush:new_mongoDB@cluster0.4vg9aiz.mongodb.net/meetups?retryWrites=true&w=majority', { family: 4 })
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetupsFromMongo = await meetupsCollection.find().toArray()
    client.close()

    return {
        props: {
            meetups: meetupsFromMongo.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        // to re-render or re-validate after following seconds
        revalidate: 10,
    }
}


// // always run on the server; runs every request
// export async function getServerSideProps(context) {
//     // to get request and response data
//     const req = context.req
//     const res = context.res
//     return {
//         props: {
//             meetups: fakeData
//         }
//     }
// }