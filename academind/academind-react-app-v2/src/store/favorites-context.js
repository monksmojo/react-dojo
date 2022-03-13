import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetUp) {
    // first way
    // setUserFavorites((previousFavorites) => {
    //   return previousFavorites.concat(favoriteMeetUp);
    // });

    // second  way
    setUserFavorites([ ...userFavorites, favoriteMeetUp ]);
    console.log("after set" + userFavorites);
  }

  function removeFavoritesHandler(meetUpId) {
    setUserFavorites((previousFavorites) => {
      console.log(" in remove after set" + userFavorites);
      return previousFavorites.filter((meetUp) => meetUp.id !== meetUpId);
      console.log(" in remove after set" + userFavorites);
    });
  }

  function itemIsFavoritesHandler(meetUpId) {
    console.log(meetUpId, userFavorites);
    return userFavorites.some((meetUp) => meetUp.id === meetUpId);
    console.log(userFavorites);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
