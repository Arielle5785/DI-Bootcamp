import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    status: '',
};

export const delayAddThunk = createAsyncThunk('todos/delay5SEC', () =>
{return new Promise(
    (res,rej) =>{ setTimeout(()=>{res()}, 5*1000)}
)}
)

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
            addTask : (state, action) => {
                state.tasks.push({id : uuidv4(), name : action.payload.name, date: action.payload.date, active : true})
                state.tasks= state.tasks.sort((a,b) => new Date(a.date) - new Date (b.date))
            },
            removeTask : (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload)
            },
            
        },
    extraReducers(builder) { 
        builder
            .addCase(delayAddThunk.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    },
});

export const {addTask,removeTask } = todoSlice.actions
export default todoSlice.reducer