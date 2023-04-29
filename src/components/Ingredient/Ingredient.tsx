import { Fragment } from "react";
import { Ingredient as IngredientType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import EditIngredientModal from "./modals/EditIngredientModal";
import DeleteIngredientModal from "./modals/DeleteIngredientModal";

// Component to display a single ingredient
export default function Ingredient({ ingredient, edit }: { ingredient: IngredientType, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    return (
        <Fragment>
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
        </Fragment>
    )
}