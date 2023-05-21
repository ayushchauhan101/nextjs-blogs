import Layout from '../components/layout/Layout'
import MeetupList from "../components/meetups/MeetupList"

const fakeData = [
    { id: 'm1', title: 'first meetup', image: 'https://images.unsplash.com/photo-1580934738416-ad531f2920f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWV4aWNvJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60', address: 'mexico city', description: 'old barn in a village' },
    { id: 'm2', title: 'second meetup', image: 'https://images.unsplash.com/photo-1682949029799-c1c111344b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80', address: 'jodhpur', description: 'a peacock carving' },
]

export default function Home() {
    return (
        <Layout>
            <MeetupList meetups={fakeData} />
        </Layout>
    )
}