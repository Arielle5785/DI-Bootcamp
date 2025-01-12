import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { getRecipes, addRecipe, deleteRecipe } from "../features/dataSlice";
import { Recipe } from "../types/types";

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getRecipes());
    }
  }, [dispatch, status]);

  const handleAddRecipe = () => {
    const newRecipe: Recipe = {
      id: Date.now(),
      name: "New Recipe",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      instructions: ["Step 1", "Step 2"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: "Easy",
      cuisine: "International",
      caloriesPerServing: 300,
      tags: ["Quick", "Easy"],
      image: "https://via.placeholder.com/150",
      rating: 0,
      reviewCount: 0,
      mealType: ["Lunch"],
    };
    dispatch(addRecipe(newRecipe));
  };

  const handleDeleteRecipe = (id: number) => {
    dispatch(deleteRecipe(id));
  };

  const toggleFavorite = (recipe: Recipe) => {
    // Optional favorite toggle logic here if added to the state
    console.log(`${recipe.name} marked as favorite!`);
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (recipes.length === 0) {
    return <p>No recipes found. Please try again later.</p>;
  }

  return (
    <div className="recipe-container">
      <button className="add-recipe-button" onClick={handleAddRecipe}>
        Add Recipe
      </button>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
              <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
              <button
                className="favorite-button"
                onClick={() => toggleFavorite(recipe)}
              >
                ❤️ Favorite
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
