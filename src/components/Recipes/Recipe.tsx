import { Fragment } from "react";
import { RecipeOpen as RecipeType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import IngredientList from "../Ingredient/IngredientList";
import StepList from "../Steps/StepList";
import RecipeDetail from "./RecipeDetail";
import DeleteRecipeModal from "./modals/DeleteRecipeModal";

// Component to display a single recipe
export default function Recipe({ recipe }: { recipe: RecipeType }) {
    const { lockOtherRecipes, lockThisRecipe, unlockThisRecipe, getRecipe, selectedRecipe, editRecipeOff, editRecipeOffAll, editRecipeOn, getRecipeIngredients, ingredients, steps, getRecipeSteps } = useRecipeStore();

    // Get all ingredients and steps for selected recipe
    // Locks other recipes when a recipe is opened
    // Unlocks other recipes when a recipe is closed
    const unlockRecipe = () => {
        unlockThisRecipe(recipe.id);
        lockOtherRecipes(recipe.id);
        editRecipeOffAll();
        getRecipeIngredients(recipe.id);
        getRecipeSteps(recipe.id);
        getRecipe(recipe.id);
    }

    // Locks a recipe when a recipe is closed
    const lockRecipe = () => {
        lockThisRecipe(recipe.id);
    }

    // Activates edit mode for a recipe
    const activateEditMode = () => {
        editRecipeOn(recipe.id);
    }

    // Deactivates edit mode for a recipe
    const deactivateEditMode = () => {
        editRecipeOff(recipe.id);
    }


    return (
        <Fragment>
            <div className="flex flex-col justify-between gap-x-96 py-5 hover:bg-gray-400/30 px-4 rounded-md hover:border-2 cursor-pointer w-full">
                <div className=""
                    onClick={recipe.open === false ? unlockRecipe : lockRecipe}
                >
                    <div className="min-w-0 flex-auto">
                        <p className={`text-sm font-semibold leading-6 ${recipe.open === true ? "text-green-500" : "text-gray-800"}`}>{recipe.title}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row sm:items-end gap-1 justify-end"
                    onClick={recipe.open === false ? unlockRecipe : lockRecipe}
                >
                    {recipe.open === false ? (
                        <button className="flex items-center gap-1">
                            <ChevronDownIcon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button className="flex items-center gap-1">
                            <ChevronUpIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className="flex flex-col justify-between gap-1 sm:flex-col">
                    {recipe.open === true && (
                        <Fragment>
                            <div className="flex flex-row gap-1 justify-between">
                                <RecipeDetail recipe={selectedRecipe} edit={recipe.edit} />
                                <div className="flex flex-row gap-1">
                                    <button className="cursor-pointer my-2 justify-end inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800">
                                        <PencilSquareIcon className="h-8 w-8  px-2"
                                            onClick={recipe.edit === false ? activateEditMode : deactivateEditMode}
                                        />
                                    </button>
                                    <DeleteRecipeModal recipe_id={recipe.id} open_status={false} />
                                </div>

                            </div>
                            <div className="grid grid-rows-2 gap-5 sm:grid-rows-1 sm:grid-cols-2">
                                <IngredientList ingredients={ingredients} edit={recipe.edit} />
                                <StepList steps={steps} edit={recipe.edit} />
                            </div>
                        </Fragment>
                    )}
                </div>


            </div>
        </Fragment >
    );
}


