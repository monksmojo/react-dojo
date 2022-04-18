import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Card, Gradient } from "./Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Veggies() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check)); // in local storage you can only string string to json
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", await JSON.stringify(data.recipes));
      setVeggies(await data.recipes);
    }
  };

  const veggieList = veggies.map((recipe) => {
    return (
      <SplideSlide key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
          <Card key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
          </Card>
        </Link>
      </SplideSlide>
    );
  });

  return (
    <Wrapper>
      <h3>Veggies Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggieList}
      </Splide>
    </Wrapper>
  );
}
export default Veggies;
