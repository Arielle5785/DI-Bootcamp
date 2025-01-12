// Recipe type definition
export type Recipe = {
  id: number; // Unique identifier for the recipe
  name: string; // Name of the recipe
  ingredients: string[]; // List of ingredients
  instructions: string[]; // Step-by-step instructions
  prepTimeMinutes: number; // Preparation time in minutes
  cookTimeMinutes: number; // Cooking time in minutes
  servings: number; // Number of servings
  difficulty: string; // Difficulty level (e.g., "Easy", "Medium", "Hard") - can be expanded or restricted
  cuisine: string; // Cuisine type (e.g., "Italian", "Chinese")
  caloriesPerServing: number; // Calories per serving
  tags: string[]; // Tags for categorization (e.g., "Vegetarian", "Gluten-Free")
  image: string; // URL for the recipe's image
  rating: number; // Average rating for the recipe
  reviewCount: number; // Number of reviews
  mealType: string[]; // Meal types (e.g., ["Breakfast", "Lunch", "Dinner"])
};

// // Optionally, define stricter enums for `difficulty` and `mealType` if applicable:

// // Enum for Difficulty Levels
// export enum Difficulty {
//   Easy = "Easy",
//   Medium = "Medium",
//   Hard = "Hard",
// }

// // Enum for Meal Types
// export enum MealType {
//   Breakfast = "Breakfast",
//   Lunch = "Lunch",
//   Dinner = "Dinner",
//   Snack = "Snack",
//   Dessert = "Dessert",
// }

// Example usage:
// If you decide to use enums, you can adjust the `Recipe` type like this:
// difficulty: Difficulty;
// mealType: MealType[];
