import { useRouter } from "next/router"
import MeetupDetail from "@/components/meetups/MeetupDetail"

export default function Meetup() {
    const router = useRouter()

    const meetupId = router.query.meetupId
    console.log('Currently at page: ',meetupId)

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

export async function getStaticPaths() {
    return {
        // if true nextJS tries to generate a new page itself
        // if fallback true then params not defined will return a 404
        fallback: false,
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } },
        ]
    }
}

// this code runs during build time; runs in server side and not broswer in dev environment
export async function getStaticProps(context) {
    // to fetch data for a single meetup
    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                image: 'https://images.unsplash.com/photo-1580934738416-ad531f2920f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWV4aWNvJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                id: meetupId,
                title: 'Mexico city plaza',
                address: 'Mexico city',
                description: 'Busy plaza in mexico city',
            }
        }
    }
}