import { Fragment } from "react";
import { RecipeOpen as RecipeType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import IngredientList from "../Ingredient/IngredientList";
import StepList from "../Steps/StepList";

export default function Recipe({ recipe }: { recipe: RecipeType }) {
    const { lockOtherRecipes, lockThisRecipe, unlockThisRecipe, getRecipe, selectedRecipe } = useRecipeStore();

    const unlockRecipe = () => {
        unlockThisRecipe(recipe.id);
        lockOtherRecipes(recipe.id);
        getRecipe(recipe.id);
    }

    const lockRecipe = () => {
        lockThisRecipe(recipe.id);
    }


    return (
        <Fragment>
            <div className="flex flex-col justify-between gap-x-96 py-5 hover:bg-green-300/30 px-4 rounded-md hover:border-2 cursor-pointer w-full"
                onClick={recipe.open === false ? unlockRecipe : lockRecipe}>
                <div className="flex">
                    <div className="min-w-0 flex-auto">
                        <p className={`text-sm font-semibold leading-6 ${recipe.open === true ? "text-green-500" : "text-gray-800"}`}>{recipe.title}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row sm:items-end gap-1 justify-end">
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
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-bold leading-6 text-green-500/80">Description:</p>
                                    <p className="text-sm font-medium leading-6 text-gray-700">{recipe.description}</p>
                                </div>
                                <button className="cursor-pointer my-2 justify-end inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800">
                                    <PencilSquareIcon className="h-8 w-8  px-2" />
                                </button>
                            </div>
                            <div className="grid grid-rows-2 gap-5 sm:grid-rows-1 sm:grid-cols-2">
                                <IngredientList ingredients={selectedRecipe?.ingredients} />
                                <StepList steps={selectedRecipe?.steps} />
                            </div>
                        </Fragment>
                    )}
                </div>


            </div>
        </Fragment >
    );
}

