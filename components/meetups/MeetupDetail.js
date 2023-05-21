import classes from './MeetupDetail.module.css'

const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
            <img
                src={props.image}
                alt={props.title} />
            <article>{props.address}</article>
            <main>{props.description}</main>
        </section>
    )
}

export default MeetupDetail