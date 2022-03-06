import classes from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetUpList(props) {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
       return <MeetUpItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
}

export default MeetUpList;
