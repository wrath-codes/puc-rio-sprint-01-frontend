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

export interface RecipeFull extends RecipeBase {
    ingredients: Ingredient[],
    steps: Step[],
}


const getRecipes = async (): Promise<Recipe[]> => {
    const response = await fetch('/api/recipes');
    return await response.json();
}

const getRecipe = async (id: number): Promise<RecipeFull> => {
    const response = await fetch(`/api/recipes/${id}`);
    return await response.json();
}

const createRecipe = async (recipe: RecipeBase): Promise<Recipe> => {
    const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    return await response.json();
}

const updateRecipe = async (id: number, recipe: RecipeBase): Promise<Recipe> => {
    const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    return await response.json();
}

const deleteRecipe = async (id: number): Promise<void> => {
    await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });
}

export const recipeService = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};

