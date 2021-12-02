import { Link } from 'react-router-dom';
function MainNavigation() {
    return <header>
        <div>
            React Meetups
        </div>
        <nav>
            <ul>
                <li>
                    {/* a click listener will be attached to this anchor tag and when we click, it will prevent the default request made by the browser and it will parse the url browser   */}
                    {/* we set the path where this link should lead */}
                    <Link to='/'> All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'> Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'> My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;