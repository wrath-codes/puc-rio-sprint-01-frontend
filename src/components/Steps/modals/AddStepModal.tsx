import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { PlusIcon } from "@heroicons/react/24/solid";
import { StepBase } from "../../../feature/recipe/recipeService";

// Component to add a new step
export default function AddStepModal({ recipe_id, open_status }: { recipe_id: number, open_status: boolean }) {
    const { addStep, getRecipeSteps } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    // State to store the new step
    const [newStep, setNewStep] = useState<StepBase>({
        title: "",
        description: "",
    });

    // Destructure the new step
    const { title, description } = newStep;

    // Handlers for opening and closing the modal
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Handler for input changes
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStep((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // Handler for submitting the new step
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        addStep(recipe_id, newStep);
        handleClose();
        getRecipeSteps(recipe_id);
        setNewStep({
            title: "",
            description: "",
        })
    }

    return (
        <Fragment>
            <button className="cursor-pointer inline-flex items-center gap-1 group hover:bg-emerald-500/10 px-1 rounded-md"
                onClick={handleOpen}>
                <p className="text-emerald-500/90 font-medium text-sm group-hover:text-emerald-800">Add</p>
                <PlusIcon className="h-5 w-5 text-white bg-emerald-500 p-0.5 rounded-md group-hover:bg-emerald-800" />
            </button>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" name="title" id="title" value={title} onChange={onChange} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                                        <input type="text" name="description" id="description" value={description} onChange={onChange} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="submit" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Add
                                </button>
                                <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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