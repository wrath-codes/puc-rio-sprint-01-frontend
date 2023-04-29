
import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RecipeBase } from "../../../feature/recipe/recipeService";

// Component to add a new recipe
export default function AddRecipeModal() {
    const { createRecipe } = useRecipeStore();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Function new title input
    const changeTitle = (e: any) => {
        setTitle(e.target.value);
    };

    // Function new description input
    const changeDescription = (e: any) => {
        setDescription(e.target.value);
    };

    // Function to submit the new recipe
    const submitRecipe = () => {
        const recipe: RecipeBase = {
            title: title,
            description: description,
        };
        createRecipe(recipe);
        setTitle("");
        setDescription("");

        setOpen(false);
    };

    return (
        <Fragment>
            <button
                className={`${open ? "bg-green-500" : "bg-green-300"} my-1 cursor-pointer inline-flex items-center border border-transparent text-xs leading-4 font-medium rounded-md text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <PlusIcon className="h-8 w-8 py-2 px-2" />
            </button>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            aria-hidden="true"
                        ></div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-green-500"
                                            id="modal-headline"
                                        >
                                            Add Recipe
                                        </h3>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                className="w-full border-2 placeholder-gray-400 focus:border-green-300 focus:bg-green-300/25 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-green-300 p-2 rounded-md"
                                                placeholder="Title"
                                                value={title}
                                                onChange={changeTitle}
                                            />
                                            <textarea
                                                className="w-full border-2 placeholder-gray-400 focus:border-green-300 focus:bg-green-300/25 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-green-300 p-2 rounded-md mt-2"
                                                placeholder="Description"
                                                value={description}
                                                onChange={changeDescription}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={submitRecipe}
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}