import classes from './Card.module.css'
// this component works as a wrapper for the meetup list and if we don't use this props.children, the list content won't be visible 
function Card(props) {
    return <div className={classes.card}>
        {/* used for showing what we have in the children of this div */}
        {props.children}
    </div>
}
export default Card;