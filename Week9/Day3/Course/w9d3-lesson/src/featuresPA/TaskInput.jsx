import { useDispatch } from "react-redux"
import { addTask } from "../ReduxPA/actions"
import { useRef } from "react"

const TaskInput = () => {
    const nameRef = useRef()
    const dateRef = useRef()
    const dispatch = useDispatch()

    const addNewTask = () => {
        const name = nameRef.current.value 
        const date = dateRef.current.value 

        if(name.trim() === '')return 

        dispatch (addTask(name, date))

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