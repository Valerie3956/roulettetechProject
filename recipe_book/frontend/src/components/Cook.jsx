import React, {useContext} from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../context/RecipeContext";

export default function Cook(){


    const {currentRecipe} = useContext(RecipeContext)


    return(
<div className = "cook">
<Recipe key = {currentRecipe.id} {...currentRecipe} fullView = {true}/>
</div>
    )
}