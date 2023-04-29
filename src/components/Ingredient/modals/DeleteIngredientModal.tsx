import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Ingredient } from "../../../feature/recipe/recipeService";

// Component to delete an ingredient
export default function DeleteIngredientModal({ ingredient, open_status }: { ingredient: Ingredient, open_status: boolean }) {
    const { deleteIngredient, getRecipeIngredients } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    // Open and close modal
    const handleOpen = () => {
        setOpen(true);
    }

    // Open and close modal
    const handleClose = () => {
        setOpen(false);
    }

    // Function to delete the ingredient
    const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        deleteIngredient(ingredient.recipe_id, ingredient.id);
        handleClose();
        getRecipeIngredients(ingredient.recipe_id);
    }

    return (
        <Fragment>
            <button
                onClick={handleOpen}
                className="hover:text-white  bg-fuchsia-400 p-1 rounded-md hover:bg-fuchsia-600"
            >
                <TrashIcon className="h-4 w-4" />
            </button>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <TrashIcon className="h-6 w-6 text-fuchsia-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Ingredient</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Are you sure you want to delete this ingredient?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-fuchsia-600 text-base font-medium text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}