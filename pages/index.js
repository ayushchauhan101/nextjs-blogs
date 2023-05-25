import MeetupList from "../components/meetups/MeetupList"

const fakeData = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://images.unsplash.com/photo-1580934738416-ad531f2920f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWV4aWNvJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        address: 'mexico city',
        description: 'old barn in a village'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://images.unsplash.com/photo-1682949029799-c1c111344b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80',
        address: 'jodhpur',
        description: 'a peacock carving'
    },

]

export default function Home(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}


// will not fetch new data added after building and deploying
export async function getStaticProps() {
    return {
        props: { meetups: fakeData },
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