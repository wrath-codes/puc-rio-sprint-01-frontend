
import useRecipeStore from "../../feature/recipe/recipeStore"
import { useEffect } from "react"
import RecipeCount from "./RecipeCount"
import RecipeList from "./RecipeList"
import { SearchRecipes } from "./SearchRecipes"
import { Fragment } from "react"
import AddRecipeModal from "./modals/AddRecipeModal"
export function Recipes() {
    const { recipes, getRecipes } = useRecipeStore()

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