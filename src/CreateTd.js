import React from "react"

/*createTd component is used to turn the mapped data from recipes into a table row containing the table data for a new recipe. It also has a delete button that will allow users to delete old recipes*/
export default function CreateTd({recipeDetails, key, handleDelete}){
    
    return (
        <tr>
            <td>{recipeDetails.name}</td>
            <td>{recipeDetails.cuisine}</td>
            <td><img src={recipeDetails.photo} alt="recipe" /></td>
            <td><p className="content_td">{recipeDetails.ingredients}</p></td>
            <td><p className="content_td">{recipeDetails.preparation}</p></td>  
            <td><button name="delete" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}