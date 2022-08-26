import React, { useState } from "react";


// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

function RecipeCreate({createRecipe}) {
//create initial data object for values
  const initialData = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation: "",
  } 

//create a useStateHook for formData and makes its value an object containing the initialData
const [tableData, setTableData] = useState(initialData)



//create a handleChange function to handle the changes that take place on the form
  const handleChange = ({target}) => 
  setTableData({...tableData, [target.name]:target.value})

  const handleSubmit = (event) => {
    event.preventDefault()
    //add the new data to the recipes database 
    createRecipe(tableData)
    //clear the contents of the form when create the function
    setTableData({...initialData})
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>  
              <input id="name" name="name" type="text" onChange={handleChange} value={tableData.name} placeholder="Name"/>
            </td>
            <td>
            <input id="cusine" name="cuisine" type="text" onChange={handleChange} value={tableData.cuisine} placeholder="Cuisine"/>
            </td>
            <td>
              <input id="photo" name="photo" type="url" onChange={handleChange} value={tableData.photo} placeholder="Photo"/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" rows={3}onChange={handleChange} value={tableData.ingredients} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" rows={5}onChange={handleChange} value={tableData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
