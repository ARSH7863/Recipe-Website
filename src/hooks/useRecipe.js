import { useEffect, useState } from "react";
import { recipeAPI, transformRecipe } from "../services/recipeAPI.js";

export const useRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomRecipes = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiRecipe = await recipeAPI.getRandomRecipes(8);
      const transformedRecipes = apiRecipe.map(transformRecipe).filter(Boolean);
      setRecipe(transformedRecipes);
    } catch (error) {
      setError(`Failed to fetch recipes`);
      console.log(`Error Fetching Recipes: `, error);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async (searchTerm) => {
    if (!searchTerm.trim()) {
      await fetchRandomRecipes();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const apiRecipe = await recipeAPI.searchByName(searchTerm);
      const transformedRecipes = apiRecipe.map(transformRecipe).filter(Boolean);
      setRecipe(transformedRecipes);
    } catch (error) {
      setError(`Failed to fetch recipes`);
      console.log(`Error Searching Recipes: `, error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeByCategory = async (category) => {
    try {
      setLoading(true);
      setError(null);

      const apiRecipe = await recipeAPI.getMealsByCategory(category);

      const detailedRecipes = await Promise.all(
        apiRecipe.slice(0, 8).map(async (recipe) => {
          const detailed = await recipeAPI.getRecipeById(recipe.idMeal);
          return transformRecipe(detailed);
        })
      );

      setRecipe(detailedRecipes.filter(Boolean));
    } catch (error) {
      setError(`Failed to fetch recipes`);
      console.log(`Error By Category: `, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return {
    recipe,
    loading,
    error,
    searchRecipes,
    fetchRecipeByCategory,
    refetch: fetchRandomRecipes,
  };
};
