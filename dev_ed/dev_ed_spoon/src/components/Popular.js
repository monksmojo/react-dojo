import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient } from "./Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check)); // in local storage you can only string string to json
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", await JSON.stringify(data.recipes));
      setPopular(await data.recipes);
    }
  };

  const popularList = popular.map((recipe) => {
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
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popularList}
      </Splide>
    </Wrapper>
  );
}

export default Popular;
