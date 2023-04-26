interface Ingredient {
    id: number,
    name: string,
    quantity: string,
    recipe_id: number,
}

interface Step {
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
}

export interface RecipeFull extends Recipe {
    ingredients: Ingredient[],
    steps: Step[],
}


const getRecipes = async (): Promise<RecipeOpen[]> => {
    const response = await fetch('/api/recipes');
    return await response.json();
}

const getRecipe = async (id: number): Promise<RecipeFull> => {
    const response = await fetch(`/api/recipes/${id}`);
    return await response.json();
}

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

const deleteRecipe = async (id: number): Promise<void> => {
    await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });
}

const searchRecipes = async (title: string): Promise<RecipeOpen[]> => {
    const response = await fetch(`/api/recipes/search/${title}`);
    return await response.json();
}

export const recipeService = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes
};

