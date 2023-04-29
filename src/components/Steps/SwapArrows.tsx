import { Fragment, useState } from "react";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ArrowSmallDownIcon, ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { Step } from "../../feature/recipe/recipeService";

// Component to display a single Step
export default function SwapArrows({ step }: { step: Step }) {
    const { swapSteps, getRecipeSteps, steps } = useRecipeStore();

    // function to swap steps up
    const handleSwapUp = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(step);
        swapSteps(step.recipe_id, step.id, step.prev_step);
        getRecipeSteps(step.recipe_id);
    }

    // function to swap steps down
    const handleSwapDown = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(step);
        swapSteps(step.recipe_id, step.id, step.next_step);
        getRecipeSteps(step.recipe_id);
    }


    return (
        <Fragment>
            <div className="flex flex-row gap-0.5 mr-0.5 items-center">
                {/* If there is only one step, don't show the arrows */}
                {(step.prev_step === null && step.next_step === null) && (
                    <Fragment>
                    </Fragment>
                )}
                {/* If it's the first step, don't show the up arrow */}
                {(step.prev_step === null && step.next_step !== null) && (
                    <Fragment>
                        <button type="submit" onClick={handleSwapDown} className="bg-emerald-500/80 rounded-md p-0.5 mr-0.5">
                            <ArrowSmallDownIcon className="h-4 w-4 text-white" />
                        </button>
                    </Fragment>
                )}
                {/* If it's the last step, don't show the down arrow */}
                {(step.prev_step !== null && step.next_step === null) && (
                    <Fragment>
                        <button type="submit" onClick={handleSwapUp} className="bg-emerald-500/80 rounded-md p-0.5 mr-0.5">
                            <ArrowSmallUpIcon className="h-4 w-4 text-white" />
                        </button>
                    </Fragment>
                )}
                {/* If it's neither the first nor the last step, show both arrows */}
                {(step.prev_step !== null && step.next_step !== null) && (
                    <Fragment>
                        <button type="submit" onClick={handleSwapUp} className="bg-emerald-500/80 rounded-md p-0.5 mr-0.5">
                            <ArrowSmallUpIcon className="h-4 w-4 text-white" />
                        </button>
                        <button type="submit" onClick={handleSwapDown} className="bg-emerald-500/80 rounded-md p-0.5 mr-0.5">
                            <ArrowSmallDownIcon className="h-4 w-4 text-white" />
                        </button>
                    </Fragment>
                )}
            </div>
        </Fragment>
    )
}



