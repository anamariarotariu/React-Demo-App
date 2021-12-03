import itemStyle from './MeetupItem.module.css'
import Card from '../ui/Card';
function MeetupItem(props) {
    return <li className={itemStyle.item}>
        <Card>
            <div className={itemStyle.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={props.content}>
                <h3>{props.title}</h3>
                <address>
                    {props.address}
                </address>
                <p>{props.description}</p>
            </div>
            <div className={itemStyle.actions}>
                <button className={itemStyle.btn}> To Favorites</button>
            </div>
        </Card>
    </li>
}
export default MeetupItem;