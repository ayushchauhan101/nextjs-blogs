import NewMeetupForm from "@/components/meetups/NewMeetupForm"

export default function AllMeetups() {

    function addMeetupHandler(enteredData) {
        console.log(enteredData)
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}