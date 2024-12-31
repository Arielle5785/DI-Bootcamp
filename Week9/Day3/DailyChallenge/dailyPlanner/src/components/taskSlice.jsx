import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    tasks: [], // List of all tasks
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTasks: (state, action) => {
            const newTask = {
                id: uuidv4(),
                name: action.payload.name,
                date: action.payload.date,
                active: true,
            };
            state.tasks.push(newTask);
            state.tasks = state.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.active = !task.active;
            }
        },
        editTask: (state, action) => {
            const { id, newName } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.name = newName; // Update the task name
            }
        },
    },
});

export const { addTasks, removeTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
