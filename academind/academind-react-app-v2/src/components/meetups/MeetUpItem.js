import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetUpItem(props) {
  const favoritesContext = useContext(FavoritesContext);

  const isItemFavorites = favoritesContext.itemIsFavorite(props.meetup.id);

  function toggleFavoritesStatusHandler() {
    if (isItemFavorites) {
      favoritesContext.removeFavorite(props.meetup.id);
    } else {
      favoritesContext.addFavorites(props.meetup);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.address}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {isItemFavorites ? "remove from favorites" : "Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
