import { Fragment, useState } from "react";
import useRecipeStore from "../../feature/recipe/recipeStore";


export const SearchRecipes = () => {
    const { searchRecipes, getRecipes } = useRecipeStore();
    const [search, setSearch] = useState("");

    const changeSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const searchQuery = search.trim();
        if (searchQuery) {
            searchRecipes(searchQuery);
        } else {
            getRecipes();
        }
        setSearch("");
    };

    const handleClear = (e: any) => {
        e.preventDefault();
        setSearch("");
        getRecipes();
    };



    return (
        <Fragment>
            <div className="w-full max-w-3xl sm:px-5 lg:col-span-2">
                <form
                    className="grid grid-cols-1 gap-y-2 sm:grid-cols-2"
                >
                    <div className="mt-1">
                        <input
                            type="text"
                            name="search"
                            value={search}
                            placeholder="Search for recipes"
                            className="block w-full cursor-pointer rounded-md border border-transparent bg-clarkGray/25 py-2 pl-2 pr-3 text-sm placeholder-gray-400 focus:border-green-300 focus:bg-green-300/25 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-green-300 sm:text-sm"
                            onChange={changeSearch}
                        />
                    </div>

                    <div className="sm:flex flex-row ml-2">
                        <button
                            type="submit"
                            className="cursor-pointer rounded-md bg-green-300 px-5 text-center font-semibold text-white no-underline transition hover:bg-green-500"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-md bg-green-300 px-5 ml-2 text-center font-semibold text-white no-underline transition hover:bg-green-500"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

