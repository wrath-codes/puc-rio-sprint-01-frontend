import { Fragment, useState } from "react";
import useRecipeStore from "../../../feature/recipe/recipeStore";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { StepBase, Step } from "../../../feature/recipe/recipeService";

// Component to edit a single step
export default function EditStepModal({ step, open_status }: { step: Step, open_status: boolean }) {
    const { updateStep, getRecipeSteps } = useRecipeStore();
    const [open, setOpen] = useState(open_status);

    // State to hold the updated step
    const [updatedStep, setUpdatedStep] = useState<StepBase>({
        title: step.title,
        description: step.description,
    })

    // Destructure the updated step
    const { title, description } = updatedStep;

    // Functions to open and close the modal
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Function to update the state when the user types in the input fields
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedStep((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // Function to update the step
    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        updateStep(step.recipe_id, step.id, updatedStep);
        handleClose();
        getRecipeSteps(step.recipe_id);
    }

    return (
        <Fragment>
            <button className="cursor-pointer inline-flex items-center pl-1 pr-0.5 rounded-md"
                onClick={handleOpen}>
                <PencilSquareIcon className="h-5 w-5 text-white bg-teal-500 hover:bg-teal-800 p-0.5 rounded-md" />
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
                                        <input type="text" name="title" id="title" value={title} onChange={onChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                                        <input type="text" name="description" id="description" value={description} onChange={onChange} className="border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
                                <button type="submit" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm">Update</button>
                                <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
