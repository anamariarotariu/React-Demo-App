import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        // we send a HTTP request, fetch sends a GET request by default and by adding a second argument we send a POST request
        // we add .json because of firebase and this meetups will be a table 
        fetch('https://react-meetings-project-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // once the request is done, we navigate back to the home page
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
}
export default NewMeetUpPage;