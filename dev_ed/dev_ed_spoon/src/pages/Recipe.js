import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailedWrapper, Info, Button } from "../components/Styled";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setRecipe(await data);
    console.log(recipe);
  };

  useEffect(() => {
    getRecipe();
  }, [params.recipeId]);
  console.log(recipe.extendedIngredients);
  return (
    <DetailedWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((i) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailedWrapper>
  );
}

export default Recipe;
