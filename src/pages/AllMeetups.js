const dummyData =
    [
        {
            id: 'meeting1',
            title: 'First meetup for the day',
            image: 'https://commons.wikimedia.org/wiki/Category:Palas_Ia%C8%99i#/media/File:Iasi,_Public_Garden_Palas_2.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description: 'This is a first, amazing meetup which you definitely should not miss'
        },
        {
            id: 'meeting2',
            title: 'Second meeting for the day',
            image: 'https://commons.wikimedia.org/wiki/Category:Palas_Ia%C8%99i#/media/File:Ias,_Public_Garden_Palas_22.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description: 'Another amazing meeting, too bad this is dummy data and not real one'
        }
    ];
function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        {/* render a list of jsx elements which is actually an array*/}
        <ul>

            {
                dummyData.map((meetup) => {
                    // this key attribute is added for a warning in a console which says that every child in a list should have an unique key, in our case, its id
                    return <li key={meetup.id}>{meetup.title}</li>
                })
            }
        </ul>
    </section>
}
export default AllMeetupsPage;