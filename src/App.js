import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.

// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //create a handleDelete function thant can be passed into the value of a button and then deleted.
  const handleDelete = (indexDelete) => {
    setRecipes(recipes.filter((recipeDetails,index)=> index !== indexDelete))
  }

  //create a component to setup update recipe 
   const createRecipe = (newRecipe)=>{
    setRecipes([...recipes, newRecipe])
  }
  

  //Pass down the recipes, setRecipes to RecipeCreate
  //Pass down the recipes,and handle delete to RecipeList
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
