import './index.css'
import useRecipeStore from "./feature/recipe/recipeStore"
import { useEffect } from "react"

function Recipes() {
    const { recipes, createRecipe, updateRecipe, deleteRecipe, getRecipe, getRecipes, resetRecipe } = useRecipeStore()

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div className="text-center">
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h2 className="font-bold">{recipe.title}</h2>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div className="text-center">
                Hello

                <Recipes />
            </div>
        </div>
    )
}

export default App
