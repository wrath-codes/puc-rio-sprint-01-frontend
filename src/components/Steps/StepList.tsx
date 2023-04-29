import { Fragment } from "react";
import { Step as StepType } from "../../feature/recipe/recipeService";
import useRecipeStore from "../../feature/recipe/recipeStore";
import AddStepModal from "./modals/AddStepModal";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Step from "./Step";

// Component to display a single ingredient
export default function StepList({ steps, edit }: { steps: StepType[] | undefined, edit: boolean }) {
    const { selectedRecipe } = useRecipeStore();
    const [parent, enableAnimations] = useAutoAnimate()
    return (
        <Fragment>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-emerald-500/80">Steps</p>
                    <AddStepModal recipe_id={selectedRecipe?.id} open_status={false} />
                    <p className="text-sm font-bold leading-6 text-emerald-500/80 ml-4">{steps?.length}</p>
                </div>
                <ul ref={parent} className="flex flex-col gap-1 bg-emerald-400/30 rounded-md p-4">
                    {steps?.map((step) => (
                        <Step key={step.id} step={step} edit={edit} />
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}