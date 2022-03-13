import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useNavigate } from "react-router-dom";

function NewMeetUp(props) {
  const history = useNavigate();
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-project-db-5f144-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }
  return (
    <section>
      <h1>new meetUp</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler}></NewMeetUpForm>
    </section>
  );
}
export default NewMeetUp;
