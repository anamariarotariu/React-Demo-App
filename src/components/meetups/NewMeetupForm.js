// for reading user input, we use useRef
import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
    // this will allow us to access the user input for title through this ref
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    // function for when we submit the form
    function submitHandler(event) {
        event.preventDefault();
        // extract what the user entered and store it in an object
        const enteredTtile = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: enteredTtile,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        // we want to send the info to a server
        props.onAddMeetup(meetupData);

    }
    return <Card>
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="title">Meetup Title</label>
                <input type="text" require id="title" ref={titleInputRef}></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="image">Meetup Image</label>
                <input type="url" require id="image" ref={imageInputRef}></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="address">Meetup Address</label>
                <input type="text" require id="address" ref={addressInputRef}></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="description">Meetup Description</label>
                <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
            </div>
            <div className={styles.actions}>
                <button> Add Meetup</button>
            </div>
        </form>
    </Card>
}
export default NewMeetupForm;