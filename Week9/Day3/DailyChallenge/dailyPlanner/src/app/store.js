import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "../components/TaskSlice";

const appReducer = combineReducers({
    tasksReducer, 
});

const store = configureStore({
    reducer: appReducer, 
});

export default store;
