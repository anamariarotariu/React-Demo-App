// allow us to reevaluate a component and render a different content on a screen when a state is changing 
import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList'
function AllMeetupsPage() {
    // we start in a loading state
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    // whenever we visit this page, we want to make a GET request from the API
    useEffect(() => {
        setIsLoading(true);
        // will be executed only when needed,not always when the component is render, so we avoid an infinite loop
        // second parameter will be an empty array, because we don't have external dependencies, so this code will only run once, when this component is loaded for the first time
        fetch('https://react-meetings-project-default-rtdb.firebaseio.com/meetups.json').then(response => {
            return response.json();
        }).then(data => {
            // we get the data and convert it in a array
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);
    if (isLoading) {
        return <section>
            <p> Loading...</p>
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
}
export default AllMeetupsPage;