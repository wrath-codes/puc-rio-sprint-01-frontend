import useRecipeStore from "../../feature/recipe/recipeStore";
import { TrashIcon, PencilSquareIcon, ChevronDownIcon } from "@heroicons/react/24/solid"

import { Recipe as RecipeType } from "../../feature/recipe/recipeService"; export default function Recipe({ recipe }: { recipe: RecipeType }) {
    const { deleteRecipe, getRecipe, updateRecipe } = useRecipeStore()
    return (
        <div className="flex justify-between gap-x-96 py-5 hover:bg-indigo-500/40 px-4 rounded-md">
            <div className="flex">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{recipe.title}</p>
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-row sm:items-end gap-1">
                <button className="cursor-pointer inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800"
                    onClick={() => {
                        getRecipe(recipe.id)
                        console.log(recipe)
                    }}>
                    <ChevronDownIcon className="h-8 w-8 py-2 px-2" />
                </button>
                <button className="cursor-pointer inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">
                    <TrashIcon className="h-8 w-8 py-2 px-2" />
                </button>
                <button className="cursor-pointer inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">
                    <PencilSquareIcon className="h-8 w-8 py-2 px-2" />
                </button>
            </div>
        </div>
    )
}