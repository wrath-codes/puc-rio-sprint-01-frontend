import { recipeService, RecipeFull, RecipeBase, RecipeOpen, Ingredient, IngredientBase } from './recipeService';
import { create } from "zustand";

// RecipeStore is a store that holds the state of the recipes
type RecipeStore = {

    // states
    recipes: RecipeOpen[],
    selectedRecipe: RecipeFull | null,
    ingredient: Ingredient | null,
    ingredients: Ingredient[],

    // actions related to recipe
    getRecipes: () => Promise<void>,
    getRecipe: (id: number) => Promise<void>,
    createRecipe: (recipe: RecipeBase) => Promise<void>,
    updateRecipe: (id: number, recipe: RecipeBase) => Promise<void>,
    deleteRecipe: (id: number) => Promise<void>,
    resetRecipe: () => void,
    resetRecipes: () => void,
    searchRecipes: (title: string) => Promise<void>,
    lockOtherRecipes: (id: number) => void,
    unlockThisRecipe: (id: number) => void,
    lockThisRecipe: (id: number) => void,
    editRecipeOn: (id: number) => void,
    editRecipeOff: (id: number) => void,

    // actions related to ingredient
    addIngredient: (recipe_id: number, ingredient: IngredientBase) => Promise<void>,
    getIngredient: (recipe_id: number, ingredient_id: number) => Promise<void>,
    getRecipeIngredients: (recipe_id: number) => Promise<void>,
    updateIngredient: (recipe_id: number, ingredient_id: number, ingredient: IngredientBase) => Promise<void>,
    deleteIngredient: (recipe_id: number, ingredient_id: number) => Promise<void>,

}

// This is the initial state of the store
const useRecipeStore = create<RecipeStore>(
    (set): RecipeStore => ({
        // The initial state of the recipes is an empty array
        recipes: [],

        // The initial state of the selected recipe is null
        selectedRecipe: null,

        // The initial state of the ingredient is null
        ingredient: null,

        // The initial state of the ingredients is an empty array
        ingredients: [],

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
        createRecipe: async (recipe: RecipeBase) => {
            const newRecipe = await recipeService.createRecipe(recipe);
            set(state => ({
                recipes: [...state.recipes, newRecipe],
            }));
        },

        // The updateRecipe function updates a recipe and updates the recipes array
        updateRecipe: async (id: number, recipe: RecipeBase) => {
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
            const newResult = await recipeService.searchRecipes(title);
            set({ recipes: newResult });
        },

        // The lockOtherRecipes function locks all recipes except the one with the given id
        lockOtherRecipes: (id: number) => {
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, open: true } : { ...recipe, open: false }),
            }));
        },

        // The unlockThisRecipe function unlocks the recipe with the given id
        unlockThisRecipe: (id: number) => {
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, open: true } : recipe),
            }));
        },

        // The lockThisRecipe function locks the recipe with the given id
        lockThisRecipe: (id: number) => {
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, open: false } : recipe),
            }));
        },

        // The editRecipeOn function sets the edit property of the recipe with the given id to true
        editRecipeOn: (id: number) => {
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, edit: true } : recipe),
            }));
        },

        // The editRecipeOff function sets the edit property of the recipe with the given id to false
        editRecipeOff: (id: number) => {
            set(state => ({
                recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, edit: false } : recipe),
            }));
        },

        // The addIngredient function adds an ingredient to the recipe with the given id
        addIngredient: async (recipe_id: number, ingredient: IngredientBase) => {
            const newIngredient = await recipeService.addIngredient(recipe_id, ingredient);
            set(state => ({
                ingredients: [...state.ingredients, newIngredient],
            }));
        },

        // The getIngredient function fetches an ingredient from the recipeService
        getIngredient: async (recipe_id: number, ingredient_id: number) => {
            const ingredient = await recipeService.getIngredient(recipe_id, ingredient_id);
            set({ ingredient });
        },

        // The getRecipeIngredients function fetches all the ingredients of a recipe from the recipeService
        getRecipeIngredients: async (recipe_id: number) => {
            const ingredients = await recipeService.getRecipeIngredients(recipe_id);
            set({ ingredients });
        },

        // The updateIngredient function updates an ingredient and updates the ingredients array
        updateIngredient: async (recipe_id: number, ingredient_id: number, ingredient: IngredientBase) => {
            const updatedIngredient = await recipeService.updateIngredient(recipe_id, ingredient_id, ingredient);
            set(state => ({
                ingredients: state.ingredients.map(ingredient => ingredient.id === ingredient_id ? updatedIngredient : ingredient),
            }));
        },

        // The deleteIngredient function deletes an ingredient and removes it from the ingredients array
        deleteIngredient: async (recipe_id: number, ingredient_id: number) => {
            await recipeService.deleteIngredient(recipe_id, ingredient_id);
            set(state => ({
                ingredients: state.ingredients.filter(ingredient => ingredient.id !== ingredient_id),
            }));
        }
    })
)

export default useRecipeStore;