import { useRouter } from "next/router"
import MeetupDetail from "@/components/meetups/MeetupDetail"

export default function Meetup() {
    const router = useRouter()

    const meetupId = router.query.meetupId

    return (
        <>
            <MeetupDetail
                image='https://images.unsplash.com/photo-1580934738416-ad531f2920f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWV4aWNvJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
                title='Mexico city plaza'
                address='Mexico city'
                description='Busy plaza in mexico city'
            />
        </>
    )
}