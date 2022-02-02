import { useContext } from 'react';
import { Link } from 'react-router-dom';
// this styles are available only for this component => it's scoped
import headerElementStyle from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';
function MainNavigation() {
    const favoritesCont = useContext(FavoritesContext);
    return <header className={headerElementStyle.header}>
        <div className={headerElementStyle.logo}>
            React Meetups
        </div>
        <nav>
            <ul className={headerElementStyle.list}>
                <li>
                    {/* a click listener will be attached to this anchor tag and when we click, it will prevent the default request made by the browser and it will parse the url browser   */}
                    {/* we set the path where this link should lead */}
                    <Link to='/' className={headerElementStyle.item}> All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup' className={headerElementStyle.item}> Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites' className={headerElementStyle.item}> My Favorites
                        <span className={headerElementStyle.badge}>{favoritesCont.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;