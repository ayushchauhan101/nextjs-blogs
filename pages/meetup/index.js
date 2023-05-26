import Head from "next/head"
import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router"

export default function AllMeetups() {
    const router = useRouter()

    async function addMeetupHandler(enteredData) {
        console.log(enteredData)

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()

        console.log(data)

        // redirect to the home page after inserting the data
        router.push('/')
    }


    return (
        <>
            <Head>
                <title>Add a new Meetup</title>
                <meta name='description' content="Add and view meetups with your friends" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}