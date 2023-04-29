import { Fragment } from "react";
import { RecipeOpen as RecipeType } from "../../feature/recipe/recipeService";
import Recipe from "./Recipe";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// Component to display a list of recipes
export default function RecipeList({ recipes: recipes }: { recipes: RecipeType[] }) {
    const [parent, enableAnimations] = useAutoAnimate()
    return (
        <Fragment>
            <ul ref={parent} role="list" className="divide-y divide-gray-100 w-full">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </Fragment>
    )
}