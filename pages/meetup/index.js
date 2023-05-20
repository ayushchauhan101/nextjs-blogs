import NewMeetupForm from "@/components/meetups/NewMeetupForm"

export default function Meetup() {

    function addMeetupHandler(enteredData) {
        console.log(enteredData)
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}