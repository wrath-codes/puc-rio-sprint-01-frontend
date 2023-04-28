import { Fragment } from "react";
import { Step } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import AddStepModal from "./modals/AddStepModal";
import EditStepModal from "./modals/EditStepModal";
import DeleteStepModal from "./modals/DeleteStepModal";
import SwapArrows from "./SwapArrows";

export default function StepList({ steps, edit }: { steps: Step[] | undefined, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    return (
        <Fragment>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-emerald-500/80">Steps</p>
                    <AddStepModal recipe_id={selectedRecipe?.id} open_status={false} />
                    <p className="text-sm font-bold leading-6 text-emerald-500/80 ml-4">{steps?.length}</p>
                </div>

                <ul className="flex flex-col gap-1 bg-emerald-400/30 rounded-md p-4">
                    {steps?.map((step) => (
                        <li key={step.id} className="text-sm font-semibold leading-6">
                            <div className="flex flex-row">
                                {(selectedRecipe?.id === step.recipe_id && edit === true) && (
                                    <Fragment>
                                        <EditStepModal step={step} open_status={false} />
                                        <DeleteStepModal step={step} open_status={false} />
                                        <SwapArrows step={step} edit={selectedRecipe.edit} />
                                    </Fragment>

                                )}
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-bold leading-6 text-gray-700">{step.title}</p>
                                    <p className="text-sm font-medium leading-6 text-gray-700">{step.description}</p>
                                </div>
                            </div>


                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}