import { configureStore, combineReducers } from "@reduxjs/toolkit";

import ageReducer from "../features/AgeSlice";

const appReducer = combineReducers({
  ageReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
