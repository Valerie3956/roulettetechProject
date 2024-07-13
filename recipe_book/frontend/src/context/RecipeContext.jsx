import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const RecipeContext = React.createContext()

export default function RecipeProvider(props) { 

const navigate = useNavigate()

const [recipes, setRecipes] = useState([])

const initCurrentRecipe = {
  title: "",
  time: 0, 
  servings: 0,
  difficulty: "",
  imgURL: "",
  ingredients: "",
  instructions: "",
  notes: "",
  id : 0
}

const [currentRecipe, setCurrentRecipe] = useState(initCurrentRecipe)

useEffect(() => {
    axios.get('http://127.0.0.1:8000/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
      });
  }, []);

function chooseRecipe(id){
  const selectedRecipe = recipes.find(recipe => recipe.id === id)
  setCurrentRecipe(selectedRecipe)
  navigate("cook")
}






return(
    <RecipeContext.Provider
    value = {{
recipes,
currentRecipe,
chooseRecipe
    }}
    >
        {props.children}
    </RecipeContext.Provider>
)

}