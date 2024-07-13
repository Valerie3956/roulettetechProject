import React, {useContext, useState} from "react"
import { RecipeContext } from "../context/RecipeContext"
import Recipe from "./Recipe"





export default function RecipeSearch(){

const [browseCookbook, setBrowseCookbook] = useState(false)

const {recipes} = useContext(RecipeContext)




    return(
        <div className = "searchContainer">
            <div className = "searchTop">
        <h1>Search for a recipe</h1>
        <h2>search by title</h2>
        <h2>search by difficulty</h2>
        <h2>search by time</h2>
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