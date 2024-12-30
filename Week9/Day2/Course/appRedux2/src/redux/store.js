// import { createStore } from 'redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {counterReducer} from './reducers'
    
const appReducer = combineReducers({
    counterReducer
    changeReducer
})



const store = configureStore({
        // reducer: {
            // counter: counterReducer
    // }
    reducer: appReducer, changeReducer
    })
export default store;
