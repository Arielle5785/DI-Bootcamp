import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../counter/counterSlice'

const appReducer = combineReducers({
    counterReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store