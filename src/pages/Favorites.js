import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
    const favoriteCont = useContext(FavoritesContext);
    let content;
    if (favoriteCont.totalFavorites === 0) {
        content = <p>You got no favorites yet.</p>
    } else {
        content = <MeetupList meetups={favoriteCont.favorites}></MeetupList>
    }

    return <section>
        <h1> My Favorites</h1>
        {content}
    </section>
}
export default FavoritesPage;