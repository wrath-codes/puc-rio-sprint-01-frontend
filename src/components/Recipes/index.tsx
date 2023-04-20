
import useRecipeStore from "../../feature/recipe/recipeStore"
import { useEffect } from "react"
import RecipeCount from "./RecipeCount"
import RecipeList from "./RecipeList"
import { SearchRecipes } from "./SearchRecipes"

export function Recipes() {
    const { recipes, createRecipe, updateRecipe, deleteRecipe, getRecipe, getRecipes, resetRecipe } = useRecipeStore()

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <>
            <div className="flex flex-row justify-between">
                <SearchRecipes />
                <RecipeCount recipeCount={recipes.length} />
            </div>
            <RecipeList recipes={recipes} />
        </>
    )
}