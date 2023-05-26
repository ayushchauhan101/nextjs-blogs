import Head from "next/head"
import { MongoClient, ObjectId } from "mongodb"
import { useRouter } from "next/router"
import MeetupDetail from "@/components/meetups/MeetupDetail"

export default function Meetup(props) {
    const router = useRouter()

    const meetupId = router.query.meetupId
    console.log('Currently at page: ', meetupId)

    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://ayush:new_mongoDB@cluster0.4vg9aiz.mongodb.net/meetups?retryWrites=true&w=majority', { family: 4 })
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    // only fetching id fields
    const returnedMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()

    return {
        // if fallback true then params not defined will return a 404
        fallback: false,
        paths: returnedMeetups.map(meetup => (
            {
                // params will be the mongoDB document _id 
                params: { meetupId: meetup._id.toString() }
            }
        ))
    }
}

// this code runs during build time; runs in server side and not broswer in dev environment
export async function getStaticProps(context) {
    // extract an id from the url and use it to find from mongoDB server
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://ayush:new_mongoDB@cluster0.4vg9aiz.mongodb.net/meetups?retryWrites=true&w=majority', { family: 4 })
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    // only fetch one single document by _id
    // ObjectId to parse only the id and ignore 'ObjectId' string
    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
    console.log(selectedMeetup)
    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        }
    }
}