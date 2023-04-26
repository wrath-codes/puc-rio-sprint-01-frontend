import { Fragment } from "react";

export default function Subtitle() {
    return (
        <Fragment>
            <p className="mt-6 text-md leading-2 text-gray-700">
                Here are some of the recipes we have in our database. You can add, edit, and delete recipes.
                Also, you can search for recipes by title. Feel free to add your own recipes, steps and ingredients.
                Enjoy!
            </p>
        </Fragment>
    )
}