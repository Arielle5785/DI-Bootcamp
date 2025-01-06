import { createSelector } from "@reduxjs/toolkit";
import { stateReducer } from "./postsSlice";

export const selectorPostState = createSelector([state], (stateReducer) => {
    return state.posts
});

export const selectorStatus = createSelector([stateReducer], state => {
    return state.status
});