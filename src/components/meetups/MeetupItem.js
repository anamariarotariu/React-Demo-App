import { useContext } from "react";
import itemStyle from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
    const favoritesCont = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCont.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCont.removeFavorite(props.id);
        } else {
            favoritesCont.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }
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
                <button className={itemStyle.btn} onclick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
            </div>
        </Card>
    </li>
}
export default MeetupItem;