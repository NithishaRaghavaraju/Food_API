import {RecipeMethod} from "./Recipe.js"
import { useLocation } from 'react-router-dom';
import React from 'react'
const openai_api_key = "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"


const Recipes = ({name}) => {
const location = useLocation();
const data = location.state.name;
  const async_data = RecipeMethod(data)
  async_data.then((value) => {
    const element = document.getElementById("result");
    const instructions = value.replace(/\.\d+/g, ".\n");
    const instructionsList = document.createElement("ul");
    let html = "";
    instructions.split("\n").forEach((instruction) => {
        html +=  instruction+ "</br>";
      });
    // recipeContainer.appendChild(instructionsHeading);
    element.innerHTML = html;
  });
  console.log(data)
  return (

    <div>
      <p>{data}</p>
      <div id="result">
        <p>Loading ....</p>
      </div>
    </div>
  )
}

export default Recipes
