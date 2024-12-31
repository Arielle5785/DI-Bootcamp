import { useDispatch } from "react-redux"
import { removeTask } from "./toDoSlice"

const TaskRemove = ({id}) => {
    // const id = props.id 
    const dispatch = useDispatch()
   
    
    return (
        
        <>
            <button onClick={() => dispatch(removeTask(id))}> X </button>  
        </>
    )
}

export default TaskRemove