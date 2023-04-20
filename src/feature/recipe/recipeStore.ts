import { recipeService, Recipe, RecipeFull } from './recipeService';
import { create } from "zustand";

// RecipeStore is a store that holds the state of the recipes
type RecipeStore = {
    recipes: Recipe[],
    selectedRecipe: RecipeFull | null,
    getRecipes: () => Promise<void>,
    getRecipe: (id: number) => Promise<void>,
    createRecipe: (recipe: Recipe) => Promise<void>,
    updateRecipe: (id: number, recipe: Recipe) => Promise<void>,
    deleteRecipe: (id: number) => Promise<void>,
    resetRecipe: () => void,
    resetRecipes: () => void,
    searchRecipes: (title: string) => Promise<void>,
}

// This is the initial state of the store
const useRecipeStore = create<RecipeStore>(
    (set): RecipeStore => ({
        // The initial state of the recipes is an empty array
        recipes: [],

        // The initial state of the selected recipe is null
        selectedRecipe: null,

        // The getRecipes function fetches all the recipes from the recipeService
        getRecipes: async () => {
            const recipes = await recipeService.getRecipes();
            set({ recipes });
        },

        // The getRecipe function fetches a single recipe from the recipeService
        getRecipe: async (id: number) => {
            const recipe = await recipeService.getRecipe(id);
            set({ selectedRecipe: recipe });
        },

        // The createRecipe function creates a new recipe and adds it to the recipes array
        createRecipe: async (recipe: Recipe) => {
            const newRecipe = await recipeService.createRecipe(recipe);
            set(state => ({
                recipes: [...state.recipes, newRecipe],
            }));
        },

        // The updateRecipe function updates a recipe and updates the recipes array
        updateRecipe: async (id: number, recipe: Recipe) => {
            const updatedRecipe = await recipeService.updateRecipe(id, recipe);
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? updatedRecipe : recipe),
            }));
        },

        // The deleteRecipe function deletes a recipe and removes it from the recipes array
        deleteRecipe: async (id: number) => {
            await recipeService.deleteRecipe(id);
            set(state => ({
                recipes: state.recipes.filter(recipe => recipe.id !== id),
            }));
        },

        // The resetRecipe function resets the selected recipe to null
        resetRecipe: () => {
            set({ selectedRecipe: null });
        },

        // The resetRecipes function resets the recipes array to an empty array
        resetRecipes: () => {
            set({ recipes: [] });
        },

        // The searchRecipes function searches for recipes by title
        searchRecipes: async (title: string) => {
            recipes: await recipeService.searchRecipes(title);
        },
    })
)

export default useRecipeStore;