import { useDispatch } from "react-redux"
import { addTasks } from "./toDoSlice"
import { useRef } from "react"

const TaskInput = () => {
    const nameRef = useRef()
    const dateRef = useRef()
    const dispatch = useDispatch()

    const addNewTask = () => {
        const name = nameRef.current.value 
        const date = dateRef.current.value 

        if(name.trim() === '')return 

        dispatch(addTasks({name, date}));
        nameRef.current.value = '';
        dateRef.current.value = '';

    }
    return (
        <>
            <input type="text" placeholder="Task Name" ref={nameRef} />
            <input type="date" ref={dateRef}/>
            <button onClick={()=> addNewTask()}>Add Task</button>
        </>
    )
}

export default TaskInput