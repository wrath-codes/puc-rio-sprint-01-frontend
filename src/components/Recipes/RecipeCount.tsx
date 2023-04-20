export default function RecipeCount({ recipeCount }: { recipeCount: number }) {
    return (
        <div className=" text-4xl font-bold text-indigo-600  px-6 sm:px-5">
            {recipeCount}
        </div>
    )
}