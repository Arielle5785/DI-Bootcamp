import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types/types";
import { fetchRecipes } from "../api/api";

// Define the state structure
interface DataState {
  recipes: Recipe[]; // List of recipes
  status: "idle" | "loading" | "succeeded" | "failed"; // Loading state
  error: string | null; // Error message
}

// Initial state
const initialState: DataState = {
  recipes: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch recipes
export const getRecipes = createAsyncThunk("data/getRecipes", async () => {
  const recipes = await fetchRecipes();
  return recipes;
});

// Create the slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Add custom reducers here if needed
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload);
    },
    deleteRecipe(state, action: PayloadAction<number>) {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch recipes.";
      });
  },
});

// Export actions for components
export const { addRecipe, deleteRecipe } = dataSlice.actions;

// Export the reducer to include in the store
export default dataSlice.reducer;
