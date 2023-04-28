import { Fragment, useState } from "react";
import useRecipeStore from "../../feature/recipe/recipeStore";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { Step } from "../../feature/recipe/recipeService";

export default function SwapArrows({ step, edit }: { step: Step, edit: boolean }) {
    const { swapSteps, getRecipeSteps, steps } = useRecipeStore();




    const handleSwapUp = () => {
        swapSteps(step.recipe_id, step.id, step.prev_step);
        getRecipeSteps(step.recipe_id);
    }

    const handleSwapDown = () => {
        swapSteps(step.recipe_id, step.id, step.next_step);
        getRecipeSteps(step.recipe_id);
    }

    return (
        <Fragment>
            <div className="flex flex-row gap-1 items-center">
                {edit && (
                    <Fragment>
                        {(step.prev_step === null && step.next_step === null) && (
                            <Fragment>
                            </Fragment>
                        )}
                        {(step.prev_step === null && step.next_step !== null) && (
                            <Fragment>
                                <button onClick={handleSwapDown} className="bg-emerald-500/80 rounded-md p-1">
                                    <ChevronDoubleDownIcon className="h-4 w-4 text-white" />
                                </button>
                            </Fragment>
                        )}
                        {(step.prev_step !== null && step.next_step === null) && (
                            <Fragment>
                                <button onClick={handleSwapUp} className="bg-emerald-500/80 rounded-md p-1">
                                    <ChevronDoubleUpIcon className="h-4 w-4 text-white" />
                                </button>
                            </Fragment>
                        )}
                        {(step.prev_step !== null && step.next_step !== null) && (
                            <Fragment>
                                <button onClick={handleSwapUp} className="bg-emerald-500/80 rounded-md p-1">
                                    <ChevronDoubleUpIcon className="h-4 w-4 text-white" />
                                </button>
                                <button onClick={handleSwapDown} className="bg-emerald-500/80 rounded-md p-1">
                                    <ChevronDoubleDownIcon className="h-4 w-4 text-white" />
                                </button>
                            </Fragment>
                        )}
                    </Fragment>
                )}
            </div>
        </Fragment>
    )
}



