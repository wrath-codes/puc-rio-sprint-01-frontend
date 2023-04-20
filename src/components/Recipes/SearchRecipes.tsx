

export const SearchRecipes = () => {

    return (
        <div className="w-full max-w-3xl sm:px-5 lg:col-span-2">
            <form
                className="grid grid-cols-1 gap-y-2 sm:grid-cols-2"
            >
                <div className="mt-1">
                    <input
                        type="text"
                        placeholder="Search for recipes"
                        className="block w-full cursor-pointer rounded-md border border-transparent bg-clarkGray/25 py-2 pl-2 pr-3 text-sm placeholder-gray-400 focus:border-indigo-600 focus:bg-indigo-600/25 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                    />
                </div>

                <div className="sm:flex flex-row ml-2">
                    <button
                        type="submit"
                        className="cursor-pointer rounded-md bg-indigo-600 px-5 text-center font-semibold text-white no-underline transition hover:bg-indigo-800"
                    >
                        Search
                    </button>
                    <button
                        type="submit"
                        className="cursor-pointer rounded-md bg-indigo-600 px-5 ml-2 text-center font-semibold text-white no-underline transition hover:bg-indigo-800"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

