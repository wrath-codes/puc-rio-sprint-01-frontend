import { Fragment } from "react";
import { Recipe as RecipeType } from "../../feature/recipe/recipeService";
import Recipe from "./Recipe";

export default function RecipeList({ recipes: recipes }: { recipes: RecipeType[] }) {
    return (
        <Fragment>
            <ul role="list" className="divide-y divide-gray-100">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </Fragment>
    )
}