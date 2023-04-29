import { Fragment } from "react";
import { RecipeOpen } from "../../feature/recipe/recipeService";
import EditRecipeModal from "./modals/EditRecipeModal";

// Component to display a single recipe description
export default function RecipeDetail({ recipe, edit }: { recipe: RecipeOpen, edit: boolean }) {
    return (
        <Fragment>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-2 text-green-500/80">Description:</p>
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-sm font-medium leading-2 text-gray-700 inline-block">
                        {recipe?.description}
                    </p>
                    {edit === true && (
                        <EditRecipeModal recipe={recipe} open_status={false} />
                    )}
                </div>
            </div>
        </Fragment>
    )
}   