import NewMeetupForm from "@/components/meetups/NewMeetupForm"

export default function AllMeetups() {

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
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}