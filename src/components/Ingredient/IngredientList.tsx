import { Fragment } from "react";
import { Ingredient } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import EditIngredientModal from "./modals/EditIngredientModal";
import DeleteIngredientModal from "./modals/DeleteIngredientModal";
import AddIngredientModal from "./modals/AddIngredientModal";

export default function IngredientList({ ingredients, edit }: { ingredients: Ingredient[] | undefined, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    return (
        <Fragment>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-indigo-500/80">Ingredients</p>
                    <AddIngredientModal recipe_id={selectedRecipe?.id} open_status={false} />
                    <p className="text-sm font-bold leading-6 text-indigo-400/80 ml-4">{ingredients?.length}</p>
                </div>
                <ul className="flex flex-col gap-2 bg-indigo-400/30 rounded-md p-4">
                    {ingredients?.map((ingredient) => (
                        <li key={ingredient.id} className="text-sm font-medium leading-6 text-gray-700">
                            <div className="flex flex-row gap-1">
                                {(selectedRecipe?.id === ingredient.recipe_id && edit === true) && (
                                    <Fragment>
                                        <EditIngredientModal ingredient={ingredient} open_status={false} />
                                        <DeleteIngredientModal ingredient={ingredient} open_status={false} />
                                    </Fragment>
                                )}
                                {ingredient.name} {ingredient.quantity}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}