import { Fragment } from 'react'

export default function RecipeCount({ recipeCount }: { recipeCount: number }) {
    return (
        <Fragment>
            <div className=" text-4xl font-bold text-green-300  px-6 sm:px-5">
                {recipeCount}
            </div>
        </Fragment>
    )
}