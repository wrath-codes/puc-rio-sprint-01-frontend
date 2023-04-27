import { Fragment } from "react";
import { RecipeOpen } from "../../feature/recipe/recipeService";

export default function RecipeDetail({ recipe }: { recipe: RecipeOpen | undefined }) {
    return (
        <Fragment>

            <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-2 text-green-500/80">Description:</p>
                <p className="text-sm font-medium leading-2 text-gray-700">{recipe?.description}</p>
            </div>
        </Fragment>
    )
}   