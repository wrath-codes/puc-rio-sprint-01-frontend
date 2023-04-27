import { Fragment } from "react";
import { RecipeOpen as RecipeType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import IngredientList from "../Ingredient/IngredientList";
import StepList from "../Steps/StepList";
import RecipeDetail from "./RecipeDetail";

export default function Recipe({ recipe }: { recipe: RecipeType }) {
    const { lockOtherRecipes, lockThisRecipe, unlockThisRecipe, getRecipe, selectedRecipe, editRecipeOff, editRecipeOn } = useRecipeStore();

    const unlockRecipe = () => {
        unlockThisRecipe(recipe.id);
        lockOtherRecipes(recipe.id);
        getRecipe(recipe.id);
    }

    const lockRecipe = () => {
        lockThisRecipe(recipe.id);
    }

    const activateEditMode = () => {
        editRecipeOn(recipe.id);
        console.log("edit mode activated");
    }

    const deactivateEditMode = () => {
        editRecipeOff(recipe.id);
        console.log("edit mode deactivated");
    }


    return (
        <Fragment>
            <div className="flex flex-col justify-between gap-x-96 py-5 hover:bg-green-300/30 px-4 rounded-md hover:border-2 cursor-pointer w-full">
                <div className="flex"
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
                                <RecipeDetail recipe={recipe} />
                                <button className="cursor-pointer my-2 justify-end inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800">
                                    <PencilSquareIcon className="h-8 w-8  px-2"
                                        onClick={recipe.edit === false ? activateEditMode : deactivateEditMode}
                                    />
                                </button>
                            </div>
                            <div className="grid grid-rows-2 gap-5 sm:grid-rows-1 sm:grid-cols-2">
                                <IngredientList ingredients={selectedRecipe?.ingredients} edit={recipe.edit} />
                                <StepList steps={selectedRecipe?.steps} />
                            </div>
                        </Fragment>
                    )}
                </div>


            </div>
        </Fragment >
    );
}


