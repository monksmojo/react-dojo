import MeetUpList from "../components/meetups/MeetUpList";
import {useState,useEffect} from 'react'
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "MeetupStreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "MeetupStreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetUp() {

  const [isLoading,setIsLoading] =useState(true)
  const [loadedMeetups,setLoadedMeetups]=useState([])

  useEffect(()=>{
    setIsLoading(true)
      fetch(
        "https://react-project-db-5f144-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups=[]
          for(const key in data){
            const meetup={
              id:key,
              ...data[key]
            }
            meetups.push(meetup)
          }
          setIsLoading(false);
          setLoadedMeetups(meetups.concat(DUMMY_DATA));
        });
  },[]);


  if(isLoading){
    return(
      <section>
        <h1>Its Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUp;
