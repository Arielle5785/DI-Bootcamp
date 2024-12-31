import { ADD_TASK, REMOVE_TASK } from "./actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks : []
}

export const tasksReducer = (state = initialState, action) => {
    if (action.type === ADD_TASK) {
        const newTask = [...state.tasks]
        newTask.push({id : uuidv4(), name : action.payload.name, date: action.payload.date, active : true})

        const sortTasks = newTask.sort((a,b) => new Date(a.date) - new Date (b.date))

        return {...state, tasks : sortTasks}
    } else if (action.type === REMOVE_TASK) {
        return {...state, tasks : state.tasks.filter(task => task.id != action.payload)}
    }

   
    return state
}