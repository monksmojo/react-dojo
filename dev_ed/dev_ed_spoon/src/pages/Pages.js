import Cuisine from "./Cuisine";
import Home from "./Home";
import SearchedResults from "./SearchedResults";
import Recipe from "./Recipe";

import { Routes, Route } from "react-router-dom";


function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:searchText" element={<SearchedResults />} />
      <Route path="/recipe/:recipeId" element={<Recipe/>}/>
    </Routes>
  );
}

export default Pages;
