import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { PencilIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Ingredient, IngredientBase } from "../../../feature/recipe/recipeService";

export default function EditIngredientModal({ ingredient, open_status }: { ingredient: Ingredient, open_status: boolean }) {
    const { updateIngredient, getRecipeIngredients } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    const [updatedIngredient, setUpdatedIngredient] = useState<IngredientBase>({
        name: ingredient.name,
        quantity: ingredient.quantity,
    })

    const { name, quantity } = updatedIngredient;


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedIngredient((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        updateIngredient(ingredient.recipe_id, ingredient.id, updatedIngredient);
        handleClose();
        getRecipeIngredients(ingredient.recipe_id);
    }

    return (
        <Fragment>
            <button className="cursor-pointer inline-flex items-center border border-transparent text-xs leading-4  font-medium rounded-md hover:text-white bg-indigo-400 p-1 hover:bg-indigo-600"
                onClick={handleOpen}>
                <PencilSquareIcon className="h-4 w-4" />
            </button>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <PencilIcon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Ingredient</h3>
                                        <div className="mt-2">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-row gap-2">
                                                    <label htmlFor="name"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={name}
                                                        placeholder="Ingredient Name"
                                                        onChange={onChange}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                    <label htmlFor="quantity"
                                                        className="block text-sm font-medium text-gray-700">
                                                        Quantity
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        id="quantity"
                                                        value={quantity}
                                                        placeholder="Ingredient Quantity"
                                                        onChange={onChange}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <button type="submit"
                                                    onClick={handleSubmit}
                                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-300 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 sm:ml-3 sm:w-auto sm:text-sm">
                                                    Edit
                                                </button>
                                                <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </Fragment>
    )
}


