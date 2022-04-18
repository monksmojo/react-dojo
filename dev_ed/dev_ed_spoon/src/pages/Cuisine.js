import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Grid, CuisineCard } from "../components/Styled";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (cuisineName) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${cuisineName}`
    );
    const data = await api.json();
    console.log(data);
    setCuisine(await data.results);
  };

  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  const cuisineList = cuisine.map((item) => {
    return (
      <Link key={item.id} to={`/recipe/${item.id}`}>
        <CuisineCard>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </CuisineCard>
      </Link>
    );
  });

  return <Grid>{cuisineList}</Grid>;
}

export default Cuisine;
