import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import DataFetcher from "./components/DataFetcher";
import { Recipe } from "./types/types";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Recipe Book</h1>
        <DataFetcher
          renderItem={(recipe: Recipe) => (
            <div className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              <div className="recipe-details">
                <h2>{recipe.name}</h2>
                <p>
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>
                <p>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <p>
                  <strong>Servings:</strong> {recipe.servings}
                </p>
                <p>
                  <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
                </p>
                <div>
                  <button
                    className="button favorite-button"
                    onClick={() =>
                      console.log(`${recipe.name} marked as favorite!`)
                    }
                  >
                    ❤️ Favorite
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() =>
                      console.log(`${recipe.name} deleted!`)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          emptyMessage="No recipes found. Please try again later."
        />
      </div>
    </Provider>
  );
};

export default App;
