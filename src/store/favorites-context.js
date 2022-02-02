import { createContext, useState } from "react";
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
});
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup) {
        //guaranteed to get latest state snapshot,because React doesn't modify the state instantly
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup =>
            meetup.id === meetupId
        )
    }
    //when the state will change, this object will have different values
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler

    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;