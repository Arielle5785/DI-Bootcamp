import axios from "axios";
import { Recipe } from "../types/types";

// Define the base URL for the API
const BASE_URL = "https://dummyjson.com";

// Function to fetch recipes from the API
export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes`);
    return response.data.recipes; // Assuming the API response structure has a `recipes` array
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw new Error("Could not fetch recipes.");
  }
};
    