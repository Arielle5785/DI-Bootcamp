import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Import your reducers
import dataReducer from "../features/dataSlice";

// Combine multiple reducers
const appReducer = combineReducers({
  data: dataReducer, // Add the data slice reducer
  // Add other reducers here if needed, e.g., ageReducer
});

// Configure the Redux store
const store = configureStore({
  reducer: appReducer,
});

// Export store and types for TypeScript
export default store;

// Infer RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
