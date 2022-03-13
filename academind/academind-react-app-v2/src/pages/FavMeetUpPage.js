import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavMeetUp(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You Got No favorites yet. Start adding Some</p>;
  } else {
    content = <MeetUpList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavMeetUp;
