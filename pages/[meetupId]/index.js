import { useRouter } from "next/router"

export default function Meetup() {
    const router = useRouter()

    const meetupId = router.query.meetupId

    return <h1>You are visiting :{meetupId} page.</h1>
}