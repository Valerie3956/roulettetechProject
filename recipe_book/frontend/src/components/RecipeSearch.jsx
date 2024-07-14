import React, {useContext, useState} from "react"
import { RecipeContext } from "../context/RecipeContext"
import Recipe from "./Recipe"





export default function RecipeSearch(){

const [browseCookbook, setBrowseCookbook] = useState(false)
const [selectedDifficulty, setSelectedDifficulty] = useState("Easy")

const {recipes, getByDifficulty} = useContext(RecipeContext)

const handleChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };


  console.log(selectedDifficulty)
  
function handleSubmit(e){
    e.preventDefault()
    getByDifficulty(selectedDifficulty)
}
    return(
        <div className = "searchContainer">
            <div className = "searchTop">
        <h1>Search for a recipe by difficulty</h1>
        <form onSubmit = {handleSubmit}>
        
        <label>Difficulty:</label>
        <div>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Easy"
              checked='Easy'
              onChange={handleChange}
            />
            Easy
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Medium"
              checked='Medium'
              onChange={handleChange}
            />
            Medium
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Hard"
              checked='Hard'
              onChange={handleChange}
            />
            Hard
          </label>
        </div>
<button>Search By Difficulty</button>
        </form>
        <button className = "browseButton" onClick = {() => setBrowseCookbook(prevBrowse => !prevBrowse)}>{
            browseCookbook?
            'Close Cookbook' 
            :
            'Browse Cookbook'
        }</button>
        </div>
{browseCookbook && 
<>
{recipes.map(recipe => (
          <Recipe key = {recipe.id} {...recipe} fullView = {false}/>
        ))}
        </>
        }
        </div>
    )
}