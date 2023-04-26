import { Fragment, useState } from "react";
import { RecipeOpen as RecipeType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

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
            <div className="flex justify-between gap-x-96 py-5 hover:bg-green-300/40 px-4 rounded-md hover:border-2 cursor-pointer"
                onClick={recipe.open === false ? unlockRecipe : lockRecipe}>
                <div className="flex">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{recipe.title}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-row sm:items-end gap-1">
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
                {recipe.open === true && (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Ingredients</p>
                        <ul className="flex flex-col gap-1">
                            {selectedRecipe?.ingredients.map((ingredient) => (
                                <li key={ingredient.id} className="text-sm font-semibold leading-6 text-gray-900">{ingredient.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {recipe.open === true && (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Steps</p>
                        <ul className="flex flex-col gap-1">
                            {selectedRecipe?.steps.map((step) => (
                                <li key={step.id} className="text-sm font-semibold leading-6 text-gray-900">{step.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

