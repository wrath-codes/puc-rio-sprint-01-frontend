import { Fragment, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { Step } from "../../../feature/recipe/recipeService";

// Component to display a single step
export default function DeleteStepModal({ step, open_status }: { step: Step, open_status: boolean }) {
    const { deleteStep, getRecipeSteps } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    // open modal
    const handleOpen = () => {
        setOpen(true);
    }

    // close modal
    const handleClose = () => {
        setOpen(false);
    }

    // delete step
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        deleteStep(step.recipe_id, step.id);
        handleClose();
        getRecipeSteps(step.recipe_id);
    }

    return (
        <Fragment>
            <button className="cursor-pointer inline-flex items-center pr-1 rounded-md"
                onClick={handleOpen}>
                <TrashIcon className="h-5 w-5 text-white bg-lime-500 hover:bg-lime-800 p-0.5 rounded-md" />
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
                                        <p className="text-sm font-medium text-gray-700">Are you sure you want to delete this step?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="submit" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-500 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Delete
                                </button>
                                <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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
