import { tasksReducer } from "./reducers";
import {configureStore, combineReducers} from '@reduxjs/toolkit'

const appReducer = combineReducers({
    tasksReducer
})

const store = configureStore({
    reducer : appReducer
})

export default store