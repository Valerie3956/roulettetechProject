import React, {useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBowlFood} from "@fortawesome/free-solid-svg-icons"
import { RecipeContext } from "../context/RecipeContext"

export default function Recipe(props){

const {id, title, ingredients, instructions, imgURL, time, servings, difficulty, notes, fullView} = props

const {chooseRecipe} = useContext(RecipeContext)

let rating = null

if(difficulty === "Easy"){
    rating = <FontAwesomeIcon icon={faBowlFood} />
} else if (difficulty === "Medium"){
    rating = (<>
        <FontAwesomeIcon icon={faBowlFood} />
        <FontAwesomeIcon icon={faBowlFood} />
        </>)
} else if (difficulty === "Hard"){
    rating = (<>
        <FontAwesomeIcon icon={faBowlFood} />
        <FontAwesomeIcon icon={faBowlFood} />
        <FontAwesomeIcon icon={faBowlFood} />
        </>)
}



    return(



        <div className = "recipeCard">
            {id === 0 ? (
        <h2>Please select a recipe to cook</h2>
      ) : (
        <>
        
        <h2>Title: {title}</h2>
        <div className = "details">
      <p>Time: {time} minutes</p>
      <p>Servings: {servings}</p>
      <p>Difficulty: {rating}</p>
        </div>

{fullView && <div className = "fullRecipe">


        <img src={imgURL} alt={title} />
        <div className = "listContainer">

        <div className = "list">
      <p>Ingredients:</p>
      <ul>{ingredients.split(",").map(ingredient => <li>{ingredient}</li>)}</ul>
        </div>

        <div className = "list">
      <p>Instructions:</p>
      <ol>
        {instructions.split(/\d+\./).map((step, index) => {
            if (step.trim() !== '') {
                return <li key={index}>{step.trim()}</li>;
            }
            return null;
        })}
        </ol>
        </div>
      <p>Notes: {notes}</p>
        </div>
      </div>}

{!fullView && <button onClick = {() => chooseRecipe(id)}>Cook This Recipe</button>}
</>
    )}
        </div>

    )
}

