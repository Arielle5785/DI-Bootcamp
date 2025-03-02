import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from '../ToDoToolkit/toDoSlice';

const appReducer = combineReducers({
    tasksReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store