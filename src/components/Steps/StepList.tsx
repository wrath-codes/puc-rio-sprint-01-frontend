import { Fragment } from "react";
import { Step } from "../../feature/recipe/recipeService";

export default function StepList({ steps }: { steps: Step[] | undefined }) {
    return (
        <Fragment>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold leading-6 text-green-500/80">Steps</p>
                    <p className="text-sm font-bold leading-6 text-emerald-400/80 ml-4">{steps?.length}</p>
                </div>

                <ul className="flex flex-col gap-1 bg-emerald-400/30 rounded-md p-4">
                    {steps?.map((step) => (
                        <li key={step.id} className="text-sm font-semibold leading-6">
                            <p className="text-sm font-bold leading-6 text-gray-700">{step.title}</p>
                            <p className="text-sm font-medium leading-6 text-gray-700">{step.description}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}