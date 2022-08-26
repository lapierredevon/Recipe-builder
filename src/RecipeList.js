import React from "react";

//import the component createTd to use to create table row and data.
import CreateTd from "./CreateTd";


// TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
function RecipeList({recipes, handleDelete}) {
  
  //map the recipes data to create a row with data for each recipe
  //use the createTd componenet to assist with the creation of the data
 
  const recipe = recipes.map((recipeDetails, index)=> {
   
   return <CreateTd key={index}
              recipeDetails={recipeDetails}
              handleDelete={() => handleDelete(index)}
    />
  })
  
//Add all of the th to the thead 
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipe}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
