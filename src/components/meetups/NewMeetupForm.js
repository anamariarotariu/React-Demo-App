import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";
function NewMeetupForm() {
    // function for when we submit the form
    function submitHandler(event) {
        event.preventDefault();
        
    }
    return <Card>
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="title">Meetup Title</label>
                <input type="text" require id="title"></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="image">Meetup Image</label>
                <input type="url" require id="image"></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="address">Meetup Address</label>
                <input type="text" require id="address"></input>
            </div>
            <div className={styles.control}>
                {/* instead of using for in order to connect the label to input, we use htmlFor */}
                <label htmlFor="description">Meetup Description</label>
                <textarea id="description" required rows="5"></textarea>
            </div>
            <div className={styles.actions}>
                <button> Add Meetup</button>
            </div>
        </form>
    </Card>
}
export default NewMeetupForm;