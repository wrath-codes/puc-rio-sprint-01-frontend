import { Fragment } from "react";
import { Ingredient as IngredientType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import AddIngredientModal from "./modals/AddIngredientModal";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Ingredient from "./Ingredient";

// Component to display a list of ingredients
export default function IngredientList({ ingredients, edit }: { ingredients: IngredientType[] | undefined, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    const [parent, enableAnimations] = useAutoAnimate()
    return (
        <Fragment>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-indigo-500/80">Ingredients</p>
                    <AddIngredientModal recipe_id={selectedRecipe?.id} open_status={false} />
                    <p className="text-sm font-bold leading-6 text-indigo-400/80 ml-4">{ingredients?.length}</p>
                </div>
                <ul ref={parent} className="flex flex-col gap-2 bg-indigo-400/30 rounded-md p-4">
                    {ingredients?.map((ingredient) => (
                        <Ingredient key={ingredient.id} ingredient={ingredient} edit={edit} />
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}