
import useRecipeStore from "../../feature/recipe/recipeStore"
import { useEffect, useState } from "react"
import RecipeCount from "./RecipeCount"
import RecipeList from "./RecipeList"
import { SearchRecipes } from "./SearchRecipes"
import { Recipe } from "../../feature/recipe/recipeService"
import { Fragment } from "react"
import AddRecipeModal from "./modals/AddRecipeModal"
export function Recipes() {
    const { recipes, getRecipes } = useRecipeStore()

    // Create a state to manage which recipe is open
    const [openRecipe, setOpenRecipe] = useState<Recipe | null>(null)


    // Create a function to handle opening a recipe
    const handleOpenRecipe = (recipe: Recipe) => {
        setOpenRecipe(recipe)
    }


    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <Fragment>
            <div className="flex flex-row justify-between ">
                <SearchRecipes />
                <AddRecipeModal />
                <RecipeCount recipeCount={recipes.length} />
            </div>
            <RecipeList recipes={recipes} />
        </Fragment>
    )
}