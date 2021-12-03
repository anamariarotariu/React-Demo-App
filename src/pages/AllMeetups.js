import MeetupList from '../components/meetups/MeetupList'
const dummyData =
    [
        {
            id: 'meeting1',
            title: 'First meetup for the day',
            image: 'https://unsplash.com/photos/FV3GConVSss',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description: 'This is a first, amazing meetup which you definitely should not miss'
        },
        {
            id: 'meeting2',
            title: 'Second meeting for the day',
            image: 'https://unsplash.com/photos/FV3GConVSss',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description: 'Another amazing meeting, too bad this is dummy data and not real one'
        }
    ];
function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={dummyData}></MeetupList>
    </section>
}
export default AllMeetupsPage;