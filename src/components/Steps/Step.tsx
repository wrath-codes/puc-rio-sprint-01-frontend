import { Fragment } from "react";
import { Step as StepType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import EditStepModal from "./modals/EditStepModal";
import DeleteStepModal from "./modals/DeleteStepModal";
import SwapArrows from "./SwapArrows";

// Component to display a single Step
export default function Step({ step, edit }: { step: StepType, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    return (
        <Fragment>
            <li key={step.id} className="text-sm font-semibold leading-6">
                <div className="flex flex-row">
                    {(selectedRecipe?.id === step.recipe_id && edit === true) && (
                        <Fragment>
                            <EditStepModal step={step} open_status={false} />
                            <DeleteStepModal step={step} open_status={false} />
                            <SwapArrows step={step} />
                        </Fragment>

                    )}
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold leading-6 text-gray-700">{step.title}</p>
                        <p className="text-sm font-medium leading-6 text-gray-700">{step.description}</p>
                    </div>
                </div>
            </li>
        </Fragment>
    )
}