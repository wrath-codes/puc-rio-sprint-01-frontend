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
}

// This is the initial state of the store
const useRecipeStore = create<RecipeStore>(
    (set): RecipeStore => ({
        recipes: [],
        selectedRecipe: null,
        getRecipes: async () => {
            const recipes = await recipeService.getRecipes();
            set({ recipes });
        },
        getRecipe: async (id: number) => {
            const recipe = await recipeService.getRecipe(id);
            set({ selectedRecipe: recipe });
        },
        createRecipe: async (recipe: Recipe) => {
            const newRecipe = await recipeService.createRecipe(recipe);
            set(state => ({
                recipes: [...state.recipes, newRecipe],
            }));
        },
        updateRecipe: async (id: number, recipe: Recipe) => {
            const updatedRecipe = await recipeService.updateRecipe(id, recipe);
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? updatedRecipe : recipe),
            }));
        },
        deleteRecipe: async (id: number) => {
            await recipeService.deleteRecipe(id);
            set(state => ({
                recipes: state.recipes.filter(recipe => recipe.id !== id),
            }));
        },
        resetRecipe: () => {
            set({ selectedRecipe: null });
        },
    })
)

export default useRecipeStore;