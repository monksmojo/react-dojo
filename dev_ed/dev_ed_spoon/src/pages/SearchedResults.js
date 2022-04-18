import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Grid, CuisineCard } from "../components/Styled";
function SearchedResults() {
  const params = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async (searchText) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${searchText}`
    );
    const data = await api.json();
    console.log(data);
    setSearchResult(await data.results);
  };

  useEffect(() => {
    getSearchResult(params.searchText);
  }, [params.searchText]);

  const searchList = searchResult.map((item) => {
    return (
      <Link to={`/recipe/${item.id}`}>
        <CuisineCard key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </CuisineCard>
      </Link>
    );
  });

  return <Grid>{searchList}</Grid>;
}

export default SearchedResults;
