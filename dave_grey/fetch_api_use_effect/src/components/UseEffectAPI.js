import { useState, useEffect } from "react";

import Data from "./Data.js";

function UseEffectAPI() {
  const [animeData, setAnimeData] = useState([]);
  //   const fetchAnimeData = () => {
  //     fetch("https://animechan.vercel.app/api/random")
  //       .then((response) => response.json())
  //       .then((quote) => setAnimeData(quote));
  //   };

  const fetchAnimeData = async () => {
    const response = await fetch("https://animechan.vercel.app/api/quotes");
    const data = await response.json();
    console.log(data);
    setAnimeData([...data]);
  };

  const animeQuoteList = animeData.map((quote) => {
    return <Data key={quote.anime} data={JSON.stringify(quote)} />;
  });

  useEffect(() => {
    try {
      fetchAnimeData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <>{animeQuoteList}</>;
}
export default UseEffectAPI;
