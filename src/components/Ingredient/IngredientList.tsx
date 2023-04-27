import { Fragment } from "react";
import { Ingredient } from "../../feature/recipe/recipeService";

export default function IngredientList({ ingredients }: { ingredients: Ingredient[] | undefined }) {
    return (
        <Fragment>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-green-500/80">Ingredients</p>
                    <p className="text-sm font-bold leading-6 text-indigo-400/80 ml-4">{ingredients?.length}</p>
                </div>
                <ul className="flex flex-col gap-1 bg-indigo-400/30 rounded-md p-4">
                    {ingredients?.map((ingredient) => (
                        <li key={ingredient.id} className="text-sm font-medium leading-6 text-gray-700">{ingredient.name} {ingredient.quantity}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}