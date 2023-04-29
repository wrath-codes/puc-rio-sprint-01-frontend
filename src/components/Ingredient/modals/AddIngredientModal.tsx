import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { PlusIcon } from "@heroicons/react/24/solid";
import { IngredientBase } from "../../../feature/recipe/recipeService";

// Component to add a new ingredient
export default function AddIngredientModal({ recipe_id, open_status }: { recipe_id: number, open_status: boolean }) {
    const { addIngredient, getRecipeIngredients } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    // State to store the new ingredient
    const [newIngredient, setNewIngredient] = useState<IngredientBase>({
        name: "",
        quantity: "",
    })

    // Destructure the new ingredient
    const { name, quantity } = newIngredient;

    // Functions to open and close the modal
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Function to update the new ingredient state
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewIngredient((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // Function to add the new ingredient
    const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        addIngredient(recipe_id, newIngredient);
        handleClose();
        getRecipeIngredients(recipe_id);
        setNewIngredient({
            name: "",
            quantity: "",
        })
    }

    return (
        <Fragment>
            <button className="cursor-pointer inline-flex items-center gap-1 group hover:bg-indigo-500/10 px-1 rounded-md"
                onClick={handleOpen}>
                <p className="text-indigo-500/90 font-medium text-sm group-hover:text-indigo-800">Add</p>
                <PlusIcon className="h-5 w-5 text-white bg-indigo-500 p-0.5 rounded-md group-hover:bg-indigo-800" />
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
                                        <PlusIcon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Add Ingredient</h3>
                                        <div className="mt-2">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col">
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                                    <input type="text" name="name" id="name" value={name} onChange={onChange} className="mt-1 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity</label>
                                                    <input type="text" name="quantity" id="quantity" value={quantity} onChange={onChange} className="mt-1 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                                                </div>
                                            </div>
                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <button type="submit" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-400 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Add</button>
                                                <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

