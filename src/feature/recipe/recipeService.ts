export interface IngredientBase {
    name: string,
    quantity: string,
}
export interface Ingredient extends IngredientBase {
    id: number,
    recipe_id: number,
}

export interface Step {
    id: number,
    title: string,
    description: string,
    recipe_id: number,
    prev_step: number,
    next_step: number,
}
export interface RecipeBase {
    title: string,
    description: string,
}

export interface Recipe extends RecipeBase {
    id: number,
}

export interface RecipeOpen extends Recipe {
    open: boolean,
    edit: boolean,
}

export interface RecipeFull extends Recipe {
    ingredients: Ingredient[],
    steps: Step[],
}

// The getRecipes function gets all recipes from the server
const getRecipes = async (): Promise<RecipeOpen[]> => {
    const response = await fetch('/api/recipes');
    return await response.json();
}

// The getRecipe function gets a single recipe from the server
const getRecipe = async (id: number): Promise<RecipeFull> => {
    const response = await fetch(`/api/recipes/${id}`);
    return await response.json();
}

// The createRecipe function creates a new recipe on the server
const createRecipe = async (recipe: RecipeBase): Promise<RecipeOpen> => {
    const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    const newRecipe = await response.json();
    return {
        ...newRecipe,
        open: false,
    };
}

// The updateRecipe function updates a recipe on the server
const updateRecipe = async (id: number, recipe: RecipeBase): Promise<RecipeOpen> => {
    const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    const updatedRecipe = await response.json();
    return {
        ...updatedRecipe,
        open: false,
    };
}

// The deleteRecipe function deletes a recipe on the server
const deleteRecipe = async (id: number): Promise<void> => {
    await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });
}

// The searchRecipes function searches for recipes on the server
const searchRecipes = async (title: string): Promise<RecipeOpen[]> => {
    const response = await fetch(`/api/recipes/search/${title}`);
    return await response.json();
}

// The addIngredient function adds an ingredient to a recipe on the server
const addIngredient = async (recipe_id: number, ingredient: IngredientBase): Promise<Ingredient> => {
    const response = await fetch(`/api/recipes/${recipe_id}/ingredients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
    });
    return await response.json();
}

// The getIngredient function gets an ingredient from a recipe on the server
const getIngredient = async (recipe_id: number, ingredient_id: number): Promise<Ingredient> => {
    const response = await fetch(`/api/recipes/${recipe_id}/ingredients/${ingredient_id}`);
    return await response.json();
}

// The getRecipeIngredients function gets all ingredients from a recipe on the server
const getRecipeIngredients = async (recipe_id: number): Promise<Ingredient[]> => {
    const response = await fetch(`/api/recipes/${recipe_id}/ingredients`);
    return await response.json();
}

// The updateIngredient function updates an ingredient from a recipe on the server
const updateIngredient = async (recipe_id: number, ingredient_id: number, ingredient: IngredientBase): Promise<Ingredient> => {
    const response = await fetch(`/api/recipes/${recipe_id}/ingredients/${ingredient_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
    });
    return await response.json();
}

// The deleteIngredient function deletes an ingredient from a recipe on the server
const deleteIngredient = async (recipe_id: number, ingredient_id: number): Promise<void> => {
    await fetch(`/api/recipes/${recipe_id}/ingredients/${ingredient_id}`, {
        method: 'DELETE',
    });
}


export const recipeService = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes,
    addIngredient,
    getIngredient,
    getRecipeIngredients,
    updateIngredient,
    deleteIngredient,
};

